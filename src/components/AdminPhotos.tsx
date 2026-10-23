import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  deletePhoto,
  fetchPhotos,
  PHOTO_ALBUMS,
  updatePhoto,
  uploadPhoto,
} from '../lib/photos';
import { Photo } from '../types';

const errorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  if (error && typeof error === 'object' && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === 'string' && message) return message;
  }
  return 'Something went wrong. Please try again.';
};

const prettyFileName = (name: string) =>
  name
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const fileValidationError = (file: File): string | null => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return `"${file.name}" is not a JPG, PNG, WebP or GIF image.`;
  }
  if (file.size > MAX_FILE_BYTES) {
    return `"${file.name}" is larger than 10 MB.`;
  }
  return null;
};

export const AdminPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Upload form
  const [album, setAlbum] = useState<string>(PHOTO_ALBUMS[0]);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const [notice, setNotice] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit modal
  const [editing, setEditing] = useState<Photo | null>(null);
  const [editForm, setEditForm] = useState<{
    album: string;
    title: string;
    caption: string;
  } | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      setPhotos(await fetchPhotos());
    } catch (error) {
      setLoadError(errorMessage(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPhotos();
  }, [loadPhotos]);

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setActionError(null);
    setNotice(null);

    const selected = files ? Array.from(files) : [];
    if (selected.length === 0) {
      setActionError('Please choose at least one image to upload.');
      return;
    }

    const invalidFile = selected
      .map(fileValidationError)
      .find((message) => message !== null);
    if (invalidFile) {
      setActionError(invalidFile);
      return;
    }

    setUploading(true);
    try {
      for (let index = 0; index < selected.length; index += 1) {
        const file = selected[index];
        setUploadProgress(`Uploading ${index + 1} of ${selected.length}…`);

        const fallbackTitle = prettyFileName(file.name) || 'Fleet photo';
        const itemTitle = title.trim()
          ? selected.length === 1
            ? title.trim()
            : `${title.trim()} ${index + 1}`
          : fallbackTitle;

        await uploadPhoto(file, { album, title: itemTitle, caption });
      }

      setNotice(
        `${selected.length} photo${selected.length === 1 ? '' : 's'} uploaded and published to the Photos section.`
      );
      setTitle('');
      setCaption('');
      setFiles(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      await loadPhotos();
    } catch (error) {
      setActionError(`Upload failed: ${errorMessage(error)}`);
    } finally {
      setUploading(false);
      setUploadProgress('');
    }
  };

  const openEdit = (photo: Photo) => {
    setEditing(photo);
    setEditForm({
      album: photo.album,
      title: photo.title,
      caption: photo.caption ?? '',
    });
    setActionError(null);
  };

  const closeEdit = () => {
    setEditing(null);
    setEditForm(null);
  };

  const handleEditSave = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editForm || !editing) return;

    setBusyId(editing.id);
    setActionError(null);
    try {
      await updatePhoto(editing.id, editForm);
      setPhotos((prev) =>
        prev.map((photo) =>
          photo.id === editing.id
            ? {
                ...photo,
                album: editForm.album,
                title: editForm.title,
                caption: editForm.caption || null,
              }
            : photo
        )
      );
      closeEdit();
      setNotice('Photo details updated.');
    } catch (error) {
      setActionError(errorMessage(error));
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (photo: Photo) => {
    if (
      !window.confirm(
        `Delete "${photo.title}"? The image will be removed from storage and the website.`
      )
    ) {
      return;
    }

    setActionError(null);
    setBusyId(photo.id);
    try {
      await deletePhoto(photo);
      setPhotos((prev) => prev.filter((item) => item.id !== photo.id));
      setNotice('Photo deleted.');
    } catch (error) {
      setActionError(errorMessage(error));
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="admin-photos">
      {actionError && (
        <div className="admin-alert is-error" role="alert">
          {actionError}
        </div>
      )}
      {notice && (
        <div className="admin-alert is-success" role="status">
          {notice}
        </div>
      )}

      <section className="admin-panel-card admin-photo-upload">
        <div className="admin-panel-head">
          <div>
            <h2>Add photos</h2>
            <p>
              Images are uploaded to Supabase Storage and appear instantly in the
              Photos section of the website.
            </p>
          </div>
        </div>

        <form className="admin-photo-form" onSubmit={handleUpload}>
          <div className="admin-photo-form-grid">
            <label>
              Album
              <select
                value={album}
                onChange={(event) => setAlbum(event.target.value)}
              >
                {PHOTO_ALBUMS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Title (optional)
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. Force Urbania front view"
              />
            </label>

            <label className="is-full">
              Caption (optional)
              <textarea
                rows={2}
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                placeholder="Short description shown in the photo gallery"
              />
            </label>

            <label className="is-full is-file">
              Images
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                multiple
                onChange={(event) => setFiles(event.target.files)}
              />
              <small>
                {files && files.length > 0
                  ? `${files.length} selected: ${Array.from(files)
                      .map((file) => file.name)
                      .join(', ')}`
                  : 'Select one or more JPG, PNG or WebP images.'}
              </small>
            </label>
          </div>

          <div className="admin-photo-form-actions">
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={uploading}
            >
              <i className={`fas ${uploading ? 'fa-circle-notch fa-spin' : 'fa-cloud-arrow-up'}`}></i>
              {uploading ? uploadProgress || 'Uploading…' : 'Upload photos'}
            </button>
          </div>
        </form>
      </section>

      <section className="admin-panel-card">
        <div className="admin-panel-head">
          <div>
            <h2>Published photos</h2>
            <p>{photos.length} photo{photos.length === 1 ? '' : 's'} in Supabase Storage</p>
          </div>
          <button
            type="button"
            className="admin-btn admin-btn-ghost"
            onClick={() => void loadPhotos()}
            disabled={loading}
          >
            <i className={`fas fa-rotate ${loading ? 'fa-spin' : ''}`}></i> Refresh
          </button>
        </div>

        {loadError && (
          <div className="admin-alert is-error" role="alert">
            Could not load photos: {loadError}
            <button type="button" onClick={() => void loadPhotos()}>
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="admin-empty">
            <i className="fas fa-circle-notch fa-spin"></i> Loading photos…
          </div>
        ) : photos.length === 0 ? (
          <div className="admin-empty">
            <i className="fas fa-image"></i>
            <p>
              No photos stored yet. Upload your first photo above — it will replace
              the bundled gallery on the website.
            </p>
          </div>
        ) : (
          <div className="admin-photo-grid">
            {photos.map((photo) => (
              <article key={photo.id} className="admin-photo-card">
                <div className="admin-photo-thumb">
                  <img src={photo.image_url} alt={photo.title} loading="lazy" />
                  <span className="admin-photo-album">{photo.album}</span>
                </div>
                <div className="admin-photo-body">
                  <h3>{photo.title}</h3>
                  {photo.caption && <p>{photo.caption}</p>}
                  {photo.storage_path ? (
                    <small className="admin-photo-path">
                      <i className="fas fa-cloud"></i> Supabase Storage
                    </small>
                  ) : (
                    <small className="admin-photo-path">
                      <i className="fas fa-link"></i> External image
                    </small>
                  )}
                  <div className="admin-photo-actions">
                    <button
                      type="button"
                      className="admin-btn admin-btn-ghost"
                      onClick={() => openEdit(photo)}
                      disabled={busyId === photo.id}
                    >
                      <i className="fas fa-pen"></i> Edit
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn-danger"
                      onClick={() => void handleDelete(photo)}
                      disabled={busyId === photo.id}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {editing && editForm && (
        <div className="admin-modal-backdrop" role="presentation" onClick={closeEdit}>
          <form
            className="admin-modal"
            onSubmit={handleEditSave}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="admin-modal-head">
              <h2>Edit photo</h2>
              <button type="button" onClick={closeEdit} aria-label="Close">
                <i className="fas fa-xmark"></i>
              </button>
            </div>

            <img
              src={editing.image_url}
              alt={editing.title}
              className="admin-photo-preview"
            />

            <div className="admin-modal-grid">
              <label>
                Album
                <select
                  value={editForm.album}
                  onChange={(event) =>
                    setEditForm({ ...editForm, album: event.target.value })
                  }
                >
                  {PHOTO_ALBUMS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Title
                <input
                  value={editForm.title}
                  onChange={(event) =>
                    setEditForm({ ...editForm, title: event.target.value })
                  }
                  required
                />
              </label>

              <label className="is-full">
                Caption
                <textarea
                  rows={3}
                  value={editForm.caption}
                  onChange={(event) =>
                    setEditForm({ ...editForm, caption: event.target.value })
                  }
                />
              </label>
            </div>

            <div className="admin-modal-actions">
              <button type="button" className="admin-btn admin-btn-ghost" onClick={closeEdit}>
                Cancel
              </button>
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={busyId === editing.id}
              >
                {busyId === editing.id ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPhotos;
