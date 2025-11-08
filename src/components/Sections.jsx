import React, { useEffect, useRef, useState } from 'react';
import { Gavel, Landmark, BookOpen, Scale, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop"
            alt="Law team"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Our Firm</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are committed to delivering strategic, practical, and timely legal solutions. Our mission is to
            protect our clients' interests with integrity and excellence, while our vision is to be the most trusted
            legal partner for organizations and individuals. Our values center on accountability, transparency, and
            relentless advocacy.
          </p>
          <a
            href="#practice"
            className="mt-6 inline-block px-6 py-3 rounded-md bg-blue-700 text-white hover:bg-blue-600 transition-colors shadow"
          >
            Know More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceCounters() {
  const items = [
    { label: 'Years of Experience', value: 25, suffix: '+' },
    { label: 'Successful Cases', value: 500, suffix: '+' },
    { label: 'Legal Experts', value: 100, suffix: '+' },
    { label: 'Happy Clients', value: 1000, suffix: '+' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#3b82f6_0,transparent_25%),radial-gradient(circle_at_80%_30%,#22d3ee_0,transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((it) => (
            <CounterCard key={it.label} label={it.label} value={it.value} suffix={it.suffix} />)
          )}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-slate-300 text-sm">{label}</div>
    </motion.div>
  );
}

export function PracticeAreas() {
  const areas = [
    { icon: <BookOpen className="h-6 w-6 text-blue-700" />, title: 'Intellectual Property', desc: 'Safeguard innovations, trademarks, and creative assets.' },
    { icon: <Gavel className="h-6 w-6 text-blue-700" />, title: 'Civil Litigation', desc: 'Effective dispute resolution and advocacy in court.' },
    { icon: <Landmark className="h-6 w-6 text-blue-700" />, title: 'Tax Law', desc: 'Strategic planning and compliance for businesses and individuals.' },
    { icon: <UserCheck className="h-6 w-6 text-blue-700" />, title: 'Immigration', desc: 'Visas, residency, and cross-border mobility solutions.' },
    { icon: <Scale className="h-6 w-6 text-blue-700" />, title: 'Arbitration', desc: 'Neutral forums and efficient settlements for complex cases.' },
    { icon: <Gavel className="h-6 w-6 text-blue-700" />, title: 'Compliance', desc: 'Risk management, policy design, and regulatory guidance.' },
  ];

  return (
    <section id="practice" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Legal Practice Areas</h2>
          <p className="mt-3 text-slate-600">A comprehensive portfolio of legal disciplines to support your goals.</p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, idx) => (
            <motion.article
              key={a.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-50 grid place-items-center mb-4">{a.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{a.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-blue-700 group-hover:w-full transition-all" />
            </motion.article>
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
        <motion.div
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Request Free Consultation</h3>
          <p className="mt-2 text-slate-600">Fill in your details and our team will reach out promptly.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input aria-label="Name" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
            <input aria-label="Email" type="email" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
            <input aria-label="Phone" className="md:col-span-2 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Phone" />
            <textarea aria-label="Message" rows={4} className="md:col-span-2 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Message" />
            <button type="button" className="md:col-span-2 inline-flex justify-center px-6 py-3 rounded-md bg-blue-700 text-white hover:bg-blue-600 transition-colors shadow">
              Request Free Consultation
            </button>
          </form>
        </motion.div>

        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-semibold text-slate-900"
          >
            Latest News & Articles
          </motion.h3>
          <div className="mt-6 grid gap-6">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
                  <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
                  <a href="#" className="mt-3 inline-block text-blue-700 hover:text-blue-800">Read More →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
