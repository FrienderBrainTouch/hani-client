'use client';

import Image from 'next/image';

export default function StrengthsSection() {
  const strengths = [
    {
      title: 'Reliability',
      description: '다수의 정부지원 과제를 성공적으로 수행하며\n검증된 신뢰를 확보했습니다.',
      image: '/images/reliability-bg.png',
      hasBorder: true,
    },
    {
      title: 'Technology',
      description: '데이터와 AI를 결합한\n최적의 기술 솔루션을 제공합니다.',
      image: '/images/technology-bg-40b7d9.png',
      hasBorder: false,
    },
    {
      title: 'Scalability',
      description: '교육, 심리, 산업 등 여러 분야로\n적용 가능한 확장성을 지니고 있습니다.',
      image: '/images/scalability.svg',
      hasBorder: false,
    },
  ];

  return (
    <section className="relative py-20">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main-bg-03.svg"
          alt="Strengths background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 섹션 타이틀 */}
        <div className="mb-16">
          <h2
            className="text-[36px] font-bold text-white mb-5 leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            신뢰 · 혁신 · 확장
          </h2>
          <p
            className="text-[28px] font-medium text-white leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            하니가 가진 세 가지 차별화된 강점은 새로운 가능성을 현실로 만듭니다.
          </p>
        </div>

        {/* 강점 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`relative h-[350px] rounded-[20px] overflow-hidden ${
                strength.hasBorder ? 'border border-black' : ''
              }`}
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image src={strength.image} alt={strength.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* 콘텐츠 */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3
                  className="text-[24px] font-bold text-white mb-4"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {strength.title}
                </h3>
                <p
                  className="text-[18px] font-medium text-white leading-[1.25] whitespace-pre-line"
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
