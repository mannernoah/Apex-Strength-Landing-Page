'use client';

import { Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4720794/pexels-photo-4720794.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Athlete lifting a barbell in a dark gym"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-transparent to-charcoal-900/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 opacity-0"
          style={{ animation: 'fade-up 0.6s ease-out 0.1s forwards' }}
        >
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="text-xs font-semibold uppercase tracking-wider text-lime">
            New York&apos;s #1 Strength Gym for Professionals
          </span>
        </div>

        <h1
          className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white opacity-0 sm:text-6xl md:text-7xl"
          style={{ animation: 'fade-up 0.7s ease-out 0.2s forwards' }}
        >
          Stop Losing Strength
          <br />
          to Your <span className="text-lime text-glow-lime">Desk Job.</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-gray-300 opacity-0"
          style={{ animation: 'fade-up 0.7s ease-out 0.4s forwards' }}
        >
          Science-backed, 45-minute strength training sessions built for busy
          professionals. Real coaching, real results, no wasted time.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animation: 'fade-up 0.7s ease-out 0.6s forwards' }}
        >
          <a
            href="#trial"
            className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-lime px-8 text-base font-bold text-charcoal-900 transition-all hover:scale-105 hover:glow-lime-strong sm:w-auto"
          >
            Claim Your Free Trial
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/20 px-8 text-base font-semibold text-white transition-all hover:border-lime hover:text-lime sm:w-auto"
          >
            See How It Works
          </a>
        </div>

        <p
          className="mt-6 text-sm text-gray-400 opacity-0"
          style={{ animation: 'fade-up 0.7s ease-out 0.8s forwards' }}
        >
          No contract. Cancel anytime. First session free.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-charcoal-900/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-around px-6 py-5">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-bold text-white">1,200+</div>
              <div className="text-xs text-gray-400">Active Members</div>
            </div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-lime" fill="currentColor" />
            <div>
              <div className="text-xl font-bold text-white">4.9</div>
              <div className="text-xs text-gray-400">Average Rating</div>
            </div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-bold text-white">6AM-10PM</div>
              <div className="text-xs text-gray-400">Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
