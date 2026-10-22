import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-title scroll-reveal">
          <span className="section-subtitle">Who We Are &bull; CNS Holiday</span>
          <h2>South India Tourism &amp; Travel Partner</h2>
          <p>Collect Moments, Not Things &mdash; Explore &bull; Dream &bull; Discover</p>
        </div>
        <div className="about-content">
          <div className="about-text scroll-reveal-left">
            <div className="about-motto-tag">
              <i className="fas fa-quote-left"></i> Powerful People's Come Powerful Places
            </div>
            <h2>Your Trusted Travel Partner in Bangalore</h2>
            <p>
              Founded and managed by <strong>Chandranaik</strong>, based in Gottigere, Bengaluru, <strong>CNS Holiday (CNS Travels)</strong> provides premier chauffeur-driven travel services — from our brand-new <strong>Force Urbania 15+1 Luxury</strong> flagship and <strong>Innova Crysta</strong> to high-roof <strong>Tempo Travellers</strong> and luxury coaches.
            </p>
            <p>
              Whether it&apos;s daily Bangalore city business, Kempegowda Airport pickup drops, or multi-day holidays across South India, we ensure every ride is punctual, safe, and truly memorable.
            </p>

            {/* 3 Pillars from poster */}
            <div className="about-pillars scroll-reveal">
              <div className="pillar-badge">
                <i className="fas fa-gopuram"></i>
                <div>
                  <strong>Spiritual Heritage</strong>
                  <span>Temples &amp; Pilgrimages</span>
                </div>
              </div>
              <div className="pillar-badge">
                <i className="fas fa-mountain"></i>
                <div>
                  <strong>Breathtaking Hill Stations</strong>
                  <span>Ooty, Coonoor, Coorg, Munnar</span>
                </div>
              </div>
              <div className="pillar-badge">
                <i className="fas fa-umbrella-beach"></i>
                <div>
                  <strong>Mesmerizing Beaches</strong>
                  <span>Pondicherry, Gokarna, Chennai</span>
                </div>
              </div>
            </div>

            {/* 4 Value propositions from poster */}
            <div className="about-experience-grid scroll-reveal">
              <div className="exp-item">
                <div className="exp-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h5>New Places</h5>
                  <span>New Experiences</span>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-icon"><i className="fas fa-camera-retro"></i></div>
                <div>
                  <h5>New Memories</h5>
                  <span>Timeless Stories</span>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-icon"><i className="fas fa-compass"></i></div>
                <div>
                  <h5>New Adventures</h5>
                  <span>Limitless Thrills</span>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-icon"><i className="fas fa-heart"></i></div>
                <div>
                  <h5>New You</h5>
                  <span>Better Every Journey</span>
                </div>
              </div>
            </div>

            <div className="about-features scroll-reveal">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt about-tick"></i>
                </div>
                <div>
                  <h4>Safe &amp; Reliable</h4>
                  <p>GPS-enabled sanitized vehicles, verified hill-station chauffeurs</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-id-card about-tick"></i>
                </div>
                <div>
                  <h4>Experienced Drivers</h4>
                  <p>Ooty/Coonoor ghat experts, polite uniformed professionals</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-phone-volume about-tick"></i>
                </div>
                <div>
                  <h4>Fixed Quote &amp; 24/7 Support</h4>
                  <p>Fixed quote on call – 24/7 service, on-trip assistance anytime</p>
                </div>
              </div>
            </div>

            <div className="about-cta scroll-reveal">
              <a href="tel:+919844464174" className="btn btn-glow">
                <i className="fas fa-phone"></i> 98444 64174
              </a>
              <a href="tel:+918722110180" className="btn btn-accent btn-glow">
                <i className="fas fa-phone"></i> 87221 10180
              </a>
              <span className="trusted-partner-stamp">
                <i className="fas fa-award"></i> Trusted Travel Partner
              </span>
            </div>
          </div>

          <div className="about-img-wrapper scroll-reveal-right">
            <svg className="about-blob" viewBox="0 0 600 600">
              <path
                d="M300,520 C180,520 80,420 80,300 C80,180 180,80 300,80 C420,80 520,180 520,300 C520,420 420,520 300,520 Z"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeDasharray="10,8"
                opacity="0.3"
                className="blob-rotate"
              />
              <path
                d="M300,490 C200,490 110,400 110,300 C110,200 200,110 300,110 C400,110 490,200 490,300 C490,400 400,490 300,490 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="6,10"
                opacity="0.2"
                className="blob-rotate-reverse"
              />
            </svg>
            <div className="about-img">
              <img
                src="/img/fleet/urbania-luxury.jpg"
                alt="CNS Travels Black Force Urbania Luxury Fleet"
                referrerPolicy="no-referrer"
              />
              <div className="about-img-badge">
                <i className="fas fa-car-side"></i> Official CNS Fleet
              </div>
            </div>
            <svg
              className="about-bracket top-left"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path
                d="M0,50 L0,10 Q0,0 10,0 L50,0"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
              />
            </svg>
            <svg
              className="about-bracket bottom-right"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path
                d="M50,0 L50,40 Q50,50 40,50 L0,50"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="wave-divider wave-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(27,54,145,0.18)"
            d="M0,60 C360,10 720,100 1440,40 L1440,120 L0,120 Z"
          />
          <path
            fill="#DCE7FF"
            d="M0,90 C480,50 960,110 1440,70 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};
