import React, { useEffect } from 'react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleBookClick = () => {
    const title = service.title;
    onClose();
    onBookService(title);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="service-modal active"
      id="serviceModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="service-modal-header">
          <button
            className="service-modal-close"
            id="serviceModalClose"
            onClick={onClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="service-modal-icon">
            <i id="modalIcon" className={`fas ${service.icon}`}></i>
          </div>
          <div className="service-modal-header-text">
            <div className="service-modal-categories" id="modalCategories">
              {service.categories.map((c) => (
                <span key={c} className={`bento-tag tag-${c}`}>
                  {c}
                </span>
              ))}
            </div>
            <h2 id="modalTitle">{service.title}</h2>
          </div>
        </div>
        <div className="service-modal-body">
          {service.image && (
            <div className="modal-vehicle-banner">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
              />
              <div className="modal-vehicle-caption">
                <i className="fas fa-shield-alt"></i> Official CNS Fleet &bull; Force Urbania 15+1 Executive (Black Edition)
              </div>
            </div>
          )}

          <p className="service-modal-desc" id="modalDesc">
            {service.fullDesc}
          </p>
          <div className="service-modal-grid">
            <div className="service-modal-section">
              <h4>
                <i className="fas fa-check-circle"></i> What's Included
              </h4>
              <ul id="modalIncluded">
                {service.included.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-modal-section">
              <h4>
                <i className="fas fa-list-ol"></i> How to Book
              </h4>
              <ol id="modalProcess">
                {service.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="service-modal-section">
              <h4>
                <i className="fas fa-users"></i> Best For
              </h4>
              <ul id="modalDocuments">
                {service.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="service-modal-section">
              <h4>
                <i className="fas fa-tag"></i> Pricing
              </h4>
              <p id="modalTimeline">{service.timeline}</p>
            </div>
          </div>
          <div className="service-modal-cta">
            <button
              type="button"
              className="btn"
              id="modalQuoteBtn"
              onClick={handleBookClick}
            >
              Book This Vehicle
            </button>
            <a href="tel:+919844464174" className="btn btn-accent">
              <i className="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
