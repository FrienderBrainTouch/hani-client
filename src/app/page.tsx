import {
  MainBannerSection,
  CoreValuesSection,
  ReferencesSection,
  StrengthsSection,
  CTASection,
} from '@/components/main';

export default function Home() {
  return (
    <>
      <MainBannerSection />
      <CoreValuesSection />
      <ReferencesSection />
      <StrengthsSection />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <CTASection />
      </div>
    </>
  );
}
