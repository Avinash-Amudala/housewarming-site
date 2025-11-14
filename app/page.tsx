'use client';

import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import PhotoUpload from './components/PhotoUpload';
import FamilySection from './components/FamilySection';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import LanguageSelector from './components/LanguageSelector';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
      <LanguageSelector />
      <LanguageToggle />
      <Hero />
      <EventDetails />
      <Gallery />
      <PhotoUpload />
      <FamilySection />
      <Footer />
    </main>
  );
}
