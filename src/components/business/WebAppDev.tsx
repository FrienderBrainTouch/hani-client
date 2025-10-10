'use client';

export default function WebAppDev() {
  const developmentStages = [
    {
      title: '기획',
      icon: '/images/business/webapp_planning.png',
      details: ['요구사항 분석', '서비스 구조 설계'],
    },
    {
      title: '디자인',
      icon: '/images/business/webapp_design.png',
      details: ['반응형 UI/UX', '브랜드 아이덴티티'],
    },
    {
      title: '개발',
      icon: '/images/business/webapp_development.png',
      details: ['AI·데이터 연동', '멀티플랫폼 지원'],
    },
    {
      title: '운영',
      icon: '/images/business/webapp_operation.png',
      details: ['안정적 배포·모니터링', '기능 개선·고도화'],
    },
  ];

  const processSteps = [
    { number: '01', title: '분석', isActive: false },
    { number: '02', title: '설계', isActive: true },
    { number: '03', title: '디자인', isActive: false },
    { number: '04', title: '개발', isActive: true },
    { number: '05', title: '검증·배포', isActive: false },
  ];

  const differentiators = [
    {
      title: '데이터·AI 융합 역량',
      description: 'AI 서비스와의 완벽한 연동으로 혁신적인 사용자 경험을 제공합니다',
    },
    {
      title: '검증된 안정성과 신뢰성',
      description: '정부 프로젝트를 통해 검증된 품질과 안정적인 서비스 운영',
    },
    {
      title: '도메인별 UX 전문',
      description: '다양한 분야의 전문성을 바탕으로 한 사용자 중심의 UX/UI 설계',
    },
  ];

  return (
    <div className="space-y-12 xs:space-y-16 sm:space-y-20">
      {/* 웹·앱 구축 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            웹·앱 구축
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터와 AI 기술을 실질적인 서비스로 구현합니다
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />

        {/* 개발 단계 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {developmentStages.map((stage, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-[20px] xs:rounded-[25px] md:rounded-[30px] p-6 xs:p-8 sm:p-10 flex flex-col items-center gap-4 xs:gap-6 min-h-[200px] xs:min-h-[220px] sm:min-h-[240px]"
            >
              <div className="w-[72px] xs:w-[80px] sm:w-[96px] aspect-square">
                <img src={stage.icon} alt={stage.title} className="w-full h-full object-contain" />
              </div>
              <h3
                className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-black text-center"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {stage.title}
              </h3>
              <ul className="flex flex-col gap-2 xs:gap-3 w-full">
                {stage.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-[12px] xs:text-[13px] sm:text-[14px] font-normal text-gray-600 leading-[1.4] text-center"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 구축 프로세스 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            구축 프로세스
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            체계적인 워크플로우를 통해 안정성과 확장성을 보장합니다
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />

        {/* 프로세스 단계 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center gap-2 xs:gap-3">
                <div
                  className={`w-[60px] xs:w-[70px] sm:w-[80px] h-[60px] xs:h-[70px] sm:h-[80px] rounded-full flex flex-col items-center justify-center ${
                    step.isActive ? 'bg-[#004AAD] text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <p
                    className="text-[16px] xs:text-[18px] sm:text-[20px] font-bold"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {step.number}
                  </p>
                </div>
                <p
                  className={`text-[12px] xs:text-[13px] sm:text-[14px] font-medium text-center ${
                    step.isActive ? 'text-[#004AAD]' : 'text-gray-600'
                  }`}
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {step.title}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden sm:block w-8 h-[2px] bg-gray-300 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 하니만의 차별성 섹션 */}
      <div className="bg-[#003B8A] py-12 xs:py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-white"
              style={{ fontFamily: 'Gothic A1' }}
            >
              하니만의 차별성
            </h2>
            <p
              className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-white leading-[1.25]"
              style={{ fontFamily: 'Gothic A1' }}
            >
              체계적인 워크플로우를 통해 안정성과 확장성을 보장합니다
            </p>
          </div>
          <div className="w-full h-[1px] bg-white" />

          {/* 차별성 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 mt-8 xs:mt-10 sm:mt-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="relative h-[200px] xs:h-[220px] sm:h-[250px] rounded-[15px] xs:rounded-[20px] overflow-hidden bg-gradient-to-br from-[#004AAD] to-[#003B8A]"
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative h-full p-6 xs:p-8 sm:p-10 flex flex-col justify-center gap-3 xs:gap-4">
                  <h3
                    className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-white leading-[1.3]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[12px] xs:text-[13px] sm:text-[14px] font-normal text-white/90 leading-[1.4]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            함께 만드는 디지털 혁신
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white leading-[1.5] mb-8 xs:mb-10 sm:mb-12"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터와 AI 기반의 웹·앱 서비스를 지금 시작해보세요
          </p>
          <button
            className="bg-[#004AAD] hover:bg-[#003B8A] text-white px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 rounded-[25px] xs:rounded-[30px] text-[16px] xs:text-[18px] sm:text-[20px] font-semibold transition-colors"
            style={{ fontFamily: 'Gothic A1' }}
          >
            프로젝트 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
