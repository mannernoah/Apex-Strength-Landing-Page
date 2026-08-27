'use client';

import { useState } from 'react';
import { Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type Slot = {
  time: string;
  className: string;
  coach: string;
  spots: number;
};

const schedule: Record<string, Slot[]> = {
  Monday: [
    { time: '6:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 3 },
    { time: '7:00 AM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 1 },
    { time: '12:00 PM', className: 'Express Strength', coach: 'David Chen', spots: 5 },
    { time: '6:00 PM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 0 },
    { time: '7:00 PM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 4 },
  ],
  Tuesday: [
    { time: '6:00 AM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 2 },
    { time: '7:00 AM', className: 'Express Strength', coach: 'David Chen', spots: 0 },
    { time: '12:00 PM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 6 },
    { time: '6:00 PM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 3 },
  ],
  Wednesday: [
    { time: '6:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 4 },
    { time: '7:00 AM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 2 },
    { time: '12:00 PM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 1 },
    { time: '7:00 PM', className: 'Express Strength', coach: 'David Chen', spots: 5 },
  ],
  Thursday: [
    { time: '6:00 AM', className: 'Express Strength', coach: 'David Chen', spots: 0 },
    { time: '7:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 3 },
    { time: '6:00 PM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 2 },
    { time: '7:00 PM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 4 },
  ],
  Friday: [
    { time: '6:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 5 },
    { time: '7:00 AM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 1 },
    { time: '12:00 PM', className: 'Express Strength', coach: 'David Chen', spots: 3 },
    { time: '6:00 PM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 0 },
  ],
  Saturday: [
    { time: '8:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 4 },
    { time: '9:00 AM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 2 },
    { time: '10:00 AM', className: 'Express Strength', coach: 'David Chen', spots: 6 },
  ],
  Sunday: [
    { time: '8:00 AM', className: 'Posture & Mobility', coach: 'James Donovan', spots: 5 },
    { time: '9:00 AM', className: 'Strength Foundations', coach: 'Marcus Reid', spots: 3 },
    { time: '10:00 AM', className: 'Powerlifting', coach: 'Elena Vasquez', spots: 1 },
  ],
};

const days = Object.keys(schedule);

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday');
  const slots = schedule[activeDay];

  return (
    <section id="schedule" className="bg-charcoal-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            Weekly Schedule
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find Your Slot. Own Your Week.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tap a day to see available sessions and coaches.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                'rounded-lg px-5 py-2.5 text-sm font-semibold transition-all',
                activeDay === day
                  ? 'bg-lime text-charcoal-900'
                  : 'border border-white/10 text-gray-300 hover:border-lime/40 hover:text-lime'
              )}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, idx) => (
            <div
              key={`${activeDay}-${idx}`}
              className="rounded-xl border border-white/5 bg-charcoal-950 p-6 transition-all hover:border-lime/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-lime">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-bold">{slot.time}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {slot.className}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <User className="h-3.5 w-3.5" />
                    {slot.coach}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                {slot.spots > 0 ? (
                  <span className="text-sm font-semibold text-lime">
                    {slot.spots} {slot.spots === 1 ? 'spot' : 'spots'} left
                  </span>
                ) : (
                  <span className="text-sm font-bold uppercase text-red-500">
                    Full
                  </span>
                )}
                <a
                  href="#trial"
                  className={cn(
                    'inline-flex h-9 items-center rounded-lg px-4 text-xs font-bold transition-all',
                    slot.spots > 0
                      ? 'bg-lime/10 text-lime hover:bg-lime hover:text-charcoal-900'
                      : 'cursor-not-allowed border border-white/10 text-gray-500'
                  )}
                >
                  {slot.spots > 0 ? 'Book Slot' : 'Waitlist'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
