import React, { useEffect } from 'react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`location-popup ${isOpen ? 'active' : ''}`}
      id="location-popup"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="location-content" onClick={(e) => e.stopPropagation()}>
        <div className="location-header">
          <h3>Our Location</h3>
          <button className="close-popup" id="close-location" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="location-body">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Raghavendra+Colony,+Gottigere,+Bangalore+560083&output=embed"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="CNS Holiday Location Map"
            />
          </div>
          <div className="location-details">
            <div className="location-detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>No 25/1, Raghavendra Colony, Gottigere, Bangalore - 560083</p>
              </div>
            </div>
            <div className="location-detail">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+919844464174" className="link-contact">
                    +91 98444 64174
                  </a>
                  ,{' '}
                  <a href="tel:+918722110180" className="link-contact">
                    87221 10180
                  </a>
                </p>
              </div>
            </div>
            <div className="location-detail">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:chandujaau1287@gmail.com" className="link-contact">
                    chandujaau1287@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="location-detail">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Service</h4>
                <p>24/7 Support – Local &amp; Outstation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
