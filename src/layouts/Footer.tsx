'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001A3D] text-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-0">
          {/* 왼쪽 정보 영역 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* 상호명 및 대표 */}
            <div className="flex flex-col gap-2">
              <p
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                상호명: (주)하니 | 대표: 박세한
              </p>
            </div>

            {/* 연락처 */}
            <div className="flex flex-col gap-2">
              <p
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                연락처: 010-7634-4252
              </p>
            </div>

            {/* 사업자등록번호 및 이메일 */}
            <div className="flex flex-col gap-2">
              <p
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                사업자등록번호: 735-81-01967 | 이메일: braintouch94@naver.com
              </p>
            </div>

            {/* 주소 */}
            <div className="flex flex-col gap-2">
              <p
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                주소: 경기도 부천시 원미구 길주로 17, 6층 608호
              </p>
            </div>

            {/* 통신판매중개자 안내 */}
            <div className="mt-4 sm:mt-6">
              <p
                className="text-white text-xs sm:text-sm md:text-[15px] leading-relaxed"
                style={{ fontFamily: 'Montserrat', fontWeight: 300 }}
              >
                (주)하니는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
              </p>
            </div>

            {/* 구분선 */}
            <div className="w-full h-[1px] bg-white/20 my-4 sm:my-6" />

            {/* 저작권 */}
            <div>
              <p
                className="text-white text-xs sm:text-sm md:text-[15px]"
                style={{ fontFamily: 'Montserrat', fontWeight: 300 }}
              >
                Copyright © 2024 HANI Inc. All rights reserved.
              </p>
            </div>
          </div>

          {/* 오른쪽 HANI 텍스트와 링크 */}
          <div className="flex flex-col items-start lg:items-end gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div
              className="text-white text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[60px] xl:text-[80px] leading-[1.03] font-normal"
              style={{ fontFamily: 'GangwonEduPower' }}
            >
              H A N I
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-8">
              <Link
                href="/privacy"
                className="text-white hover:text-blue-300 transition-colors text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold"
                style={{ fontFamily: 'Montserrat' }}
              >
                개인정보처리방침
              </Link>
              <Link
                href="/email-policy"
                className="text-white hover:text-blue-300 transition-colors text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold"
                style={{ fontFamily: 'Montserrat' }}
              >
                이메일무단수집거부
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
