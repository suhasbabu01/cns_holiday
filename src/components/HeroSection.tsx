import React, { useState, useEffect, useRef } from 'react';

const typewriterPhrases = [
  "Force Urbania 15+1 Luxury",
  "Innova Crysta Premium Tours",
  "Tempo Traveller Group Trips",
  "On-time Airport Transfers",
  "Ooty • Coonoor • Mysore • Coorg",
  "Safe Journey, Happy Memories"
];

interface StatConfig {
  target: number;
  suffix: string;
  label: string;
  percent: number;
  colorVar: string;
}

const statsData: StatConfig[] = [
  { target: 5000, suffix: '+', label: 'Happy Trips', percent: 85, colorVar: 'var(--primary)' },
  { target: 10, suffix: '+', label: 'Years Exp.', percent: 70, colorVar: 'var(--accent)' },
  { target: 15, suffix: '+', label: 'Vehicles', percent: 90, colorVar: 'var(--primary)' },
  { target: 24, suffix: '/7', label: 'Support', percent: 100, colorVar: 'var(--accent)' },
];

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [ringsAnimated, setRingsAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        timeout = setTimeout(() => {}, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setRingsAnimated(true);

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounters(
              statsData.map((stat) => Math.floor(stat.target * easeOut))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounters(statsData.map((s) => s.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 38;

  return (
    <section className="hero" id="home">
      <svg
        className="hero-circuit-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,193,7,0.25)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,122,0,0.15)' }} />
          </linearGradient>
        </defs>
        <g className="circuit-lines" stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none">
          <path d="M0,200 H200 V400 H500 V300 H700" className="circuit-path" />
          <path d="M1440,150 H1200 V350 H900 V250 H750" className="circuit-path" />
          <path d="M100,700 H350 V500 H600 V650 H800" className="circuit-path" />
          <path d="M1440,600 H1100 V450 H850 V550" className="circuit-path" />
        </g>
        <g className="circuit-nodes" fill="var(--primary)">
          <circle cx="200" cy="200" r="4" className="circuit-node" />
          <circle cx="500" cy="400" r="4" className="circuit-node" />
          <circle cx="1200" cy="150" r="4" className="circuit-node" />
          <circle cx="900" cy="350" r="4" className="circuit-node" />
          <circle cx="350" cy="500" r="4" className="circuit-node" />
        </g>
        <g className="hero-shapes">
          <polygon
            points="120,100 140,70 160,100"
            fill="none"
            stroke="rgba(255,193,7,0.3)"
            strokeWidth="1.5"
            className="shape-float"
          />
          <circle
            cx="1350"
            cy="500"
            r="20"
            fill="none"
            stroke="rgba(255,122,0,0.25)"
            strokeWidth="1.5"
            className="shape-float-reverse"
          />
        </g>
      </svg>

      <div className="hero-gradient-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge-row scroll-reveal">
            <div className="hero-badge">
              <i className="fas fa-shield-alt"></i> SAFE JOURNEY, HAPPY MEMORIES
            </div>
            <div className="hero-priority-badge">
              <span className="priority-script">Your Journey,</span>
              <span className="priority-bold">OUR PRIORITY</span>
            </div>
          </div>

          <h1 className="hero-title scroll-reveal">
            Your Journey, <span className="text-gradient">OUR PRIORITY</span>
          </h1>

          <div className="typewriter-wrapper scroll-reveal">
            <span className="typewriter-prefix">Every ride, every destination – </span>
            <span className="typewriter-text" id="typewriter">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-desc scroll-reveal">
            <strong>Force Urbania 15+1 Luxury</strong> • <strong>Innova Crysta</strong> • <strong>Tempo Traveller</strong> • <strong>Bus &amp; Coach</strong> — Local city bookings, Kempegowda Airport transfers &amp; customized South India tour packages. Experienced drivers, fixed quote on call – 24/7 service by Chandranaik.
          </p>

          <div className="hero-btns scroll-reveal">
            <a href="tel:+919844464174" className="btn btn-glow">
              <i className="fas fa-phone"></i> 98444 64174
            </a>
            <a href="tel:+918722110180" className="btn btn-secondary-call">
              <i className="fas fa-phone"></i> 87221 10180
            </a>
            <a
              href="https://wa.me/919844464174?text=Hi%20CNS%20Holiday%2C%20I%20want%20to%20book%20a%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-glow"
            >
              <i className="fab fa-whatsapp"></i> Book on WhatsApp
            </a>
          </div>

          <div className="hero-tags scroll-reveal">
            <span><i className="fas fa-crown"></i> Urbania 15+1 Luxury</span>
            <span><i className="fas fa-map-marker-alt"></i> Local Bookings</span>
            <span><i className="fas fa-plane"></i> Airport Transfers</span>
            <span><i className="fas fa-route"></i> Outstation Tours</span>
          </div>

          {/* Fleet Lineup Banner Preview */}
          <div className="hero-fleet-banner scroll-reveal-scale">
            <img
              src="/img/fleet/cns-fleet-lineup.jpg"
              alt="CNS Holiday Luxury Fleet - Innova Crysta, Tempo Traveller, Bus"
              className="fleet-lineup-img"
            />
            <div className="fleet-lineup-overlay">
              <span className="lineup-tag">
                <i className="fas fa-check-circle"></i> Complete In-House Sanitized Fleet
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="stats-bar" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, idx) => {
              const targetOffset = circumference - (stat.percent / 100) * circumference;
              const currentOffset = ringsAnimated ? targetOffset : circumference;

              return (
                <div className="stat-item" key={stat.label}>
                  <svg className="stat-ring" width="90" height="90" viewBox="0 0 90 90">
                    <circle
                      cx="45"
                      cy="45"
                      r="38"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="3"
                    />
                    <circle
                      className="stat-ring-fill"
                      cx="45"
                      cy="45"
                      r="38"
                      fill="none"
                      stroke={stat.colorVar}
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: currentOffset,
                        transition: 'stroke-dashoffset 1.8s ease-out'
                      }}
                    />
                  </svg>
                  <div className="stat-inner">
                    <div className="stat-numbers">
                      <span className="stat-number">{counters[idx]}</span>
                      <span className="stat-suffix">{stat.suffix}</span>
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wave-divider wave-hero">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.05)"
            d="M0,80 C360,140 720,20 1080,80 C1280,110 1380,60 1440,80 L1440,150 L0,150 Z"
          />
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,100 C320,50 640,130 960,80 C1200,50 1350,110 1440,90 L1440,150 L0,150 Z"
          />
          <path
            fill="#ffffff"
            d="M0,120 C288,95 720,140 1080,105 C1200,95 1360,130 1440,110 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </section>
  );
};
