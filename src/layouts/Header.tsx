'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.svg"
              alt="프랜더 로고"
              width={131}
              height={54}
              priority
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/about"
              className="text-gray-800 font-semibold hover:text-green-600 transition-colors text-lg"
            >
              회사소개
            </Link>
            <Link
              href="/content"
              className="text-gray-800 font-semibold hover:text-green-600 transition-colors text-lg"
            >
              콘텐츠
            </Link>
            <Link
              href="/training"
              className="text-gray-800 font-semibold hover:text-green-600 transition-colors text-lg"
            >
              전문가 양성
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 font-semibold hover:text-green-600 transition-colors text-lg"
            >
              활동 갤러리
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 font-semibold hover:text-green-600 transition-colors text-lg"
            >
              문의하기
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
