import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>CNS Holiday</h3>
            <p>Holiday – Safe Journey, Happy Memories.</p>
            <p className="footer-tag">Your Journey, OUR PRIORITY</p>
          </div>
          <div className="footer-col">
            <h3>Our Fleet</h3>
            <ul className="footer-links">
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Force Urbania 15+1 Luxury
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Innova Crysta
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Tempo Traveller
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Bus &amp; Coach
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Local &amp; Outstation Trips
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleScrollTo(e, 'fleet')}>
                  Our Fleet &amp; Services
                </a>
              </li>
              <li>
                <a href="#photos" onClick={(e) => handleScrollTo(e, 'photos')}>
                  Photos &amp; Fleet Gallery
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>
                  About CNS Holiday
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleScrollTo(e, 'why-us')}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                  Book Now &amp; Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-user-tie"></i> Contact: Chandranaik
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> No 25/1, Raghavendra
                Colony, Gottigere, Bangalore - 560083
              </li>
              <li>
                <i className="fas fa-phone"></i>{' '}
                <a href="tel:+919844464174">+91 98444 64174</a>,{' '}
                <a href="tel:+918722110180">87221 10180</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:chandujaau1287@gmail.com">
                  chandujaau1287@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} CNS Holiday. All rights reserved.
          </p>
          <a
            href="#home"
            className="built-by"
            onClick={(e) => handleScrollTo(e, 'home')}
          >
            Travel Comfortably, Reach Happily &hearts;
          </a>
        </div>
      </div>
    </footer>
  );
};
