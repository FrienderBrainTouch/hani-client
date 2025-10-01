'use client';

import { useState } from 'react';

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: '프로젝트' },
    { id: 'achievements', label: '성과' },
    { id: 'awards', label: '수상 내역' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 페이지 타이틀 */}
        <h1 className="text-[48px] font-bold text-black mb-12" style={{ fontFamily: 'Gothic A1' }}>
          레퍼런스
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
          {activeTab === 'projects' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                프로젝트
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 프로젝트 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'achievements' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                성과
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 성과 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'awards' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                수상 내역
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 수상 내역 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
