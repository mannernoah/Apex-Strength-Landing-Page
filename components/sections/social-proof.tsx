'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Award } from 'lucide-react';

const stats = [
  { value: 1200, suffix: '+', label: 'Active Professionals' },
  { value: 4.9, suffix: '', label: 'Member Rating', decimals: 1 },
  { value: 8, suffix: '', label: 'Years in Business' },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'Software Engineer, Google',
    quote:
      'I went from chronic back pain to deadlifting my body weight in 12 weeks. The 45-minute format actually fits my calendar.',
    image:
      'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Michael Thompson',
    title: 'Investment Analyst, Goldman Sachs',
    quote:
      'My posture is noticeably straighter. Coworkers started asking what I changed. Apex Strength is the only thing that stuck.',
    image:
      'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'David Park',
    title: 'Product Manager, Stripe',
    quote:
      'Gained 15 lbs of lean mass and my stress levels dropped. The early morning slots are perfect before standups.',
    image:
      'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

function useCountUp(target: number, decimals: number, start: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
}

function StatCounter({
  value,
  suffix,
  label,
  decimals,
  visible,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  visible: boolean;
}) {
  const display = useCountUp(value, decimals, visible);
  return (
    <div className="text-center">
      <div className="text-5xl font-black text-lime sm:text-6xl">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-gray-400">
        {label}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-charcoal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={statsRef} className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals ?? 0}
              visible={statsVisible}
            />
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real Results from Real Desk Workers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/5 bg-charcoal-900 p-8"
              style={{ borderLeft: '3px solid #AAFF00' }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-lime"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-lime/20 bg-lime/5 px-6 py-3">
            <Award className="h-5 w-5 text-lime" />
            <span className="text-sm font-semibold text-gray-200">
              Voted #1 Strength Gym in New York, NY — 3 Years Running
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
