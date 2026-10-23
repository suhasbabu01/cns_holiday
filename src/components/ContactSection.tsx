import React, { useState, useEffect, useRef } from 'react';
import { BookingFormData } from '../types';
import { createBooking } from '../lib/bookings';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    service?: string;
  }>({});

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [whatsappFallbackLink, setWhatsappFallbackLink] = useState<string | null>(
    null
  );
  const [isSaving, setIsSaving] = useState(false);
  const [dbStatus, setDbStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const hasSavedRef = useRef(false);

  const saveBookingToDatabase = async () => {
    if (hasSavedRef.current) return;

    setIsSaving(true);
    setDbStatus('idle');
    try {
      await createBooking(formData);
      hasSavedRef.current = true;
      setDbStatus('saved');
    } catch (error) {
      console.error('Failed to save booking to Supabase:', error);
      setDbStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (preselectedService) {
      const options = [
        'Force Urbania 15+1 Luxury',
        'Innova Crysta – Local',
        'Innova Crysta – Outstation',
        'Tempo Traveller – Local',
        'Tempo Traveller – Outstation',
        'Bus – Group / Wedding',
        'Airport Pickup / Drop',
        'Custom South India Package',
      ];
      const match = options.find((opt) =>
        opt.toLowerCase().includes(preselectedService.toLowerCase()) ||
        preselectedService.toLowerCase().includes(opt.split('–')[0].trim().toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    hasSavedRef.current = false;
    setDbStatus('idle');
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; service?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a vehicle / trip';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendEmail = () => {
    if (!validate()) return;

    const emailBody = `\nTrip Booking Request – CNS Holiday\n----------------------------------\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nVehicle/Trip: ${formData.service}\nTrip Details: ${formData.message}\n`;
    window.location.href = `mailto:chandujaau1287@gmail.com?subject=New Trip Booking Request (${encodeURIComponent(
      formData.service
    )})&body=${encodeURIComponent(emailBody)}`;

    setSuccessMessage('Email client opened with your booking request!');
    setWhatsappFallbackLink(null);
    setTimeout(() => setSuccessMessage(null), 5000);

    // Persist the request to Supabase without blocking the email flow.
    void saveBookingToDatabase();
  };

  const handleSendWhatsapp = () => {
    if (!validate()) return;

    const whatsappMessage = `*New Trip Booking Request – CNS Holiday*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Vehicle / Trip:* ${formData.service}\n*Trip Details:* ${formData.message}\n\n_Safe Journey, Happy Memories_`;
    const url = `https://wa.me/919844464174?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    const newWindow = window.open(url, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      setWhatsappFallbackLink(url);
    } else {
      setSuccessMessage('WhatsApp opened with your trip request!');
      setWhatsappFallbackLink(null);
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 6000);

    // Persist the request to Supabase without blocking the WhatsApp flow.
    void saveBookingToDatabase();
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title scroll-reveal">
          <span className="section-subtitle">Book Now &bull; Safe &amp; Comfortable Journeys</span>
          <h2>Contact Us</h2>
          <p>
            The world is waiting for you! Call Chandranaik, WhatsApp or send your trip details for an instant quote.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info scroll-reveal-left">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-user-tie contact-ico"></i>
              </div>
              <div>
                <h4>Contact Person</h4>
                <p><strong>Chandranaik</strong> – CNS Holiday / CNS Travels</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt contact-ico"></i>
              </div>
              <div>
                <h4>Address</h4>
                <p>No 25/1, Raghavendra Colony, Gottigere, Bangalore - 560083</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone contact-ico"></i>
              </div>
              <div>
                <h4>Book Now (24/7)</h4>
                <p>
                  <a href="tel:+919844464174" className="link-contact">
                    +91 98444 64174
                  </a>{' '}
                  |{' '}
                  <a href="tel:+918722110180" className="link-contact">
                    87221 10180
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope contact-ico"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:chandujaau1287@gmail.com"
                    className="link-contact"
                  >
                    chandujaau1287@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-whatsapp contact-ico"></i>
              </div>
              <div>
                <h4>WhatsApp Instant Booking</h4>
                <p>
                  <a
                    href="https://wa.me/919844464174?text=Hi%20CNS%20Holiday%2C%20I%20want%20to%20book%20a%20trip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-contact"
                  >
                    Chat now &ndash; instant confirmed quotation
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form scroll-reveal-right">
            <form
              id="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendWhatsapp();
              }}
            >
              <div className="form-group floating-label">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your Name</label>
                {errors.name && (
                  <div className="error" style={{ display: 'block' }}>
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group floating-label">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Your Email (optional)</label>
                {errors.email && (
                  <div className="error" style={{ display: 'block' }}>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group floating-label">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Your Phone Number</label>
              </div>

              <div className="form-group">
                <select
                  className="form-control"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Vehicle / Trip Type
                  </option>
                  <option value="Force Urbania 15+1 Luxury">
                    Force Urbania 15+1 Luxury (Flagship)
                  </option>
                  <option value="Innova Crysta – Local">
                    Innova Crysta – Local (4hr/40km or 8hr/80km)
                  </option>
                  <option value="Innova Crysta – Outstation">
                    Innova Crysta – Outstation (Ooty, Coonoor, Mysore...)
                  </option>
                  <option value="Tempo Traveller – Local">
                    Tempo Traveller – Local Group Trip
                  </option>
                  <option value="Tempo Traveller – Outstation">
                    Tempo Traveller – Outstation Multi-day
                  </option>
                  <option value="Bus – Group / Wedding">
                    Bus / Coach – Group, Wedding &amp; Corporate
                  </option>
                  <option value="Airport Pickup / Drop">
                    Airport Pickup / Drop (24/7 Flight Tracking)
                  </option>
                  <option value="Custom South India Package">
                    Custom South India Tourism Package
                  </option>
                </select>
                {errors.service && (
                  <div className="error" style={{ display: 'block' }}>
                    {errors.service}
                  </div>
                )}
              </div>

              <div className="form-group floating-label">
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                />
                <label htmlFor="message">
                  Trip details – travel date, destination (Ooty, Mysore, Coorg...), passenger count
                </label>
              </div>

              <div className="button-group">
                <button
                  type="button"
                  className="custom-btn btn-email"
                  id="sendEmailBtn"
                  onClick={handleSendEmail}
                >
                  <i className="fas fa-envelope"></i> Send Email
                </button>
                <button
                  type="button"
                  className="custom-btn btn-whatsapp"
                  id="sendWhatsappBtn"
                  onClick={handleSendWhatsapp}
                >
                  <i className="fab fa-whatsapp"></i> Send WhatsApp
                </button>
              </div>
            </form>

            {successMessage && (
              <div
                className="success-message"
                id="successMessage"
                style={{ display: 'block' }}
              >
                {successMessage}
              </div>
            )}

            {isSaving && (
              <div className="booking-save-status" role="status">
                <i className="fas fa-circle-notch fa-spin"></i> Saving your request…
              </div>
            )}

            {!isSaving && dbStatus === 'saved' && (
              <div className="booking-save-status is-success" role="status">
                <i className="fas fa-check-circle"></i> Booking saved to our system. Our team will contact you shortly.
              </div>
            )}

            {!isSaving && dbStatus === 'error' && (
              <div className="booking-save-status is-error" role="alert">
                <i className="fas fa-exclamation-circle"></i> We couldn&apos;t save your request to our booking system. Please send it via WhatsApp or email.
              </div>
            )}

            {whatsappFallbackLink && (
              <div
                className="whatsapp-notification"
                id="whatsappNotification"
                style={{ display: 'block' }}
              >
                <p>Your message has been prepared for WhatsApp!</p>
                <p>
                  Click{' '}
                  <a
                    href={whatsappFallbackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="whatsappLink"
                  >
                    here
                  </a>{' '}
                  to send it via WhatsApp if it didn&apos;t open automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
