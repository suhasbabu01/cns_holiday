import React, { useState } from 'react';

export const WhyUsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="section clients-section" id="why-us">
      <svg className="clients-pattern" width="100%" height="100%">
        <defs>
          <pattern
            id="hexPattern"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,2 56,15 56,37 30,50 4,37 4,15"
              fill="none"
              stroke="rgba(26,47,122,0.08)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      <div className="container">
        <div className="section-title scroll-reveal">
          <span className="section-subtitle">Why CNS Holiday</span>
          <h2>Travel Comfortably, Reach Happily</h2>
          <p>New places • New memories • New adventures • New you</p>
        </div>

        <div className="clients-grid">
          {/* Card 1 */}
          <div
            className={`flip-card scroll-reveal ${flippedCards[0] ? 'flipped' : ''}`}
            data-delay="0"
            onClick={() => toggleFlip(0)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Safe &amp; Reliable</h3>
                <p className="flip-hint">
                  <i className="fas fa-sync-alt"></i>{' '}
                  <span className="hint-desktop">Hover</span>
                  <span className="hint-mobile">Tap</span> for details
                </p>
              </div>
              <div className="flip-card-back">
                <h3>Safe &amp; Reliable</h3>
                <p>
                  GPS-tracked vehicles, sanitized cabs, speed-governed buses.
                  Family-safe travel.
                </p>
                <a
                  href="#contact"
                  className="btn btn-sm"
                  onClick={scrollToContact}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`flip-card scroll-reveal ${flippedCards[1] ? 'flipped' : ''}`}
            data-delay="100"
            onClick={() => toggleFlip(1)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <h3>Experienced Drivers</h3>
                <p className="flip-hint">
                  <i className="fas fa-sync-alt"></i>{' '}
                  <span className="hint-desktop">Hover</span>
                  <span className="hint-mobile">Tap</span> for details
                </p>
              </div>
              <div className="flip-card-back">
                <h3>Experienced Drivers</h3>
                <p>
                  Ooty / Coonoor ghat specialists, airport on-time pickup, polite
                  uniformed drivers.
                </p>
                <a
                  href="#contact"
                  className="btn btn-sm"
                  onClick={scrollToContact}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`flip-card scroll-reveal ${flippedCards[2] ? 'flipped' : ''}`}
            data-delay="200"
            onClick={() => toggleFlip(2)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-icon">
                  <i className="fas fa-rupee-sign"></i>
                </div>
                <h3>Affordable Prices</h3>
                <p className="flip-hint">
                  <i className="fas fa-sync-alt"></i>{' '}
                  <span className="hint-desktop">Hover</span>
                  <span className="hint-mobile">Tap</span> for details
                </p>
              </div>
              <div className="flip-card-back">
                <h3>Transparent Pricing</h3>
                <p>
                  Fixed quote on call – 24/7 service. All-inclusive packages with
                  no hidden charges for Urbania, Innova, Tempo &amp; Bus.
                </p>
                <a
                  href="#contact"
                  className="btn btn-sm"
                  onClick={scrollToContact}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={`flip-card scroll-reveal ${flippedCards[3] ? 'flipped' : ''}`}
            data-delay="300"
            onClick={() => toggleFlip(3)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="flip-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>24/7 Support</h3>
                <p className="flip-hint">
                  <i className="fas fa-sync-alt"></i>{' '}
                  <span className="hint-desktop">Hover</span>
                  <span className="hint-mobile">Tap</span> for details
                </p>
              </div>
              <div className="flip-card-back">
                <h3>24/7 Support</h3>
                <p>
                  Call or WhatsApp 98444 64174 / 87221 10180 anytime. Backup
                  vehicle assurance.
                </p>
                <a
                  href="https://wa.me/919844464174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="journey-steps scroll-reveal">
          <div>
            <i className="fas fa-map-marked-alt"></i>
            <b>PLAN</b>
            <span>your route</span>
          </div>
          <div>
            <i className="fas fa-suitcase"></i>
            <b>PACK</b>
            <span>your bags</span>
          </div>
          <div>
            <i className="fas fa-camera"></i>
            <b>CAPTURE</b>
            <span>every moment</span>
          </div>
          <div>
            <i className="fas fa-heart"></i>
            <b>LIVE</b>
            <span>your story</span>
          </div>
        </div>
      </div>

      <div className="wave-divider wave-dark-to-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,60 C480,10 960,100 1440,40 L1440,120 L0,120 Z"
          />
          <path
            fill="#ffffff"
            d="M0,90 C320,50 720,110 1440,70 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};
