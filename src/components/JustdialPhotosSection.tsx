
import React, { useRef, useState, useEffect } from 'react';
import {
  JustdialAlbum,
  justdialAlbumsData,
  JustdialPhotoItem,
} from '../data/justdialPhotosData';

interface JustdialPhotosSectionProps {
  onBookVehicle: (vehicleName: string) => void;
}

export const JustdialPhotosSection: React.FC<JustdialPhotosSectionProps> = ({
  onBookVehicle,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<JustdialAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedAlbum) return;
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev + 1) % selectedAlbum.photos.length);
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1
        );
      }
    };

    if (selectedAlbum) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedAlbum]);

  const handleOpenAlbum = (album: JustdialAlbum, startIndex = 0) => {
    setSelectedAlbum(album);
    setActivePhotoIndex(startIndex);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!selectedAlbum) return;

    setActivePhotoIndex(
      (prev) => (prev + 1) % selectedAlbum.photos.length
    );
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!selectedAlbum) return;

    setActivePhotoIndex((prev) =>
      prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1
    );
  };

  const currentPhoto: JustdialPhotoItem | null =
    selectedAlbum && selectedAlbum.photos[activePhotoIndex]
      ? selectedAlbum.photos[activePhotoIndex]
      : null;

  return (
    <>
      <section
        className="section jd-photos-section scroll-reveal"
        id="photos"
      >
        <div className="container">
          {/* Photos Section Header */}
          <div className="jd-photos-header">
            <div className="jd-header-left">
              <h2 className="jd-title">Photos</h2>
              <span className="jd-subtitle">
                Official fleet and interior photos from our verified business
                profile
              </span>
            </div>
          </div>

          {/* Carousel Wrapper */}
          <div className="jd-carousel-wrapper">
            <button
              type="button"
              className="jd-carousel-arrow jd-arrow-left"
              onClick={() => scroll('left')}
              aria-label="Previous photos"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="jd-cards-row" ref={scrollContainerRef}>
              {justdialAlbumsData.map((album) => (
                <div
                  key={album.id}
                  className="jd-photo-card"
                  onClick={() => handleOpenAlbum(album)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenAlbum(album);
                    }
                  }}
                >
                  <div className="jd-card-img-wrap">
                    <img
                      src={album.coverImage}
                      alt={album.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    <div className="jd-card-hover-overlay">
                      <i className="fas fa-search-plus"></i>
                      <span>View Photos</span>
                    </div>
                  </div>

                  <div className="jd-card-info">
                    <h3 className="jd-card-title">{album.name}</h3>
                    <p className="jd-card-count">
                      {album.photoCountLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="jd-carousel-arrow jd-arrow-right"
              onClick={() => scroll('right')}
              aria-label="Next photos"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal Gallery */}
      {selectedAlbum && currentPhoto && (
        <div
          className="jd-modal-overlay active"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="jd-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="jd-modal-header">
              <div className="jd-modal-title-wrap">
                <span className="jd-modal-album-tag">
                  {selectedAlbum.name} Album
                </span>

                <h3 className="jd-modal-title">{currentPhoto.title}</h3>

                <span className="jd-modal-counter">
                  {activePhotoIndex + 1} of {selectedAlbum.photos.length}
                </span>
              </div>

              <button
                type="button"
                className="jd-modal-close"
                onClick={handleCloseModal}
                aria-label="Close photo modal"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Media Body */}
            <div className="jd-modal-media-wrap">
              <button
                type="button"
                className="jd-modal-nav jd-nav-prev"
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="jd-modal-img-container">
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  referrerPolicy="no-referrer"
                  className="jd-modal-main-img"
                />
              </div>

              <button
                type="button"
                className="jd-modal-nav jd-nav-next"
                onClick={handleNextPhoto}
                aria-label="Next photo"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Modal Footer & Actions */}
            <div className="jd-modal-footer">
              <p className="jd-modal-caption">{currentPhoto.caption}</p>

              <div className="jd-modal-actions">
                <button
                  type="button"
                  className="btn btn-sm btn-accent btn-glow"
                  onClick={() => {
                    handleCloseModal();
                    onBookVehicle(currentPhoto.title);

                    const contactElem = document.getElementById('contact');

                    if (contactElem) {
                      const top =
                        contactElem.getBoundingClientRect().top +
                        window.scrollY -
                        80;

                      window.scrollTo({
                        top,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <i className="fas fa-calendar-check"></i> Book This Vehicle
                </button>

                <a
                  href={`https://wa.me/919844464174?text=${encodeURIComponent(
                    `Hi CNS Travels, I saw this photo on your website and want to book: ${currentPhoto.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                >
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>

                <a
                  href="tel:+919844464174"
                  className="btn btn-sm btn-secondary-call"
                >
                  <i className="fas fa-phone"></i> 98444 64174
                </a>
              </div>
            </div>

            {/* Thumbnails Strip */}
            {selectedAlbum.photos.length > 1 && (
              <div className="jd-modal-thumbnails">
                {selectedAlbum.photos.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`jd-thumb-btn ${
                      idx === activePhotoIndex ? 'active' : ''
                    }`}
                    onClick={() => setActivePhotoIndex(idx)}
                    aria-label={`View photo ${idx + 1}: ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
