export type FilterCategory = 'all' | 'local' | 'outstation' | 'airport';

export interface Service {
  id: number;
  title: string;
  shortDesc: string;
  icon: string;
  image?: string;
  size: 'large' | 'small' | 'wide';
  categories: string[];
  fullDesc: string;
  included: string[];
  process: string[];
  documents: string[];
  timeline: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  service: string;
  message: string | null;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
}
