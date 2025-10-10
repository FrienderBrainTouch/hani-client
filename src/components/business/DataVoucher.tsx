'use client';

import Image from 'next/image';

export default function DataVoucher() {
  const serviceFlow = [
    { title: '데이터 수집', isActive: false },
    { title: '가공', isActive: true },
    { title: '분석 · 시각화', isActive: false },
  ];

  const processSteps = [
    { number: '01', title: '수집 · 생성', isActive: true },
    { number: '02', title: '전처리', isActive: false },
    { number: '03', title: '라벨링', isActive: true },
    { number: '04', title: '검증 · 관리', isActive: false },
    { number: '05', title: '활용 · 분석', isActive: true },
  ];

  const differentiators = [
    {
      title: '데이터 품질 관리,\n보안 인증 절차 구축',
      image: '/images/business/card1-bg.png',
    },
    {
      title: '정부 지원사업과 다양한\n산업 실적 기반 전문성',
      image: '/images/business/card2-bg.png',
    },
    {
      title: '이미지·음성·텍스트·3D까지\n멀티모달 데이터 처리 경험',
      image: '/images/business/card3-bg.png',
    },
    {
      title: '실제 R&D 및 서비스로\n연결되는 실증 경험',
      image: '/images/business/card4-bg.png',
    },
  ];

  return (
    <div className="space-y-12 xs:space-y-16 sm:space-y-20">
      {/* 서비스 개요 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            서비스 개요
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터를 수집·정제·가공하여 고품질 데이터셋을 제공합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* 서비스 플로우 - 모바일/태블릿 */}
      <div className="flex flex-col items-center gap-6 xs:gap-8 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 xs:gap-6 w-full">
            {serviceFlow.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] h-[80px] xs:h-[90px] sm:h-[100px] md:h-[120px] rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] md:rounded-[30px] flex items-center justify-center ${
                    item.isActive
                      ? 'bg-[#B0C7E6] text-black'
                      : item.title === '데이터 수집'
                      ? 'bg-[#D9E4F3] text-black'
                      : 'bg-[#E6EDF7] text-black'
                  }`}
                  style={{ border: '1px solid #004AAD' }}
                >
                  <p
                    className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-center px-2"
                    style={{ fontFamily: 'Gothic A1', fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                </div>
                {index < serviceFlow.length - 1 && (
                  <div className="hidden md:block w-6 h-[2px] bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>

          <p
            className="text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] font-normal text-gray-700 leading-[1.5] text-center mt-6 xs:mt-8"
            style={{ fontFamily: 'Gothic A1' }}
          >
            다양한 산업 분야에서 데이터를 정제하고 가공해 기업이 바로 활용할 수 있는 가치 있는
            데이터셋을 제공합니다.
          </p>
        </div>
      </div>

      {/* 서비스 플로우 - 데스크톱 */}
      <div className="hidden lg:block px-4 xs:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between gap-2">
            {serviceFlow.map((item, index) => (
              <div key={index} className="flex-1 flex items-center justify-center">
                <div
                  className={`w-full max-w-[300px] h-[170px] rounded-[120px] flex items-center justify-center ${
                    item.isActive
                      ? 'bg-[#B0C7E6] text-black'
                      : item.title === '데이터 수집'
                      ? 'bg-[#D9E4F3] text-black'
                      : 'bg-[#E6EDF7] text-black'
                  }`}
                  style={{ border: '1px solid #004AAD' }}
                >
                  <p
                    className="text-[20px] lg:text-[24px] font-semibold text-center px-2"
                    style={{ fontFamily: 'Gothic A1', fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 설명 텍스트 - 데스크톱 */}
      <div className="hidden lg:block text-center">
        <div className="max-w-7xl mx-auto px-4 xs:px-6">
          <p
            className="text-[20px] font-normal text-gray-700 leading-[1.5] text-center mx-auto"
            style={{ fontFamily: 'Gothic A1' }}
          >
            다양한 산업 분야에서 데이터를 정제하고 가공해 기업이 바로 활용할 수 있는 가치 있는
            데이터셋을 제공합니다.
          </p>
        </div>
      </div>

      {/* 서비스 프로세스 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            서비스 프로세스
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            단계별 체계적인 프로세스로 고품질을 보장합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* 프로세스 단계 - 모바일/태블릿 */}
      <div className="flex flex-col items-center justify-center gap-4 xs:gap-6 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-3 xs:gap-4">
                <div
                  className={`w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] md:rounded-[30px] flex flex-col items-center justify-center gap-2 xs:gap-3 px-4 xs:px-6 ${
                    step.isActive
                      ? 'bg-[#E6EDF7] text-black'
                      : step.number === '03'
                      ? 'bg-[#B0C7E6] text-black'
                      : step.number === '01'
                      ? 'bg-[#E6EDF7] text-black'
                      : step.number === '05'
                      ? 'bg-[#91BBF3] text-black'
                      : 'bg-white border border-[#88B5F2] text-black'
                  }`}
                >
                  <p
                    className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] font-bold"
                    style={{ fontFamily: 'Gothic A1', fontWeight: 700 }}
                  >
                    {step.number}
                  </p>
                  <p
                    className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] font-normal text-center"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-[12px] xs:w-[14px] sm:w-[16px] h-[12px] xs:h-[14px] sm:h-[16px] mx-2 mt-2">
                  <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1L17 9L9 17L8 16L14 10H1V8H14L8 2L9 1Z"
                      fill="#D9D9D9"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 프로세스 단계 - 데스크톱 (5개의 원, max-w-7xl, 반응형) */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 xs:px-6">
          <div className="grid grid-cols-5 gap-6 items-center">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-full max-w-[220px] xl:max-w-[240px] aspect-square rounded-full flex flex-col items-center justify-center ${
                    step.isActive
                      ? 'bg-[#E6EDF7] text-black'
                      : step.number === '03'
                      ? 'bg-[#B0C7E6] text-black'
                      : step.number === '01'
                      ? 'bg-[#E6EDF7] text-black'
                      : step.number === '05'
                      ? 'bg-[#91BBF3] text-black'
                      : 'bg-white border border-[#88B5F2] text-black'
                  }`}
                >
                  <p
                    className="text-[28px] xl:text-[36px] font-bold"
                    style={{ fontFamily: 'Gothic A1', fontWeight: 700 }}
                  >
                    {step.number}
                  </p>
                  <p
                    className="text-[18px] xl:text-[22px] font-normal text-center"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 차별화 포인트 섹션 */}
      <div
        className="relative py-12 xs:py-16 sm:py-20 md:py-24"
        style={{
          backgroundImage: 'url(/images/business/differentiator-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-white"
              style={{ fontFamily: 'Gothic A1' }}
            >
              차별화 포인트
            </h2>
            <p
              className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-white leading-[1.25]"
              style={{ fontFamily: 'Gothic A1' }}
            >
              하니만의 데이터 가공 서비스는 검증된 경험과 전문성으로 차별화됩니다.
            </p>
          </div>
          <div className="w-full h-[1px] bg-white" />

          {/* 차별화 포인트 카드들 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mt-6 xs:mt-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[280px] lg:h-[370px] rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] overflow-hidden border border-white"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative h-full p-4 xs:p-6 md:p-8 lg:p-[35px] flex items-end">
                  <p
                    className="text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-normal text-white leading-[1.25] whitespace-pre-line"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
      <div
        className="relative py-12 xs:py-16 sm:py-20 md:py-24"
        style={{
          background:
            'linear-gradient(134deg, rgba(9, 30, 58, 1) 0%, rgba(47, 128, 237, 0.5) 50%, rgba(45, 158, 224, 0) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col items-center gap-6 xs:gap-8 sm:gap-10">
          <div className="flex flex-col items-center gap-4 xs:gap-6">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-white text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              데이터로 여는 혁신
            </h2>
            <p
              className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-white leading-[1.25] text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              하니는 고품질 데이터 가공을 통해 기관과 기업의 디지털 전환을 지원합니다.
            </p>
          </div>
          <button
            className="bg-[#00214E] hover:bg-[#002C68] text-[#E6EDF7] px-8 xs:px-10 sm:px-12 md:px-16 lg:px-[100px] py-4 xs:py-5 sm:py-6 md:py-[25px] lg:py-[30px] rounded-[25px] xs:rounded-[30px] md:rounded-[50px] lg:rounded-[60px] text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold transition-colors"
            style={{ fontFamily: 'Gothic A1' }}
          >
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
}
