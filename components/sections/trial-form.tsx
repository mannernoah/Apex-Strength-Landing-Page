'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const timeSlots = [
  'Early Morning (6-8 AM)',
  'Morning (8-11 AM)',
  'Midday (11 AM-1 PM)',
  'Evening (5-7 PM)',
  'Late Evening (7-9 PM)',
];

export default function TrialForm() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = 'Please enter your name';
    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (data.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!data.preferredTime) newErrors.preferredTime = 'Please select a time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="trial" className="bg-charcoal-800 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-3xl border border-lime/20 bg-charcoal-950 p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime">
              <Check className="h-8 w-8 text-charcoal-900" strokeWidth={3} />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              You&apos;re Booked!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Thanks, {data.name.split(' ')[0]}. One of our coaches will reach
              out within 24 hours to confirm your free trial session.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Check your inbox at {data.email} for a confirmation email.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setData({ name: '', email: '', phone: '', preferredTime: '' });
              }}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition-all hover:border-lime hover:text-lime"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trial" className="bg-charcoal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            Free Trial
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Book Your Free Trial Session
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            No credit card required. A coach will contact you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-5 rounded-2xl border border-white/5 bg-charcoal-950 p-8"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-200"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-charcoal-900 px-4 text-white placeholder-gray-500 transition-colors focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
              placeholder="Jane Smith"
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-200"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-charcoal-900 px-4 text-white placeholder-gray-500 transition-colors focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
              placeholder="jane@company.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-gray-200"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-charcoal-900 px-4 text-white placeholder-gray-500 transition-colors focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
              placeholder="(212) 555-0100"
            />
            {errors.phone && (
              <p className="mt-1.5 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="mb-2 block text-sm font-semibold text-gray-200"
            >
              Preferred Time Slot
            </label>
            <select
              id="preferredTime"
              value={data.preferredTime}
              onChange={(e) => update('preferredTime', e.target.value)}
              className="h-12 w-full rounded-xl border border-white/10 bg-charcoal-900 px-4 text-white transition-colors focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
            >
              <option value="">Select a time...</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.preferredTime}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-xl bg-lime text-base font-bold text-charcoal-900 transition-all hover:scale-[1.02] hover:glow-lime-strong"
          >
            Claim Your Free Trial
          </button>

          <p className="text-center text-sm text-gray-500">
            By booking, you agree to receive a follow-up from our team. No spam,
            ever.
          </p>
        </form>
      </div>
    </section>
  );
}
