
import { Hero } from '@/components/filmbox/Hero';
import { BeforeAfter } from '@/components/filmbox/BeforeAfter';
import { FeatureStages } from '@/components/filmbox/FeatureTeasers';
import { FeatureSection } from '@/components/filmbox/FeatureSection';
import { Showcase } from '@/components/filmbox/Showcase';
import { TechGrid } from '@/components/filmbox/TechGrid';
import { StockAccordion } from '@/components/filmbox/StockAccordion';
import { FeatureCarousel } from '@/components/filmbox/FeatureCarousel';
import { DeepFeatures } from '@/components/filmbox/DeepFeatures';
import { RelatedProducts } from '@/components/filmbox/RelatedProducts';
import { FinalCTA } from '@/components/filmbox/FinalCTA';
import ExpressiveControls from '@/components/filmbox/ExpressiveControls';
import { FaqAccordion } from '@/components/filmbox/Question';
import StickyFilmStocks from '@/components/filmbox/StickyFilmStocks';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import WorkSection from '@/components/filmbox/WorkSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <FeatureStages />
      
      {/* <FeatureSection
        title="Print Film Stocks"
        copy="Authentic print looks with calibrated tone and color response. Every profile is meticulously crafted from real film measurements."
        media={{
          type: 'image',
          src: '/printProfile/1.jpg',
          alt: 'Film print profiles showcase',
        }}
        align="left"
      /> */}
      <StickyFilmStocks />
      
      
      {/* <Showcase /> */}
      <TechGrid />
      <StockAccordion />
      {/* <FeatureCarousel /> */}
      <DeepFeatures />
      {/* <RelatedProducts /> */}
      <ExpressiveControls />
      <WorkSection/>
      <FaqAccordion/>
      <FinalCTA />
      <Footer />
    </main>
  );
}