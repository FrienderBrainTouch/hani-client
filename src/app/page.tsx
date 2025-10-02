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
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
        <CTASection />
      </div>
    </>
  );
}
