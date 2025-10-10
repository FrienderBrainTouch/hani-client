'use client';

import { Suspense } from 'react';
import { Tabs } from '@/components/common';
import { DataVoucher, RND, WebAppDev } from '@/components/business';
import { useTabState } from '@/hooks';

function BusinessContent() {
  const [activeTab, setActiveTab] = useTabState('data');

  const tabs = [
    { id: 'data', label: '데이터 바우처' },
    { id: 'rnd', label: 'R&D' },
    { id: 'webapp', label: '웹·앱 구축' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 배너 섹션 */}
      <section
        id="page-banner"
        className="h-[500px] xs:h-[600px] sm:h-[700px] md:h-[800px] pt-16 xs:pt-18 sm:pt-20"
        style={{
          backgroundImage: 'url(/images/business/hero-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-full flex flex-col justify-between pb-8 xs:pb-10 sm:pb-12">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 xs:gap-4 sm:gap-5 px-4 xs:px-6">
              <h1
                className="text-[32px] xs:text-[40px] sm:text-[48px] md:text-[60px] font-bold text-white text-center"
                style={{ fontFamily: 'Montserrat' }}
              >
                BUSINESS
              </h1>
              <p
                className="text-[18px] xs:text-[22px] sm:text-[28px] md:text-[36px] font-medium text-white text-center leading-[1.25]"
                style={{ fontFamily: 'Gothic A1' }}
              >
                데이터와 AI로 세상에 가치를 더하는 혁신 기업
              </p>
            </div>
          </div>

          {/* 탭 네비게이션 */}
          <div className="mx-auto px-4 xs:px-6 w-full">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </section>

      {/* 콘텐츠 영역 */}
      <div className="pt-8 xs:pt-10 sm:pt-12 pb-0">
        {/* 탭 콘텐츠 */}
        {activeTab === 'data' && <DataVoucher />}
        {activeTab === 'rnd' && <RND />}
        {activeTab === 'webapp' && <WebAppDev />}
      </div>
    </div>
  );
}

export default function BusinessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BusinessContent />
    </Suspense>
  );
}
