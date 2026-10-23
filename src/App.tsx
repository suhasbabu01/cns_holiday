import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { LocationModal } from './components/LocationModal';
import { HeroSection } from './components/HeroSection';
import { FleetStrip } from './components/FleetStrip';
import { FleetServicesSection } from './components/FleetServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { JustdialPhotosSection } from './components/JustdialPhotosSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Service } from './types';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState<Service | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('');

  // Initialize intersection observer-based entrance animations
  useScrollReveal([activeSection]);

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'fleet', 'photos', 'about', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top) {
            setActiveSection(id === 'why-us' ? 'about' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Contact Bar */}
      <TopBar onOpenLocation={() => setIsLocationModalOpen(true)} />

      {/* Main Header / Navigation */}
      <Header activeSection={activeSection} />

      {/* Location Map Popup */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Fleet Strip */}
        <FleetStrip />

        {/* Fleet & Services Bento Grid */}
        <FleetServicesSection
          onSelectService={(service) => setActiveServiceModal(service)}
        />

        {/* Justdial Verified Vehicle Photos Section */}
        <JustdialPhotosSection
          onBookVehicle={(vehicleTitle) => setPreselectedBookingService(vehicleTitle)}
        />

        {/* About CNS Holiday */}
        <AboutSection />

        {/* Why Choose Us & Journey Steps */}
        <WhyUsSection />

        {/* Contact & Booking Form */}
        <ContactSection preselectedService={preselectedBookingService} />
      </main>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookService={(serviceTitle) => {
          setPreselectedBookingService(serviceTitle);
        }}
      />

      {/* Footer */}
      <Footer />

      {/* Back to top circular button */}
      <BackToTop />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </>
  );
};

export default App;
