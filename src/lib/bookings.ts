import { supabase } from './supabase';
import { Booking, BookingFormData, BookingStatus } from '../types';

export async function createBooking(data: BookingFormData): Promise<void> {
  const { error } = await supabase.from('bookings').insert({
    name: data.name.trim(),
    email: data.email.trim() || null,
    phone: data.phone.trim(),
    service: data.service,
    message: data.message.trim() || null,
  });

  if (error) throw error;
}

export async function fetchBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as Booking[];
}

export async function updateBooking(
  id: string,
  changes: Partial<Pick<Booking, 'name' | 'email' | 'phone' | 'service' | 'message' | 'status'>>
): Promise<void> {
  const { error } = await supabase.from('bookings').update(changes).eq('id', id);
  if (error) throw error;
}

export async function setBookingStatus(
  id: string,
  status: BookingStatus
): Promise<void> {
  const { error } = await supabase.from('bookings').update({ status }).eq('id', id);
  if (error) throw error;
}

export async function deleteBooking(id: string): Promise<void> {
  const { error } = await supabase.from('bookings').delete().eq('id', id);
  if (error) throw error;
}
