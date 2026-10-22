import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(150.8);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setOffset(circumference - progress * circumference);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? 'active' : ''}`}
      id="backToTop"
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
      title="Back to Top"
    >
      <svg className="progress-ring" viewBox="0 0 54 54">
        <circle
          className="progress-ring-bg"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="27"
          cy="27"
        />
        <circle
          className="progress-ring-circle"
          stroke="var(--primary)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="27"
          cy="27"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};
