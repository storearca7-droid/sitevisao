import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { AppsSection } from './components/AppsSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#FF8C00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <AppsSection />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}