import React from 'react';
import { Scale, Briefcase, Shield, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    title: 'Corporate Law',
    desc: 'Guidance on mergers, acquisitions, compliance, governance, and complex transactions.'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'Criminal Defense',
    desc: 'Strategic defense and representation to protect your rights at every stage.'
  },
  {
    icon: <Scale className="h-6 w-6 text-blue-600" />,
    title: 'Family Law',
    desc: 'Compassionate counsel for divorce, custody, adoption, and marital agreements.'
  },
  {
    icon: <Building2 className="h-6 w-6 text-blue-600" />,
    title: 'Real Estate Law',
    desc: 'End-to-end legal support for property transactions, leasing, and development.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Expert legal support across key practice areas with a client-first approach.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-50 grid place-items-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              <a href="#practice" className="mt-4 inline-flex items-center gap-2 text-blue-700 group-hover:gap-3 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
