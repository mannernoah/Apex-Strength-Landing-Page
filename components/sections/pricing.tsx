'use client';

import { Check, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Gym Access',
    price: 89,
    period: '/month',
    description: 'Full access to the gym floor and equipment during all open hours.',
    features: [
      'Unlimited gym floor access',
      'Open 6AM - 10PM daily',
      'Progress tracking app',
      'Locker & shower access',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Unlimited Classes',
    price: 149,
    period: '/month',
    description: 'Unlimited small-group strength classes led by expert coaches.',
    features: [
      'Everything in Gym Access',
      'Unlimited group strength classes',
      'Personalized programming',
      'Body composition scans (monthly)',
      'Priority class booking',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Personal Training',
    price: 299,
    period: '/month',
    description: '1-on-1 coaching with a dedicated trainer, fully customized to you.',
    features: [
      'Everything in Unlimited Classes',
      '8 private 1-on-1 sessions / month',
      'Custom nutrition guidance',
      'Posture & mobility assessment',
      'Direct access to your coach',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-charcoal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            Membership
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Invest in Strength. Cancel Anytime.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Your first session is always free. No setup fees, no contracts.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-2xl border p-8 transition-all',
                plan.popular
                  ? 'border-lime bg-charcoal-950 lg:scale-105 glow-lime'
                  : 'border-white/5 bg-charcoal-950 hover:border-white/20'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-lime px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-900">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">
                  ${plan.price}
                </span>
                <span className="text-lg text-gray-400">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-lime"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                className={cn(
                  'mt-8 flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold transition-all',
                  plan.popular
                    ? 'bg-lime text-charcoal-900 hover:scale-105 hover:glow-lime-strong'
                    : 'border border-white/20 text-white hover:border-lime hover:text-lime'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex items-center gap-2 rounded-lg border border-lime/20 bg-lime/5 px-4 py-2.5">
            <ShieldCheck className="h-5 w-5 text-lime" />
            <span className="text-sm font-semibold text-gray-200">
              30-Day Money-Back Guarantee — No Questions Asked
            </span>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          No credit card required to book your free trial session.
        </p>
      </div>
    </section>
  );
}
