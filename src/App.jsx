import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import { AboutSection, ExperienceCounters, PracticeAreas, ConsultationAndNews } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <AboutSection />
        <ExperienceCounters />
        <PracticeAreas />
        <ConsultationAndNews />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
