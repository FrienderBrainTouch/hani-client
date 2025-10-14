'use client';

import Image from 'next/image';

export default function ReferencePage() {
  const references = [
    {
      id: 1,
      title: '모바일 게임 데이터 가공',
      image: '/images/reference/reference_mobile_game-19d2ad.png',
    },
    {
      id: 2,
      title: '안전취약계층 배회감지기',
      image: '/images/reference/reference_safety_detector.png',
    },
    {
      id: 3,
      title: '3D 모델 데이터 정규화',
      image: '/images/reference/reference_3d_model-102c0f.png',
    },
    {
      id: 4,
      title: 'AI 영유아 비대면 심리상담',
      image: '/images/reference/reference_ai_counseling-4ac2d0.png',
    },
    {
      id: 5,
      title: 'ARS 비대면 AI 고객 상담 분석',
      image: '/images/reference/reference_ars_counseling-7459c6.png',
    },
    {
      id: 6,
      title: 'AI 자율주행 드론 Station',
      image: '/images/reference/reference_drone_station_full.png',
    },
    {
      id: 7,
      title: '500배율 정자 영상 CNN 기반\nAI 알고리즘 개발',
      image: '/images/reference/reference_ai_algorithm.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 배너 섹션 */}
      <section
        id="page-banner"
        className="relative h-[500px] xs:h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/reference/reference_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative flex flex-col items-center gap-4 xs:gap-6 px-4 xs:px-6">
          <h1
            className="text-[40px] xs:text-[48px] sm:text-[56px] md:text-[60px] font-bold text-white text-center"
            style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            REFERENCE
          </h1>
          <p
            className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] font-medium text-white text-center leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터·AI·교육·R&D 현장에서 검증된 성과를 소개합니다.
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className="py-12 xs:py-16 sm:py-20 md:py-24 space-y-12 xs:space-y-16 sm:space-y-20">
        {/* 섹션 헤더 */}
        <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
          <div className="flex flex-col gap-6 xs:gap-8">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
              style={{ fontFamily: 'Gothic A1' }}
            >
              HANI Reference
            </h2>
            <div className="w-full h-[1px] bg-[#E6EDF7]" />
          </div>
        </div>

        {/* 레퍼런스 그리드 */}
        <div className="max-w-7xl mx-auto px-4 xs:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
            {references.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] rounded-[8px] overflow-hidden group cursor-pointer"
              >
                {/* 배경 이미지 */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* 오버레이 */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                {/* 콘텐츠 */}
                <div className="relative h-full p-6 xs:p-8 flex flex-col justify-end">
                  <h3
                    className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-white leading-[1.25] whitespace-pre-line"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
