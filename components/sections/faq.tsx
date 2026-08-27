'use client';

import { Plus, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'I barely have time. How long are the sessions?',
    answer:
      'Every session is exactly 45 minutes — warmup, working sets, and cooldown included. We designed the format specifically for professionals who cannot spend two hours at the gym. Walk in, train hard, walk out stronger.',
  },
  {
    question: "I've never lifted weights. Is this beginner-friendly?",
    answer:
      'Absolutely. Over 60% of our members had zero strength-training experience when they started. Your free trial includes a full movement assessment, and every coach is trained to scale exercises to your current level. You will never be asked to do something you are not ready for.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. All memberships are month-to-month. You can cancel anytime with 30 days notice — no penalties, no fees, no awkward conversations. We want you to stay because you are getting results, not because you are locked in.',
  },
  {
    question: 'Can you actually fix my desk-job posture?',
    answer:
      'Yes. Our coaches are certified in corrective exercise and posture assessment. We target the specific muscle imbalances caused by sitting — tight hip flexors, weak glutes, rounded shoulders — with targeted strength and mobility work. Most members see noticeable improvement within 4-6 weeks.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-charcoal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-lime">
            FAQ
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We&apos;ve Heard Every Excuse.
            <br />
            Here Are the Answers.
          </h2>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="item-0"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-xl border border-white/5 bg-charcoal-950 px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-charcoal-950 p-8 text-center">
          <p className="text-lg text-gray-300">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="tel:+12125550100"
            className="inline-flex items-center gap-2 text-lg font-bold text-lime transition-colors hover:text-lime-400"
          >
            <Phone className="h-5 w-5" />
            (212) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
