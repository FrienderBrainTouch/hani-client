'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CompanyOverview() {
  const [hoveredCard, setHoveredCard] = useState(0); // 기본: 첫 번째 카드

  const missions = [
    {
      title: '복잡한 데이터를 정제하고 분석하여\n가치 있는 정보로 전환',
      image: '/images/about/mission-1.png',
    },
    {
      title: 'AI 기술을 교육·심리·산업에\n적용해 현장 문제를 해결',
      image: '/images/about/mission-2.png',
    },
    {
      title: '사회적 가치를 실현하는\n혁신적 서비스를 제공',
      image: '/images/about/mission-3.png',
    },
  ];

  const visions = [
    {
      title: '전문성',
      description: '데이터 가공·분석 분야에서\n신뢰받는 전문 기업',
      image: '/images/about/vision-1.png',
    },
    {
      title: 'AI 혁신',
      description: 'AI 솔루션을 통해 기관·기업·개인\n모두가 성장할 수 있는 생태계 조성',
      image: '/images/about/vision-2.png',
    },
    {
      title: '글로벌 확장',
      description: '국내를 넘어 글로벌 시장까지\n확장 가능한 범용 플랫폼 기업',
      image: '/images/about/vision-3.png',
    },
  ];

  const values = [
    { title: '신뢰', image: '/images/about/value-1-10e10c.png' },
    { title: '혁신', image: '/images/about/value-2-570430.png' },
    { title: '확장', image: '/images/about/value-3-176598.png' },
    { title: '사람', image: '/images/about/value-4-3eb643.png' },
  ];

  const expertiseCards = [
    {
      title: 'Data Voucher',
      description:
        '국가 데이터 바우처 지원사업 수행 경험 기반\n다양한 산업(게임, IoT, 3D 등) 데이터 정제·라벨링·가공 역량 보유\n결측치 제거, 정규화, 품질 검증을 통해 AI 학습 최적화 데이터 제공',
      image: '/images/about/data-voucher-bg-4fdba8.png',
    },
    {
      title: 'R&D 연구개발',
      description: 'AI와 데이터 기술 기반 연구개발\n정부 지원 과제 수행 경험\n산학 협력 연구 진행',
      image: '/images/about/rd-bg.png',
    },
    {
      title: '웹·앱 구축',
      description: '맞춤형 웹·앱 플랫폼 개발\n사용자 중심 UX/UI 설계\n안정적인 서비스 운영',
      image: '/images/about/web-app-bg.png',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Mission 설명 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[36px] font-semibold text-black" style={{ fontFamily: 'Montserrat' }}>
            Mission
          </h2>
          <p className="text-[28px] font-normal text-black" style={{ fontFamily: 'Gothic A1' }}>
            데이터와 AI를 활용해 사람과 사회에 도움이 되는 실질적 솔루션을 만듭니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* Mission 카드들 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {missions.map((mission, index) => (
          <div key={index} className="relative flex-1 h-[400px] rounded-[50px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${mission.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full p-10 flex items-end">
              <p
                className="text-[20px] font-normal text-white leading-[1.25] whitespace-pre-line"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {mission.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Vision 설명 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[36px] font-semibold text-black" style={{ fontFamily: 'Montserrat' }}>
            Vision
          </h2>
          <p className="text-[28px] font-normal text-black" style={{ fontFamily: 'Gothic A1' }}>
            데이터와 AI 기반 혁신 파트너로서 교육·심리·산업 전반의 디지털 혁신을 선도합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* Vision 카드들 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {visions.map((vision, index) => (
          <div key={index} className="relative flex-1 h-[300px] rounded-[40px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${vision.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative h-full p-10 flex flex-col justify-end gap-4">
              <h3 className="text-[24px] font-bold text-white" style={{ fontFamily: 'Gothic A1' }}>
                {vision.title}
              </h3>
              <p
                className="text-[20px] font-normal text-white leading-[1.25] whitespace-pre-line"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {vision.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Value 설명 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[36px] font-semibold text-black" style={{ fontFamily: 'Montserrat' }}>
            Value
          </h2>
          <p className="text-[28px] font-normal text-black" style={{ fontFamily: 'Gothic A1' }}>
            신뢰를 바탕으로 혁신을 이루고, 확장을 통해 더 많은 사람과 함께합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* Value 카드들 */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {values.map((value, index) => (
          <div key={index} className="flex-1 h-[280px] flex items-center justify-center">
            <div className="w-full h-full bg-[#F7FAFD] rounded-[30px] p-10 flex flex-col justify-end gap-2">
              <h3
                className="text-[28px] font-bold text-black text-center"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {value.title}
              </h3>
              <div className="flex justify-center mt-4">
                <Image
                  src={value.image}
                  alt={value.title}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Our Expertise + 하단 텍스트 통합 영역 */}
      <div>
        {/* Our Expertise 영역 (네이비 배경) */}
        <div className="bg-[#001A3D] py-20 flex flex-col gap-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-12 w-full">
            {/* Our Expertise 섹션 */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <h2
                  className="text-[36px] font-semibold text-white"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  Our Expertise
                </h2>
                <p
                  className="text-[28px] font-normal text-white"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  데이터 가공부터 맞춤형 플랫폼 개발까지, 현장에서 바로 쓰이는 결과를 만듭니다.
                </p>
              </div>
              <div className="w-full h-[1px] bg-white" />
            </div>

            {/* 하단 카드들 */}
            <div className="flex flex-col lg:flex-row gap-10">
              {expertiseCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative h-[500px] rounded-[30px] overflow-hidden cursor-pointer ${
                    hoveredCard === index ? 'flex-[2]' : 'flex-1'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(0)}
                >
                  {hoveredCard === index ? (
                    // 호버 상태: 상세 정보 표시
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="relative h-full p-10 flex flex-col justify-end gap-8">
                        <div className="flex flex-col gap-5">
                          <h3
                            className="text-[24px] font-semibold text-white"
                            style={{ fontFamily: 'Montserrat' }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="text-[18px] font-normal text-white leading-[1.25] whitespace-pre-line"
                            style={{ fontFamily: 'Gothic A1' }}
                          >
                            {card.description}
                          </p>
                        </div>
                        <button
                          className="bg-[#B0C7E6] text-[#E6EDF7] px-[60px] py-[15px] rounded-[50px] text-[22px] font-semibold w-fit"
                          style={{ fontFamily: 'Gothic A1' }}
                        >
                          자세히 보기
                        </button>
                      </div>
                    </>
                  ) : (
                    // 기본 상태: 타이틀만 표시
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="relative h-full p-10 flex items-end justify-center">
                        <h3
                          className="text-[24px] font-semibold text-white"
                          style={{ fontFamily: 'Montserrat' }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 텍스트 섹션 (검은 배경) */}
        <div
          className="relative h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/images/about/closing-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl px-6">
            <p
              className="text-[24px] font-medium text-white text-center leading-[1.3]"
              style={{ fontFamily: 'Gothic A1' }}
            >
              하니는 데이터와 AI를 통해 기관, 기업, 개인이 함께 성장할 수 있는 생태계를 만들어가고
              있습니다.
              <br />
              검증된 경험과 안정적인 기술력을 바탕으로, 현장에서 바로 활용 가능한 혁신 솔루션을
              제공합니다.
              <br />
              하니는 고객과 함께 지속 가능한 성장을 실현합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
