import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-blue-600 grid place-items-center text-white font-semibold">LJ</div>
              <span className="font-semibold tracking-wide text-white text-lg">Lex & Justice</span>
            </div>
            <p className="mt-4 text-slate-400 max-w-sm">A premier law firm delivering trusted counsel and tailored legal solutions for businesses and individuals.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-white" href="#home">Home</a></li>
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#practice">Practice Areas</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5" /> 123 Barrister Avenue, Suite 400, New York, NY</li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5 mt-0.5" /> contact@lexjustice.com</li>
              <li className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5" /> +1 (212) 555-0199</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © 2025 Lex & Justice Law Firm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
