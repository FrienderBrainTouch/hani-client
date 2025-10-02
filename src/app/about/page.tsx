'use client';

import { Suspense } from 'react';
import { Tabs } from '@/components/common';
import { CompanyOverview, CompanyHistory, SocialValue, Location } from '@/components/about';
import { useTabState } from '@/hooks';

function AboutContent() {
  const [activeTab, setActiveTab] = useTabState('overview');

  const tabs = [
    { id: 'overview', label: '기업 개요' },
    { id: 'history', label: '연혁' },
    { id: 'vision', label: '사회적 가치' },
    { id: 'location', label: '오시는 길' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 배너 섹션 */}
      <section
        id="page-banner"
        className="h-[800px] pt-20"
        style={{
          backgroundImage: 'url(/images/about/about-bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-full flex flex-col justify-between pb-12">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <h1
                className="text-[60px] font-bold text-white text-center"
                style={{ fontFamily: 'Montserrat' }}
              >
                COMPANY
              </h1>
              <p
                className="text-[36px] font-medium text-white text-center"
                style={{ fontFamily: 'Gothic A1' }}
              >
                데이터와 AI로 세상에 가치를 더하는 혁신 기업
              </p>
            </div>
          </div>

          {/* 탭 네비게이션 */}
          <div className="mx-auto px-6 w-full">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </section>

      {/* 콘텐츠 영역 */}
      <div className="pt-12 pb-0">
        {/* 탭 콘텐츠 */}
        {activeTab === 'overview' && <CompanyOverview />}
        {activeTab === 'history' && <CompanyHistory />}
        {activeTab === 'vision' && <SocialValue />}
        {activeTab === 'location' && <Location />}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}
