'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [closed]);

  if (closed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-lime bg-charcoal-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-white sm:text-base">
            Ready to stop losing strength?
          </p>
          <p className="hidden text-xs text-gray-400 sm:block">
            Your first session is free. No card required.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#trial"
            className="inline-flex h-11 items-center rounded-lg bg-lime px-6 text-sm font-bold text-charcoal-900 transition-all hover:scale-105"
          >
            Claim Your Free Trial
          </a>
          <button
            onClick={() => setClosed(true)}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
