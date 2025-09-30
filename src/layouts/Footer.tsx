'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 풋터 */}
      <div className="bg-green-800 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 왼쪽 컬럼 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-200 font-semibold mr-4">대표자</span>
                <span className="text-white">유재창</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-200 font-semibold mr-4">주소</span>
                <span className="text-white">경기도 부천시 부천로 198번길 18, 202동 1508호</span>
              </div>
            </div>

            {/* 오른쪽 컬럼 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-200 font-semibold mr-4">대표 번호</span>
                <span className="text-white">010-XXXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-200 font-semibold mr-4">사업자등록번호</span>
                <span className="text-white">671-87-01914</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-200 font-semibold mr-4">이메일</span>
                <span className="text-white">sunwockd@naver.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 풋터 */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 왼쪽: 링크 및 저작권 */}
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-8">
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                >
                  개인정보처리방침
                </Link>
                <Link
                  href="/email-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                >
                  이메일무단수집거부
                </Link>
              </div>
              <p className="text-gray-400 text-sm">COPYRIGHT © 2025 프랜더. ALL RIGHTS RESERVED.</p>
            </div>

            {/* 오른쪽: 로고 */}
            <Image
              src="/images/logo.svg"
              alt="프랜더 로고"
              width={131}
              height={54}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
