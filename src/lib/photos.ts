import { supabase } from './supabase';
import { Photo } from '../types';

export const PHOTO_BUCKET = 'photos';

export const PHOTO_ALBUMS = [
  'Latest',
  'Bus',
  'Car',
  'Tempo',
  'Urbania 15+1',
] as const;

export type PhotoAlbum = (typeof PHOTO_ALBUMS)[number];

const makeStoragePath = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase() || 'jpg';
  const base = fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 50) || 'photo';
  const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const year = new Date().getFullYear();
  return `${year}/${unique}-${base}.${extension}`;
};

export async function fetchPhotos(): Promise<Photo[]> {
  const { data, error } = await supabase
    .from('photos')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as Photo[];
}

export async function uploadPhoto(
  file: File,
  meta: { album: string; title: string; caption: string }
): Promise<Photo> {
  const storagePath = makeStoragePath(file.name);

  const { error: uploadError } = await supabase.storage
    .from(PHOTO_BUCKET)
    .upload(storagePath, file, {
      cacheControl: '31536000',
      contentType: file.type || undefined,
      upsert: false,
    });

  if (uploadError) throw uploadError;

  const { data: publicUrlData } = supabase.storage
    .from(PHOTO_BUCKET)
    .getPublicUrl(storagePath);

  const { data, error } = await supabase
    .from('photos')
    .insert({
      album: meta.album,
      title: meta.title,
      caption: meta.caption || null,
      image_url: publicUrlData.publicUrl,
      storage_path: storagePath,
    })
    .select('*')
    .single();

  if (error) {
    // Roll back the uploaded file if the database row could not be created.
    await supabase.storage.from(PHOTO_BUCKET).remove([storagePath]);
    throw error;
  }

  return data as Photo;
}

export async function updatePhoto(
  id: string,
  changes: Pick<Photo, 'album' | 'title' | 'caption'>
): Promise<void> {
  const { error } = await supabase
    .from('photos')
    .update({
      album: changes.album,
      title: changes.title,
      caption: changes.caption || null,
    })
    .eq('id', id);

  if (error) throw error;
}

export async function deletePhoto(photo: Photo): Promise<void> {
  const { error } = await supabase.from('photos').delete().eq('id', photo.id);
  if (error) throw error;

  // The row is gone, so the website no longer shows the image. Removing the
  // stored file is best-effort and should not fail the whole operation.
  if (photo.storage_path) {
    const { error: storageError } = await supabase.storage
      .from(PHOTO_BUCKET)
      .remove([photo.storage_path]);

    if (storageError) {
      console.warn('Could not remove photo file from storage:', storageError);
    }
  }
}
