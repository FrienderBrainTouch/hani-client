'use client';

export default function RND() {
  const researchAreas = [
    {
      title: '헬스케어 분야',
      description:
        '고배율 영상 기반 CNN 알고리즘으로 정자 분석 등 첨단 바이오 헬스케어 연구를 수행합니다.',
      image: '/images/business/rnd_healthcare.png',
    },
    {
      title: '교육·심리 분야',
      description: '교육과 심리 분야의 다양한 연구를 진행합니다.',
      image: '/images/business/rnd_education.png',
    },
    {
      title: '산업·농업 분야',
      description: '드론과 AI 기술을 활용한 산업·농업 분야 연구를 수행합니다.',
      image: '/images/business/rnd_industry.png',
    },
  ];

  const processSteps = [
    { number: '01', title: '문제정의' },
    { number: '02', title: '데이터 확보' },
    { number: '03', title: '모델 개발' },
    { number: '04', title: '실증테스트베드' },
    { number: '05', title: '서비스 전환' },
  ];

  const rndCapabilities = [
    {
      title: '산학연 협력 경청',
      description: '대학·지자체 수요기업과의 공동 연구 및 테스트베드 경험',
      image: '/images/business/rnd_card_small_1.png',
    },
    {
      title: '검증된 연구 역량',
      description: '다양한 분야에서의 연구 성과와 실증 경험',
      image: '/images/business/rnd_card_small_2.png',
    },
    {
      title: '기술 혁신',
      description: '최신 기술을 활용한 혁신적인 연구 개발',
      image: '/images/business/rnd_card_small_3.png',
    },
    {
      title: 'AI 기술 전문성',
      description: 'AI와 데이터 분석 분야의 전문적인 연구 역량',
      image: '/images/business/rnd_card_small_1.png',
    },
  ];

  return (
    <div className="space-y-12 xs:space-y-16 sm:space-y-20">
      {/* 연구 개발 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            연구 개발
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            다양한 분야의 문제를 데이터와 AI로 풀어내는 연구를 이어갑니다
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />

        {/* 연구 분야 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="relative h-[300px] xs:h-[350px] sm:h-[400px] rounded-[20px] xs:rounded-[25px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${area.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full p-6 xs:p-8 sm:p-10 flex flex-col justify-end">
                <h3
                  className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-white mb-3 xs:mb-4"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-[14px] xs:text-[15px] sm:text-[16px] font-normal text-white leading-[1.5]"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 연구 프로세스 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            연구 프로세스
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            체계적인 연구 단계를 통해 검증된 결과를 만들어냅니다
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />

        {/* 프로세스 단계 - 모바일/태블릿: 세로 스택 */}
        <div className="flex flex-col items-center justify-center gap-4 xs:gap-6 lg:hidden">
          {processSteps.map((step, index) => (
            <div key={index} className="w-full max-w-[360px] flex flex-col items-center">
              <div className="w-full max-w-[140px] xs:max-w-[160px] aspect-square rounded-full bg-[#004AAD] flex items-center justify-center">
                <p
                  className="text-white text-[18px] xs:text-[20px] font-bold"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {step.number}
                </p>
              </div>
              <p
                className="mt-2 text-[12px] xs:text-[13px] sm:text-[14px] font-medium text-[#004AAD] text-center"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* 프로세스 단계 - 데스크톱: 5열 그리드, 원 비율 유지 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6 items-start">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full max-w-[200px] xl:max-w-[220px] aspect-square rounded-full bg-[#004AAD] flex items-center justify-center">
                  <p
                    className="text-white text-[28px] xl:text-[32px] font-bold"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {step.number}
                  </p>
                </div>
                <p
                  className="mt-3 text-[16px] xl:text-[18px] font-medium text-[#004AAD] text-center"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하니만의 R&D 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            하니만의 R&D
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            산학연 협력과 실증 경험으로 검증된 R&D 역량을 보유하고 있습니다
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />

        {/* R&D 역량 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {rndCapabilities.map((capability, index) => (
            <div
              key={index}
              className="relative h-[250px] xs:h-[280px] sm:h-[300px] rounded-[20px] xs:rounded-[25px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${capability.image})` }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative h-full p-6 xs:p-8 sm:p-10 flex flex-col justify-end">
                <h3
                  className="text-[16px] xs:text-[18px] sm:text-[20px] font-semibold text-white mb-2 xs:mb-3"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {capability.title}
                </h3>
                <p
                  className="text-[12px] xs:text-[13px] sm:text-[14px] font-normal text-white leading-[1.4]"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 섹션 */}
      <div
        className="relative py-16 xs:py-20 sm:py-24 md:py-32"
        style={{
          background:
            'linear-gradient(134deg, rgba(9, 30, 58, 1) 0%, rgba(47, 128, 237, 0.5) 50%, rgba(45, 158, 224, 0) 100%)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 xs:px-6 text-center">
          <h2
            className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white mb-4 xs:mb-6"
            style={{ fontFamily: 'Gothic A1' }}
          >
            연구에서 서비스까지
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white leading-[1.5] mb-8 xs:mb-10 sm:mb-12"
            style={{ fontFamily: 'Gothic A1' }}
          >
            연구개발로 검증된 기술을 실제 현장에 적용하여 새로운 가치를 창출합니다
          </p>
          <button
            className="bg-[#004AAD] hover:bg-[#003B8A] text-white px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 rounded-[25px] xs:rounded-[30px] text-[16px] xs:text-[18px] sm:text-[20px] font-semibold transition-colors"
            style={{ fontFamily: 'Gothic A1' }}
          >
            R&D 협력 문의
          </button>
        </div>
      </div>
    </div>
  );
}
