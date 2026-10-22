import React, { useState } from 'react';
import { Service, FilterCategory } from '../types';
import { servicesData } from '../data/servicesData';

interface FleetServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const FleetServicesSection: React.FC<FleetServicesSectionProps> = ({
  onSelectService,
}) => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section className="section services-section" id="fleet">
      <svg className="svg-dot-grid" width="100%" height="100%">
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="rgba(0,0,0,0.04)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      <div className="container">
        <div className="section-title scroll-reveal">
          <span className="section-subtitle">What We Offer</span>
          <h2>Our Fleet &amp; Services</h2>
          <p>Every ride, every destination — we've got you covered!</p>
        </div>

        <div className="services-filter scroll-reveal">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <i className="fas fa-th"></i> All
          </button>
          <button
            className={`filter-btn ${filter === 'local' ? 'active' : ''}`}
            onClick={() => setFilter('local')}
          >
            <i className="fas fa-city"></i> Local
          </button>
          <button
            className={`filter-btn ${filter === 'outstation' ? 'active' : ''}`}
            onClick={() => setFilter('outstation')}
          >
            <i className="fas fa-route"></i> Outstation
          </button>
          <button
            className={`filter-btn ${filter === 'airport' ? 'active' : ''}`}
            onClick={() => setFilter('airport')}
          >
            <i className="fas fa-plane"></i> Airport
          </button>
        </div>

        <div className="services-bento" id="servicesBento">
          {servicesData.map((service, index) => {
            const isMatch =
              filter === 'all' || service.categories.includes(filter);
            const num = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className={`bento-card size-${service.size} scroll-reveal ${
                  !isMatch ? 'filtered-out' : ''
                } ${service.image ? 'has-preview-image' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => onSelectService(service)}
                style={{ cursor: 'pointer' }}
              >
                <div className="bento-number">{num}</div>
                <div className="bento-icon">
                  <svg viewBox="0 0 80 90" aria-hidden="true">
                    <defs>
                      <linearGradient
                        id={`bentoGrad${service.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            service.size === 'large' ? '#f9d806' : 'var(--primary)'
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            service.size === 'large' ? '#ff4d30' : '#ffde29'
                          }
                        />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="40,2 76,24 76,66 40,88 4,66 4,24"
                      fill={`url(#bentoGrad${service.id})`}
                      opacity={service.size === 'large' ? '0.2' : '0.15'}
                    />
                    <polygon
                      points="40,10 68,28 68,62 40,80 12,62 12,28"
                      fill={`url(#bentoGrad${service.id})`}
                      opacity={service.size === 'large' ? '0.1' : '0.08'}
                    />
                  </svg>
                  <i className={`fas ${service.icon}`}></i>
                </div>

                {service.image && (
                  <div className="bento-vehicle-thumb">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                    />
                    <span className="bento-luxury-pill">
                      <i className="fas fa-crown"></i> 15+1 Luxury Flagship
                    </span>
                  </div>
                )}

                <div className="bento-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <div className="bento-tags">
                    {service.categories.map((cat) => (
                      <span key={cat} className={`bento-tag tag-${cat}`}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="bento-learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service);
                  }}
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
