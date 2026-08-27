import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import Features from '@/components/sections/features';
import Coaches from '@/components/sections/coaches';
import SocialProof from '@/components/sections/social-proof';
import Pricing from '@/components/sections/pricing';
import Schedule from '@/components/sections/schedule';
import FAQ from '@/components/sections/faq';
import TrialForm from '@/components/sections/trial-form';
import StickyBar from '@/components/sections/sticky-bar';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <HowItWorks />
        <Features />
        <Coaches />
        <SocialProof />
        <Pricing />
        <Schedule />
        <FAQ />
        <TrialForm />
      </main>
      <StickyBar />
      <Footer />
    </>
  );
}
