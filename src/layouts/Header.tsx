'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 메인 배너 또는 페이지 배너 하단 근처에서 배경색 변경
      const mainBanner = document.getElementById('main-banner');
      const pageBanner = document.getElementById('page-banner');
      const banner = mainBanner || pageBanner;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerBottom = rect.bottom + window.scrollY - 100;
        setIsScrolled(window.scrollY > bannerBottom);
      }
    };

    // 초기 실행 및 스크롤 이벤트 등록
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled ? 'bg-[#001A3D]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center h-full px-10">
        {/* 로고 (왼쪽) */}
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <Image src="/images/common/hani-logo.svg" alt="HANI Logo" width={112} height={56} />
          </Link>
        </div>

        {/* 네비게이션 (가운데) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-16">
          <Link
            href="/about"
            className="text-white font-medium hover:text-blue-300 transition-colors text-xl leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            회사소개
          </Link>
          <Link
            href="/business"
            className="text-white font-medium hover:text-blue-300 transition-colors text-xl leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            사업영역
          </Link>
          <Link
            href="/reference"
            className="text-white font-medium hover:text-blue-300 transition-colors text-xl leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            레퍼런스
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium hover:text-blue-300 transition-colors text-xl leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            문의
          </Link>
        </nav>

        {/* 메뉴 아이콘 (오른쪽) */}
        <div className="flex-1 flex justify-end">
          <button className="w-10 h-10">
            <Image
              src="/images/common/menu-icon.svg"
              alt="Menu"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
