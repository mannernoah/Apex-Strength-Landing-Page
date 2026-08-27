'use client';

const coaches = [
  {
    name: 'Marcus Reid',
    specialty: 'Posture Correction Specialist',
    bio: '10+ years fixing desk-worker bodies. NASM-CPT, FRCms.',
    image:
      'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Elena Vasquez',
    specialty: 'Powerlifting Coach',
    bio: 'Former national powerlifter. Coaches strength from novice to platform.',
    image:
      'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'David Chen',
    specialty: 'Strength & Conditioning',
    bio: 'CSCS-certified. Builds time-efficient programs for busy executives.',
    image:
      'https://images.pexels.com/photos/32695885/pexels-photo-32695885.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'James Donovan',
    specialty: 'Mobility & Movement',
    bio: 'Helps you move pain-free. FMS Level 2, corrective exercise specialist.',
    image:
      'https://images.pexels.com/photos/10960029/pexels-photo-10960029.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Coaches() {
  return (
    <section className="bg-charcoal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            The Team
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Meet the Coaches Who Get Desk Workers
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Certified experts who understand the demands of a professional
            schedule.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-charcoal-950 transition-all hover:border-lime/30"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                <p className="mt-1 text-sm font-semibold text-lime">
                  {coach.specialty}
                </p>
                <p className="mt-2 text-sm text-gray-400">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#trial"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-lime/40 px-6 text-sm font-semibold text-lime transition-all hover:bg-lime hover:text-charcoal-900"
          >
            Train With Our Coaches
          </a>
        </div>
      </div>
    </section>
  );
}
