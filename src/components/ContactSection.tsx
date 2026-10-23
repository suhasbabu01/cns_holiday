import React, { useEffect, useState } from 'react';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

interface SubmissionResult {
  method: 'whatsapp' | 'email';
  name: string;
  email: string;
  phone: string;
  service: string;
  whatsappUrl: string;
  whatsappOpened: boolean;
}

const WHATSAPP_NUMBER = '919844464174';
const EMAIL_ADDRESS = 'chandujaau1287@gmail.com';

const buildWhatsAppMessage = (data: BookingFormData) => {
  const lines = [
    '*New Trip Booking Request – CNS Holiday*',
    '',
    `*Name:* ${data.name}`,
  ];

  if (data.email) lines.push(`*Email:* ${data.email}`);

  lines.push(`*Phone:* ${data.phone}`, `*Vehicle / Trip:* ${data.service}`);

  if (data.message) lines.push(`*Trip Details:* ${data.message}`);

  lines.push('', '_Safe Journey, Happy Memories_');

  return lines.join('\n');
};

const buildWhatsAppUrl = (data: BookingFormData) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage(data)
  )}`;

const buildEmailUrl = (data: BookingFormData) => {
  const body = [
    'Trip Booking Request – CNS Holiday',
    '----------------------------------',
    `Name: ${data.name}`,
  ];

  if (data.email) body.push(`Email: ${data.email}`);

  body.push(`Phone: ${data.phone}`, `Vehicle/Trip: ${data.service}`);

  if (data.message) body.push(`Trip Details: ${data.message}`);

  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `New Trip Booking Request (${data.service})`
  )}&body=${encodeURIComponent(body.join('\n'))}`;
};

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

  const [isSending, setIsSending] = useState(false);
  const [sendingMethod, setSendingMethod] = useState<
    'whatsapp' | 'email' | null
  >(null);
  const [success, setSuccess] = useState<SubmissionResult | null>(null);

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
      const match = options.find(
        (opt) =>
          opt.toLowerCase().includes(preselectedService.toLowerCase()) ||
          preselectedService
            .toLowerCase()
            .includes(opt.split('–')[0].trim().toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [preselectedService]);

  // Lock page scroll and allow Escape to close the success popup.
  useEffect(() => {
    if (!success) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSuccess(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [success]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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

  const handleSubmit = async (method: 'whatsapp' | 'email') => {
    if (isSending || !validate()) return;

    const snapshot: BookingFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    const whatsappUrl = buildWhatsAppUrl(snapshot);

    setSuccess(null);
    setIsSending(true);
    setSendingMethod(method);

    // Open WhatsApp or the mail client synchronously so the browser treats it
    // as part of the user's click (and does not block the new tab).
    let whatsappOpened = false;
    if (method === 'whatsapp') {
      const opened = window.open(whatsappUrl, '_blank');
      if (opened) {
        opened.opener = null;
        whatsappOpened = true;
      }
    } else {
      window.location.href = buildEmailUrl(snapshot);
    }

    // Keep the sending state visible long enough to read.
    await new Promise((resolve) => setTimeout(resolve, 650));

    setIsSending(false);
    setSendingMethod(null);
    setSuccess({
      method,
      name: snapshot.name,
      email: snapshot.email,
      phone: snapshot.phone,
      service: snapshot.service,
      whatsappUrl,
      whatsappOpened,
    });
  };

  const closeSuccess = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setSuccess(null);
  };

  const firstName = success?.name.split(' ')[0] || 'traveller';

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title scroll-reveal">
          <span className="section-subtitle">
            Book Now &bull; Safe &amp; Comfortable Journeys
          </span>
          <h2>Contact Us</h2>
          <p>
            The world is waiting for you! Call Chandranaik, WhatsApp or send your
            trip details for an instant quote.
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
                <p>
                  <strong>Chandranaik</strong> – CNS Holiday / CNS Travels
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt contact-ico"></i>
              </div>
              <div>
                <h4>Address</h4>
                <p>
                  No 25/1, Raghavendra Colony, Gottigere, Bangalore - 560083
                </p>
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
              aria-busy={isSending}
              onSubmit={(e) => {
                e.preventDefault();
                void handleSubmit('whatsapp');
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
                  Trip details – travel date, destination (Ooty, Mysore,
                  Coorg...), passenger count
                </label>
              </div>

              <div className="button-group">
                <button
                  type="button"
                  className="custom-btn btn-email"
                  id="sendEmailBtn"
                  onClick={() => void handleSubmit('email')}
                  disabled={isSending}
                >
                  {isSending && sendingMethod === 'email' ? (
                    <>
                      <span className="btn-spinner" aria-hidden="true"></span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <i className="fas fa-envelope"></i> Send Email
                    </>
                  )}
                </button>
                <button
                  type="submit"
                  className="custom-btn btn-whatsapp"
                  id="sendWhatsappBtn"
                  disabled={isSending}
                >
                  {isSending && sendingMethod === 'whatsapp' ? (
                    <>
                      <span className="btn-spinner" aria-hidden="true"></span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <i className="fab fa-whatsapp"></i> Send WhatsApp
                    </>
                  )}
                </button>
              </div>

              <p className="booking-form-hint">
                This opens WhatsApp or email with your trip details filled in.
                No account needed.
              </p>
            </form>
          </div>
        </div>
      </div>

      {success && (
        <div
          className="booking-success-overlay"
          role="presentation"
          onClick={closeSuccess}
        >
          <div
            className="booking-success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="booking-success-close"
              onClick={closeSuccess}
              aria-label="Close confirmation"
            >
              <i className="fas fa-xmark"></i>
            </button>

            <div className="booking-success-icon" aria-hidden="true">
              <i className="fas fa-check"></i>
            </div>

            <span className="booking-success-kicker">Request prepared</span>
            <h3 id="booking-success-title">Thank you, {firstName}!</h3>

            <p className="booking-success-lead">
              Your request for <strong>{success.service}</strong> is ready.
              {success.method === 'whatsapp'
                ? ' Please send it in WhatsApp so our team can confirm your trip.'
                : ' Please send the email so our team can confirm your trip.'}
            </p>

            {success.method === 'whatsapp' ? (
              <p className="booking-success-note">
                <i className="fab fa-whatsapp"></i>{' '}
                {success.whatsappOpened
                  ? "WhatsApp has been opened in a new tab with your request. If it didn't open, use the button below."
                  : 'Tap the button below to open WhatsApp and send your request.'}
              </p>
            ) : (
              <p className="booking-success-note">
                <i className="fas fa-envelope"></i> Your email app should open
                with the request. You can also send it on WhatsApp below.
              </p>
            )}

            <div className="booking-success-summary">
              <div>
                <span>Name</span>
                <strong>{success.name}</strong>
              </div>
              <div>
                <span>Vehicle / Trip</span>
                <strong>{success.service}</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{success.phone}</strong>
              </div>
              {success.email && (
                <div>
                  <span>Email</span>
                  <strong>{success.email}</strong>
                </div>
              )}
            </div>

            <div className="booking-success-actions">
              <a
                className="custom-btn btn-whatsapp"
                href={success.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>{' '}
                {success.method === 'whatsapp'
                  ? 'Open WhatsApp again'
                  : 'Send on WhatsApp'}
              </a>
              <button
                type="button"
                className="custom-btn booking-success-done"
                onClick={closeSuccess}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
