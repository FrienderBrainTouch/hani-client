'use client';

import Image from 'next/image';

export default function StrengthsSection() {
  const strengths = [
    {
      title: 'Reliability',
      description: '다수의 정부지원 과제를 성공적으로 수행하며\n검증된 신뢰를 확보했습니다.',
      image: '/images/main/reliability-bg.png',
      hasBorder: true,
    },
    {
      title: 'Technology',
      description: '데이터와 AI를 결합한\n최적의 기술 솔루션을 제공합니다.',
      image: '/images/main/technology-bg-40b7d9.png',
      hasBorder: false,
    },
    {
      title: 'Scalability',
      description: '교육, 심리, 산업 등 여러 분야로\n적용 가능한 확장성을 지니고 있습니다.',
      image: '/images/main/scalability.svg',
      hasBorder: false,
    },
  ];

  return (
    <section className="relative py-12 xs:py-16 sm:py-20">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main/main-bg-03.svg"
          alt="Strengths background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6">
        {/* 섹션 타이틀 */}
        <div className="mb-8 xs:mb-12 sm:mb-16">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-bold text-white mb-3 xs:mb-4 sm:mb-5 leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            신뢰 · 혁신 · 확장
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium text-white leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            하니가 가진 세 가지 차별화된 강점은 새로운 가능성을 현실로 만듭니다.
          </p>
        </div>

        {/* 모바일: 3개 카드 디자인 (375px, 425px) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="relative h-[200px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image src={strength.image} alt={strength.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* 콘텐츠 */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <h3
                  className="text-[16px] font-bold text-white mb-2"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {strength.title}
                </h3>
                <p
                  className="text-[12px] font-medium text-white leading-[1.25] whitespace-pre-line"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 데스크톱: 기존 디자인 (768px부터) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`relative h-[320px] lg:h-[350px] rounded-[20px] overflow-hidden ${
                strength.hasBorder ? 'border border-black' : ''
              }`}
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image src={strength.image} alt={strength.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* 콘텐츠 */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                <h3
                  className="text-[20px] lg:text-[24px] font-bold text-white mb-3 lg:mb-4"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {strength.title}
                </h3>
                <p
                  className="text-[16px] lg:text-[18px] font-medium text-white leading-[1.25] whitespace-pre-line"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
