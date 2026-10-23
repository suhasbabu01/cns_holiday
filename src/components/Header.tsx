import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <div className="logo">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}img/cns-logo.png`}
              alt="CNS Holiday"
              className="logo-img-cns"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('cns-logo.png')) {
                  target.src = './img/cns-logo.png';
                }
              }}
            />
          </a>
        </div>
        <div
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#fleet"
              className={`nav-link ${activeSection === 'fleet' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'fleet')}
            >
              Our Fleet
            </a>
          </li>
          <li>
            <a
              href="#photos"
              className={`nav-link ${activeSection === 'photos' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'photos')}
            >
              Photos
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="btn btn-sm nav-book"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
