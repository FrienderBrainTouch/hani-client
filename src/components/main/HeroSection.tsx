'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-start px-12 lg:px-24"
      style={{
        backgroundImage: `url('/images/main.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-left max-w-6xl">
        <div className="mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            창의력으로 미래를 디자인하는
            <br />
            <span className="text-green-300">창의 융합 교육 기업</span>, 프랜더
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            VR을 구현한 창의 교육 콘텐츠를 초등·중등 누구나 쉽게, 어디서나 자유롭게
          </p>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
          <Link
            href="/about"
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            회사 소개 보기
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </Link>

          <Link
            href="/content"
            className="group bg-white hover:bg-gray-50 text-green-600 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-white"
          >
            콘텐츠 둘러보기
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
