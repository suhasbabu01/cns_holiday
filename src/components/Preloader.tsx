import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = 'auto';
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="preloader">
      <div className="preloader-inner">
        <img
          src={`${import.meta.env.BASE_URL}img/cns-logo.png`}
          alt="CNS Holiday"
          className="preloader-logo"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('cns-logo.png')) {
              target.src = './img/cns-logo.png';
            }
          }}
        />
        <svg className="preloader-svg" width="100" height="100" viewBox="0 0 100 100">
          <circle
            className="preloader-ring"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(26,47,122,0.12)"
            strokeWidth="4"
          />
          <circle
            className="preloader-ring-fill"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className="preloader-text">CNS Holidays</div>
      </div>
    </div>
  );
};
