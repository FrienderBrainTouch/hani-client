'use client';

import { useState } from 'react';

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: 'AI 연구개발' },
    { id: 'vr', label: 'VR 콘텐츠' },
    { id: 'web', label: '웹/앱 개발' },
    { id: 'consulting', label: '컨설팅' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 페이지 타이틀 */}
        <h1 className="text-[48px] font-bold text-black mb-12" style={{ fontFamily: 'Gothic A1' }}>
          사업영역
        </h1>

        {/* 탭 네비게이션 */}
        <div className="flex gap-4 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-[20px] font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#004AAD] border-b-2 border-[#004AAD]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Gothic A1' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="py-8">
          {activeTab === 'ai' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                AI 연구개발
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 AI 연구개발 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'vr' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                VR 콘텐츠
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 VR 콘텐츠 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'web' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                웹/앱 개발
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 웹/앱 개발 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'consulting' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                컨설팅
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 컨설팅 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
