'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReferencesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const references = [
    {
      title: '농업용 드론 AI 분석',
      description:
        '드론 영상 데이터를 AI로 분석해 작물 상태와 농업 환경을 정밀하게 진단하고, 스마트 농업의 가능성을 확인했습니다',
      link: '/reference',
    },
    {
      title: '농업용 드론 AI 분석',
      description:
        '드론 영상 데이터를 AI로 분석해 작물 상태와 농업 환경을 정밀하게 진단하고, 스마트 농업의 가능성을 확인했습니다',
      link: '/reference',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + references.length) % references.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 섹션 타이틀 */}
        <div className="mb-12">
          <h2
            className="text-[36px] font-bold text-black mb-5 leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            기술이 만든 변화의 기록
          </h2>
          <p
            className="text-[28px] font-medium text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터와 AI가 일으킨 혁신의 발자취
          </p>
        </div>
      </div>

      {/* 카드 슬라이더 */}
      <div className="flex items-center">
        {/* 왼쪽 화살표 */}
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-12 h-12 bg-[#004AAD] rounded-full hover:bg-[#003D8F] transition-colors flex-shrink-0 ml-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 카드 그리드 */}
        <div className="max-w-7xl mx-auto px-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="h-[300px] bg-[#001A3D] rounded-lg p-8 flex flex-col justify-between"
                style={{
                  backgroundImage: 'url(/images/main/dron.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex flex-col gap-4">
                  <h3
                    className="text-[24px] font-semibold text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.title}
                  </h3>
                  <p
                    className="text-[18px] font-light text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.description}
                  </p>
                </div>
                <Link
                  href={ref.link}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-md text-[#001A3D] font-medium text-[18px] hover:bg-gray-100 transition-colors w-fit"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  자세히 보기
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15L15 5M15 5H5M15 5V15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 화살표 */}
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-12 h-12 bg-[#004AAD] rounded-full hover:bg-[#003D8F] transition-colors flex-shrink-0 mr-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
