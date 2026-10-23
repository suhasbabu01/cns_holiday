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

export interface BookingConfirmationDetails {
  refId: string;
  name: string;
  email?: string;
  phone: string;
  service: string;
  message?: string;
  method: 'whatsapp' | 'email';
  timestamp: string;
  actionUrl: string;
}

