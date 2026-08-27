'use client';

import { CalendarCheck, ClipboardList, Dumbbell } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Your Free Trial',
    description:
      'Pick a time that works for you. No credit card, no commitment. Just show up ready to move.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Get a Custom Assessment',
    description:
      'A coach evaluates your posture, mobility, and strength to build a plan tailored to your body and schedule.',
  },
  {
    number: '03',
    icon: Dumbbell,
    title: 'Start Training in 45 Minutes',
    description:
      'Every session is efficient and science-backed. Walk in, train hard, walk out stronger in under an hour.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-charcoal-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            Getting Started
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How Apex Strength Works
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Three simple steps between you and your strongest self.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < steps.length - 1 && (
                <div className="absolute left-full top-12 hidden h-px w-full -translate-x-4 bg-gradient-to-r from-lime/40 to-transparent md:block" />
              )}
              <div className="group relative rounded-2xl border border-white/5 bg-charcoal-950 p-8 transition-all hover:border-lime/30">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime/10">
                    <step.icon className="h-7 w-7 text-lime" strokeWidth={2} />
                  </div>
                  <span className="text-5xl font-black text-white/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#trial"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-lime px-8 text-base font-bold text-charcoal-900 transition-all hover:scale-105 hover:glow-lime"
          >
            Claim Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
