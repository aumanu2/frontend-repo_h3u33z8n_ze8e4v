import React from 'react';
import { Gavel, Landmark, BookOpen, Scale, UserCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop" alt="Law team" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Our Firm</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">We are committed to delivering strategic, practical, and timely legal solutions. Our mission is to protect our clients' interests with integrity and excellence, while our vision is to be the most trusted legal partner for organizations and individuals. Our values center on accountability, transparency, and relentless advocacy.</p>
          <a href="#practice" className="mt-6 inline-block px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Know More</a>
        </div>
      </div>
    </section>
  );
}

export function ExperienceCounters() {
  const items = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Successful Cases', value: '500+' },
    { label: 'Legal Experts', value: '100+' },
    { label: 'Happy Clients', value: '1000+' },
  ];
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#3b82f6_0,transparent_25%),radial-gradient(circle_at_80%_30%,#22d3ee_0,transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((it) => (
            <div key={it.label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold">{it.value}</div>
              <div className="mt-1 text-slate-300 text-sm">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PracticeAreas() {
  const areas = [
    { icon: <BookOpen className="h-6 w-6 text-blue-600" />, title: 'Intellectual Property', desc: 'Safeguard innovations, trademarks, and creative assets.' },
    { icon: <Gavel className="h-6 w-6 text-blue-600" />, title: 'Civil Litigation', desc: 'Effective dispute resolution and advocacy in court.' },
    { icon: <Landmark className="h-6 w-6 text-blue-600" />, title: 'Tax Law', desc: 'Strategic planning and compliance for businesses and individuals.' },
    { icon: <UserCheck className="h-6 w-6 text-blue-600" />, title: 'Immigration', desc: 'Visas, residency, and cross-border mobility solutions.' },
    { icon: <Scale className="h-6 w-6 text-blue-600" />, title: 'Arbitration', desc: 'Neutral forums and efficient settlements for complex cases.' },
    { icon: <Gavel className="h-6 w-6 text-blue-600" />, title: 'Compliance', desc: 'Risk management, policy design, and regulatory guidance.' },
  ];

  return (
    <section id="practice" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Legal Practice Areas</h2>
          <p className="mt-3 text-slate-600">A comprehensive portfolio of legal disciplines to support your goals.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article key={a.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-50 grid place-items-center mb-4">{a.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{a.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultationAndNews() {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1528747045269-390fe33c19d4?q=80&w=1200&auto=format&fit=crop',
      title: 'Understanding Corporate Compliance in 2025',
      desc: 'Key regulatory changes and how your business can stay ahead.'
    },
    {
      img: 'https://images.unsplash.com/photo-1555371363-3e1b04fb6b77?q=80&w=1200&auto=format&fit=crop',
      title: 'Family Law: Protecting Your Interests',
      desc: 'What to know about custody, mediation, and fair settlements.'
    },
    {
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
      title: 'Intellectual Property for Startups',
      desc: 'Foundational steps to safeguard innovation at early stages.'
    },
  ];

  return (
    <section id="news" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div id="contact" className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Request Free Consultation</h3>
          <p className="mt-2 text-slate-600">Fill in your details and our team will reach out promptly.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input aria-label="Name" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
            <input aria-label="Email" type="email" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            <input aria-label="Phone" className="md:col-span-2 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" />
            <textarea aria-label="Message" rows={4} className="md:col-span-2 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" />
            <button type="button" className="md:col-span-2 inline-flex justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Request Free Consultation</button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Latest News & Articles</h3>
          <div className="mt-6 grid gap-6">
            {posts.map((p) => (
              <article key={p.title} className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
                  <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
                  <a href="#" className="mt-3 inline-block text-blue-700">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
