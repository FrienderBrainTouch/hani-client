'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001A3D] text-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-0">
          {/* 왼쪽 정보 영역 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* 주소 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-24">
              <span
                className="text-white font-bold text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                주소
              </span>
              <span
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                경기도 부천시 길주로 17, 608호
              </span>
            </div>

            {/* 대표 번호 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-24">
              <span
                className="text-white font-bold text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                대표 번호
              </span>
              <span
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                010-1111-2222
              </span>
            </div>

            {/* 이메일 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-24">
              <span
                className="text-white font-bold text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                이메일
              </span>
              <span
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                111@naver.com
              </span>
            </div>

            {/* 사업자등록번호 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-24">
              <span
                className="text-white font-bold text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                사업자등록번호
              </span>
              <span
                className="text-white text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat' }}
              >
                1111-1111
              </span>
            </div>

            {/* 하단 정보 */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <span
                className="text-white text-xs sm:text-sm md:text-[15px]"
                style={{ fontFamily: 'Montserrat', fontWeight: 300 }}
              >
                © 2025. HANI. All rights reserved.
              </span>
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
