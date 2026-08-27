'use client';

import {
  Timer,
  UserCheck,
  CalendarClock,
  Smartphone,
  Activity,
  FileX,
} from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: '45-Minute Strength Blocks',
    description:
      'Every session is engineered for maximum results in minimum time. No fluff, no waiting around.',
  },
  {
    icon: UserCheck,
    title: '1-on-1 Coaching',
    description:
      'Personalized attention from certified coaches who track your form, progress, and goals.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Early & Late Slots',
    description:
      'Train at 6 AM before the office or 8 PM after. Your schedule, your workout.',
  },
  {
    icon: Smartphone,
    title: 'Progress Tracking App',
    description:
      'See your strength gains in real time. Log lifts, track PRs, and watch yourself level up.',
  },
  {
    icon: Activity,
    title: 'Posture Correction',
    description:
      'Reverse the damage of sitting all day with targeted mobility and strength work.',
  },
  {
    icon: FileX,
    title: 'No Long-Term Contracts',
    description:
      'Month-to-month membership. Stay because you love it, not because you are locked in.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-charcoal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            Why Apex Strength
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for People Who Can&apos;t
            <br />
            Afford to Waste Time
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Every detail is designed around the realities of a demanding career.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/5 bg-charcoal-900 p-8 transition-all hover:border-lime/30 hover:bg-charcoal-950"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 transition-colors group-hover:bg-lime/20">
                <feature.icon
                  className="h-6 w-6 text-lime"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-lime/40 px-6 text-sm font-semibold text-lime transition-all hover:bg-lime hover:text-charcoal-900"
          >
            View Membership Options
          </a>
        </div>
      </div>
    </section>
  );
}
