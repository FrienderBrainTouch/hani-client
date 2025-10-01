'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative h-[250px]">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt="CTA background"
          fill
          className="object-cover rounded-[20px]"
        />
        <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <h2
          className="text-[28px] font-bold text-white mb-3 text-center"
          style={{ fontFamily: 'Gothic A1' }}
        >
          AI와 기술로 더 큰 가치를
        </h2>
        <p
          className="text-[24px] font-medium text-white mb-8 text-center"
          style={{ fontFamily: 'Gothic A1' }}
        >
          연구개발부터 웹·앱 서비스까지, 하니의 기술은 변화와 성장을 이끌어냅니다.
        </p>
        <Link
          href="/contact"
          className="px-[60px] py-[15px] bg-[#004AAD] rounded-[50px] text-[22px] font-semibold text-[#E6EDF7] hover:bg-[#003D8F] transition-colors"
          style={{ fontFamily: 'Gothic A1' }}
        >
          협업 제안하기
        </Link>
      </div>
    </section>
  );
}
