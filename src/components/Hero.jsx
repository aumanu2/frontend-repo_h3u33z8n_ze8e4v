import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-950/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Your Trusted Legal Advisors</h1>
          <p className="mt-5 text-slate-200 text-lg">Professional legal solutions for businesses and individuals</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">Get Consultation</a>
            <a href="#about" className="px-6 py-3 rounded-md border border-slate-400/40 text-slate-100 hover:bg-white/10 transition-colors">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
