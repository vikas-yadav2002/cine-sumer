import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/filmbox/Hero';
import { BeforeAfter } from '@/components/filmbox/BeforeAfter';
import { FeatureTeasers } from '@/components/filmbox/FeatureTeasers';
import { FeatureSection } from '@/components/filmbox/FeatureSection';
import { Showcase } from '@/components/filmbox/Showcase';
import { TechGrid } from '@/components/filmbox/TechGrid';
import { StockAccordion } from '@/components/filmbox/StockAccordion';
import { FeatureCarousel } from '@/components/filmbox/FeatureCarousel';
import { DeepFeatures } from '@/components/filmbox/DeepFeatures';
import { RelatedProducts } from '@/components/filmbox/RelatedProducts';
import { FinalCTA } from '@/components/filmbox/FinalCTA';
import { Footer } from '@/components/site/Footer';
import ExpressiveControls from '@/components/filmbox/ExpressiveControls';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <FeatureTeasers />
      
      <FeatureSection
        title="Print Film Profiles"
        copy="Authentic print looks with calibrated tone and color response. Every profile is meticulously crafted from real film measurements."
        media={{
          type: 'image',
          src: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
          alt: 'Film print profiles showcase',
        }}
        align="left"
      />
      
      <FeatureSection
        kicker="Industry Standard"
        title="ACES & HDR Support"
        copy="Full ACES-cct workflow compatibility with HDR tone mapping up to 1000 nits. Seamlessly integrate into any professional pipeline."
        media={{
          type: 'image',
          src: 'https://images.pexels.com/photos/7991391/pexels-photo-7991391.jpeg',
          alt: 'ACES workflow illustration',
        }}
        align="right"
      />
      
      <FeatureSection
        title="Metadata + LUT Export"
        copy="Export your looks as industry-standard LUTs in .cube, .3dl, .csp formats. Preserve metadata for seamless roundtrip workflows."
        media={{
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          alt: 'LUT export interface demo',
        }}
        align="left"
      />
      
      <Showcase />
      <TechGrid />
      <StockAccordion />
      <FeatureCarousel />
      <DeepFeatures />
      {/* <RelatedProducts /> */}
      <ExpressiveControls />
      <FinalCTA />
      <Footer />
    </main>
  );
}