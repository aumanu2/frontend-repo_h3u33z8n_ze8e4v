import React from 'react';

export default function Testimonials() {
  const items = [
    {
      name: 'Emily Carter',
      role: 'Entrepreneur',
      quote: 'Lex & Justice guided us through a complex acquisition with clarity and precision. Their team is exceptional.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Michael Thompson',
      role: 'Private Client',
      quote: 'Professional, responsive, and truly invested in our outcome. We felt supported at every step.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Sarah Nguyen',
      role: 'CTO, TechCo',
      quote: 'Their IP counsel helped us secure vital patents. Highly recommended for growing startups.',
      img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=500&auto=format&fit=crop'
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Said</h2>
          <p className="mt-3 text-slate-600">Real feedback from clients who trusted us with their most important matters.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <figcaption className="font-semibold text-slate-900">{t.name}</figcaption>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-slate-700 text-sm">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
