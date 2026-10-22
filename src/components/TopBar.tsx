import React from 'react';

interface TopBarProps {
  onOpenLocation: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenLocation }) => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="contacts-info">
          <a className="contacts-item" href="tel:+919844464174">
            <i className="fas fa-phone"></i>
            <span>+91 98444 64174</span>
          </a>
          <a className="contacts-item" href="tel:+918722110180">
            <i className="fas fa-phone"></i>
            <span>+91 87221 10180</span>
          </a>
          <a className="contacts-item" href="mailto:chandujaau1287@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>chandujaau1287@gmail.com</span>
          </a>
          <div
            className="contacts-item"
            id="open-location"
            onClick={onOpenLocation}
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-map-marker-alt"></i>
            <span>Gottigere, Bangalore</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/919844464174"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+919844464174">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
