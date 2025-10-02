'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navItems = [
    { href: '/about', label: '회사소개' },
    { href: '/business', label: '사업영역' },
    { href: '/reference', label: '레퍼런스' },
    { href: '/contact', label: '문의' },
  ];

  return (
    <>
      {/* 오버레이 */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      {/* 모바일 네비게이션 */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#001A3D] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-white text-xl font-bold" style={{ fontFamily: 'Gothic A1' }}>
            메뉴
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 px-4 text-white text-lg font-medium hover:bg-white/10 rounded-lg transition-colors"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 하단 정보 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
          <div className="text-white text-sm" style={{ fontFamily: 'Gothic A1' }}>
            <p className="mb-2">경기도 부천시 길주로 17, 608호</p>
            <p className="mb-2">010-1111-2222</p>
            <p>111@naver.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
