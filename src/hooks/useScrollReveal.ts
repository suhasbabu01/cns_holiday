import { useEffect } from 'react';

/**
 * Custom hook to initialize IntersectionObserver-based entrance animations
 * (fade-in / slide-up / slide-left / slide-right / scale) for major page sections.
 */
export function useScrollReveal(dependencies: unknown[] = []) {
  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document
        .querySelectorAll(
          '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        )
        .forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const parent = target.parentElement;
            const siblings = parent
              ? Array.from(
                  parent.querySelectorAll(
                    ':scope > .scroll-reveal, :scope > .scroll-reveal-left, :scope > .scroll-reveal-right, :scope > .scroll-reveal-scale'
                  )
                )
              : [];
            const siblingIndex = siblings.indexOf(target);
            const customDelay = target.dataset.delay
              ? parseInt(target.dataset.delay, 10)
              : null;
            const delay =
              customDelay !== null
                ? customDelay
                : siblingIndex >= 0
                ? siblingIndex * 110
                : 0;

            setTimeout(() => {
              target.classList.add('revealed');
            }, delay);

            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );

    elements.forEach((el) => {
      // If already marked as revealed, skip
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}
