'use client';

import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Free Trial', href: '#trial' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-950 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <a
            href="#trial"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-lime px-10 text-base font-bold text-charcoal-900 transition-all hover:scale-105 hover:glow-lime"
          >
            Start Your Free Trial Today
          </a>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime">
                <Dumbbell className="h-5 w-5 text-charcoal-900" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">
                APEX<span className="text-lime">STRENGTH</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Making elite strength training accessible to busy professionals.
              Train smart, train fast, get stronger.
            </p>
            <div className="mt-5 space-y-1 text-sm text-gray-400">
              <p>Mon - Fri: 6AM - 10PM</p>
              <p>Sat - Sun: 7AM - 8PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <span>350 5th Avenue, New York, NY 10118</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-lime" />
                <a href="tel:+12125550100" className="transition-colors hover:text-lime">
                  (212) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-lime" />
                <a
                  href="mailto:hello@apexstrength.com"
                  className="transition-colors hover:text-lime"
                >
                  hello@apexstrength.com
                </a>
              </li>
            </ul>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Apex Strength Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUwLjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-lime hover:text-lime"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-lime hover:text-lime"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-lime hover:text-lime"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Apex Strength. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-lime">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-lime">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-lime">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
