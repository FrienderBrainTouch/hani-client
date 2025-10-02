'use client';

import Image from 'next/image';

export default function SocialValue() {
  const socialActivities = [
    {
      title: '예비사회적기업 지정',
      description:
        '사회적 가치 실현을 위한 공식 인증 획득\n취약계층 고용 및 지역 기반 활동을 제도적으로 인정받음',
    },
    {
      title: '사회적기업가 육성사업 참여',
      description:
        '교육·심리·지역문제 해결형 프로젝트 수행\n청소년 진로교육, 지역 취약계층 돌봄 프로그램 기획 및 운영',
    },
    {
      title: '청년·지역 기반 일자리 창출',
      description:
        'AI·데이터 가공 프로젝트를 통해 청년 인턴·연구원 채용\n지역 대학과 연계하여 실습·현장 경험 제공\n일자리 연계형 교육 프로그램 운영',
    },
    {
      title: '사회적경제 조직 및 공공기관 협력',
      description:
        '부천·경기 지역 사회적경제 조직과 공동 프로젝트 진행\n공공기관·지자체와 연계한 사회 문제 해결형 서비스 실증\n지역 기반 네트워크를 활용한 상생 모델 구축',
    },
  ];

  const esgCards = [
    {
      title: '환경',
      icon: '/images/about/icon-environment.png',
      image: '/images/about/esg-environment.png',
    },
    {
      title: '사회',
      icon: '/images/about/icon-social.png',
      image: '/images/about/esg-social.png',
    },
    {
      title: '지배구조',
      icon: '/images/about/icon-governance.png',
      image: '/images/about/esg-governance.png',
    },
  ];

  return (
    <div className="space-y-12 xs:space-y-16 sm:space-y-20">
      {/* 기업 철학 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            기업 철학
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            데이터와 AI를 통해 사회적 가치를 실현합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* 3개 원형 버블 섹션 */}
      {/* 모바일/태블릿/768px: 세로 정렬 */}
      <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 lg:hidden">
        <div className="w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] rounded-full border-4 border-[#B0C7E6] bg-white flex items-center justify-center">
          <p
            className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-black text-center"
            style={{ fontFamily: 'Gothic A1' }}
          >
            사람을 위한 기술
          </p>
        </div>
        <div className="w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] rounded-full border-4 border-[#004AAD] bg-white flex items-center justify-center">
          <p
            className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-black text-center"
            style={{ fontFamily: 'Gothic A1' }}
          >
            사회적 가치 실현
          </p>
        </div>
        <div className="w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] rounded-full border-4 border-[#B0C7E6] bg-white flex items-center justify-center">
          <p
            className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-black text-center"
            style={{ fontFamily: 'Gothic A1' }}
          >
            약자를 향한 배려
          </p>
        </div>
      </div>

      {/* 노트북/데스크톱: 기존 3개 원형 버블 디자인 */}
      <div className="hidden lg:block relative h-[300px] flex items-center justify-center">
        <div className="relative w-[900px] h-[300px] mx-auto">
          {/* 첫 번째 원 - 왼쪽 (위쪽 border: 진한 파란색, 아래쪽 border: 연한 파란색) */}
          <div className="absolute left-0 top-0 w-[300px] h-[300px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* 위쪽 반원 */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-white overflow-hidden z-20"
                style={{
                  borderTopLeftRadius: '150px',
                  borderTopRightRadius: '150px',
                  borderTop: '4px solid #004AAD',
                  borderLeft: '4px solid #004AAD',
                  borderRight: '4px solid #004AAD',
                }}
              />
              {/* 아래쪽 반원 */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-white overflow-hidden z-10"
                style={{
                  borderBottomLeftRadius: '150px',
                  borderBottomRightRadius: '150px',
                  borderBottom: '4px solid #B0C7E6',
                  borderLeft: '4px solid #B0C7E6',
                  borderRight: '4px solid #B0C7E6',
                }}
              />
              {/* 텍스트 */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <p
                  className="text-[18px] font-semibold text-black text-center"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  사람을 위한 기술
                </p>
              </div>
            </div>
          </div>

          {/* 두 번째 원 - 중앙 (위쪽 border: 연한 파란색, 아래쪽 border: 진한 파란색) */}
          <div className="absolute left-[296px] top-0 w-[300px] h-[300px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* 위쪽 반원 */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-white overflow-hidden z-10"
                style={{
                  borderTopLeftRadius: '150px',
                  borderTopRightRadius: '150px',
                  borderTop: '4px solid #B0C7E6',
                  borderLeft: '4px solid #B0C7E6',
                  borderRight: '4px solid #B0C7E6',
                }}
              />
              {/* 아래쪽 반원 */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-white overflow-hidden z-20"
                style={{
                  borderBottomLeftRadius: '150px',
                  borderBottomRightRadius: '150px',
                  borderBottom: '4px solid #004AAD',
                  borderLeft: '4px solid #004AAD',
                  borderRight: '4px solid #004AAD',
                }}
              />
              {/* 텍스트 */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <p
                  className="text-[18px] font-semibold text-black text-center"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  사회적 가치 실현
                </p>
              </div>
            </div>
          </div>

          {/* 세 번째 원 - 오른쪽 (위쪽 border: 진한 파란색, 아래쪽 border: 연한 파란색) */}
          <div className="absolute left-[592px] top-0 w-[300px] h-[300px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* 위쪽 반원 */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 bg-white overflow-hidden z-20"
                style={{
                  borderTopLeftRadius: '150px',
                  borderTopRightRadius: '150px',
                  borderTop: '4px solid #004AAD',
                  borderLeft: '4px solid #004AAD',
                  borderRight: '4px solid #004AAD',
                }}
              />
              {/* 아래쪽 반원 */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-white overflow-hidden z-10"
                style={{
                  borderBottomLeftRadius: '150px',
                  borderBottomRightRadius: '150px',
                  borderBottom: '4px solid #B0C7E6',
                  borderLeft: '4px solid #B0C7E6',
                  borderRight: '4px solid #B0C7E6',
                }}
              />
              {/* 텍스트 */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <p
                  className="text-[18px] font-semibold text-black text-center"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  약자를 향한 배려
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 인용구 텍스트 섹션 */}
      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 py-8 xs:py-10 sm:py-12 !mt-20 xs:!mt-24 sm:!mt-32 md:!mt-40">
        {/* 왼쪽 따옴표 */}
        <div className="absolute left-[50px] xs:left-[80px] sm:left-[120px] md:left-[150px] top-0 text-[20px] xs:text-[30px] sm:text-[40px] md:text-[50px] text-black">
          &ldquo;
        </div>

        {/* 오른쪽 따옴표 */}
        <div className="absolute right-[50px] xs:right-[80px] sm:right-[120px] md:right-[150px] bottom-0 text-[20px] xs:text-[30px] sm:text-[40px] md:text-[50px] text-black">
          &rdquo;
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            하니는 기술의 목적을 사람에게 두고 있습니다.
            <br />
            데이터와 AI는 복잡한 문제를 해결하는 도구이자, 사회를{' '}
            <span className="text-[#004AAD] font-semibold">더 나은 방향으로 이끄는</span> 힘입니다.
          </p>
        </div>
      </div>

      {/* 배경 이미지 섹션 */}
      <div className="w-full">
        <div
          className="relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px]"
          style={{
            backgroundImage: 'url(/images/about/social-value-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* 사회적기업 활동 섹션 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2
            className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-black"
            style={{ fontFamily: 'Gothic A1' }}
          >
            사회적기업 활동
          </h2>
          <p
            className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-normal text-black leading-[1.25]"
            style={{ fontFamily: 'Gothic A1' }}
          >
            혁신 기술로 사회문제를 해결하며 가치를 실현합니다.
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#2C3647]" />
      </div>

      {/* 사회적기업 활동 카드들 */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
          {socialActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#E6EDF7] rounded-[20px] xs:rounded-[25px] md:rounded-[30px] lg:rounded-[40px] p-6 xs:p-8 sm:p-10 flex flex-col items-center justify-center gap-4 xs:gap-6 sm:gap-8 min-h-[180px] xs:min-h-[200px] sm:min-h-[230px]"
            >
              <h3
                className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-black text-center"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {activity.title}
              </h3>
              <p
                className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] font-normal text-black leading-[1.3] text-left whitespace-pre-line"
                style={{ fontFamily: 'Gothic A1' }}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ESG 가치 실현 섹션 */}
      <div className="bg-[#003B8A] py-12 xs:py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 flex flex-col gap-6 xs:gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-white"
              style={{ fontFamily: 'Gothic A1' }}
            >
              ESG 가치 실현
            </h2>
            <p
              className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal text-white leading-[1.25]"
              style={{ fontFamily: 'Gothic A1' }}
            >
              친환경 기술, 사회적 기여, 투명한 경영으로 더 나은 미래를 만듭니다.
            </p>
          </div>
          <div className="w-full h-[1px] bg-white" />

          {/* ESG 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 mt-8 xs:mt-10 sm:mt-12">
            {esgCards.map((card, index) => (
              <div
                key={index}
                className="relative h-[200px] xs:h-[220px] sm:h-[250px] md:h-[280px] rounded-[15px] xs:rounded-[20px] overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full p-4 xs:p-6 sm:p-8 flex flex-col justify-end gap-2 xs:gap-3">
                  <div className="flex items-center gap-2 xs:gap-3 w-fit">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] sm:w-[50px] sm:h-[50px]"
                    />
                    <span
                      className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] font-medium text-white"
                      style={{ fontFamily: 'Gothic A1' }}
                    >
                      {card.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
