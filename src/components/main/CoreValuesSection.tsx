'use client';

import Image from 'next/image';

export default function CoreValuesSection() {
  const cards = [
    {
      title: 'Insight',
      description: '데이터에서 패턴과 의미를 찾고,\n새로운 기회를 발견합니다.',
      image: '/images/main/insight-bg.png',
      borderRadius: 'rounded-tl-[50px]',
      marginTop: 'mt-20',
    },
    {
      title: 'Innovation',
      description: 'AI 연구개발을 통해 기술 혁신과\n실용적 가치를 창출합니다.',
      image: '/images/main/innovation-bg.png',
      borderRadius: '',
      marginTop: 'mt-0',
    },
    {
      title: 'Solution',
      description: '고객 맞춤형 웹·앱 구축으로\n현장 중심의 문제를 해결합니다.',
      image: '/images/main/solution-bg.png',
      borderRadius: '',
      marginTop: 'mt-20',
    },
    {
      title: 'Impact',
      description: '교육, 산업, 사회 전반에 걸쳐\n변화를 만들어갑니다.',
      image: '/images/main/impact-bg.png',
      borderRadius: 'rounded-br-[50px]',
      marginTop: 'mt-0',
    },
  ];

  return (
    <section className="bg-white py-12 xs:py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        {/* 섹션 타이틀 */}
        <div className="max-w-[671px] mb-8 xs:mb-10 sm:mb-12">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black mb-3 xs:mb-4 sm:mb-5 leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            복잡함을 단순하게, 가능성을 크게
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            하니는 다양한 영역에서 혁신적인 솔루션을 제공합니다.
          </p>
        </div>

        {/* 모바일: 4개 카드 디자인 (375px, 425px) */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[200px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* 배경 이미지 */}
              <Image src={card.image} alt={card.title} fill className="object-cover" />

              {/* 오버레이 및 콘텐츠 */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3">
                <h3
                  className="text-[14px] font-semibold text-white mb-1"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[10px] font-normal text-white leading-[1.2] whitespace-pre-line"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 데스크톱: 기존 디자인 (768px부터) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden ${card.borderRadius} ${card.marginTop}`}
            >
              {/* 배경 이미지 */}
              <Image src={card.image} alt={card.title} fill className="object-cover" />

              {/* 오버레이 및 콘텐츠 */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 sm:p-8">
                <h3
                  className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-white mb-3 sm:mb-4"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[16px] md:text-[18px] lg:text-[20px] font-normal text-white leading-[1.25] whitespace-pre-line"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
