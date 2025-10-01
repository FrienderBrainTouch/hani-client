'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '회사 개요' },
    { id: 'history', label: '연혁' },
    { id: 'vision', label: '비전' },
    { id: 'location', label: '오시는 길' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 페이지 타이틀 */}
        <h1 className="text-[48px] font-bold text-black mb-12" style={{ fontFamily: 'Gothic A1' }}>
          회사소개
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
          {activeTab === 'overview' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                회사 개요
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 회사 개요 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'history' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                연혁
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 연혁 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'vision' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                비전
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 비전 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
          {activeTab === 'location' && (
            <div>
              <h2
                className="text-[32px] font-bold text-black mb-6"
                style={{ fontFamily: 'Gothic A1' }}
              >
                오시는 길
              </h2>
              <p
                className="text-[18px] text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Gothic A1' }}
              >
                여기에 오시는 길 컴포넌트를 렌더링합니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
