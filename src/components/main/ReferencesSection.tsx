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
    <section className="bg-white py-12 xs:py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        {/* 섹션 타이틀 */}
        <div className="mb-8 xs:mb-10 sm:mb-12">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black mb-3 xs:mb-4 sm:mb-5 leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            기술이 만든 변화의 기록
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터와 AI가 일으킨 혁신의 발자취
          </p>
        </div>
      </div>

      {/* 카드 슬라이더 */}
      <div className="flex items-center">
        {/* 왼쪽 화살표 - 데스크톱에서만 표시 */}
        <button
          onClick={prevSlide}
          className="hidden md:flex items-center justify-center w-12 h-12 bg-[#004AAD] rounded-full hover:bg-[#003D8F] transition-colors flex-shrink-0 ml-6"
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

        {/* 모바일: 2개 카드 디자인 (375px, 425px) */}
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 flex-1 md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {references.map((ref, index) => (
              <div
                key={index}
                className="h-[200px] bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col justify-between"
                style={{
                  backgroundImage: 'url(/images/main/dron.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[16px] font-semibold text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.title}
                  </h3>
                  <p
                    className="text-[12px] font-light text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.description}
                  </p>
                </div>
                <Link
                  href={ref.link}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-md text-[#001A3D] font-medium text-[14px] hover:bg-gray-100 transition-colors w-fit"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  자세히 보기
                  <svg
                    width="16"
                    height="16"
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

        {/* 데스크톱: 기존 디자인 (768px부터) */}
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 flex-1 hidden md:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="h-[300px] bg-[#001A3D] rounded-lg p-6 sm:p-8 flex flex-col justify-between"
                style={{
                  backgroundImage: 'url(/images/main/dron.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3
                    className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.title}
                  </h3>
                  <p
                    className="text-[16px] md:text-[18px] font-light text-white leading-[1.25]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {ref.description}
                  </p>
                </div>
                <Link
                  href={ref.link}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-md text-[#001A3D] font-medium text-[16px] md:text-[18px] hover:bg-gray-100 transition-colors w-fit"
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

        {/* 오른쪽 화살표 - 데스크톱에서만 표시 */}
        <button
          onClick={nextSlide}
          className="hidden md:flex items-center justify-center w-12 h-12 bg-[#004AAD] rounded-full hover:bg-[#003D8F] transition-colors flex-shrink-0 mr-6"
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
