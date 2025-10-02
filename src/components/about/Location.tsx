'use client';

import { KakaoMap } from '@/components/common';

export default function Location() {
  const transportInfo = [
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M10 15h30v25H10V15z M15 10h20v5H15V10z M25 35v5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: '7호선 삼산체육관역 하차,',
      subtitle: '5번출구 - 도보 5분',
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect
            x="10"
            y="10"
            width="30"
            height="30"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="17" cy="35" r="3" fill="currentColor" />
          <circle cx="33" cy="35" r="3" fill="currentColor" />
        </svg>
      ),
      title: '53,59-1,28번 버스',
      subtitle: '37, 79, 526, 558, 565번 버스 이용',
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M25 10 L35 20 L35 35 L30 35 L30 40 L20 40 L20 35 L15 35 L15 20 L25 10z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="35" r="2" fill="currentColor" />
          <circle cx="30" cy="35" r="2" fill="currentColor" />
        </svg>
      ),
      title: '웰튼용왕센터 지하 B1 주차장 이용',
      subtitle: '',
    },
  ];

  return (
    <div className="space-y-20">
      {/* 오시는 길 타이틀 */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[36px] font-bold text-black" style={{ fontFamily: 'Gothic A1' }}>
          오시는 길
        </h2>
        {/* 구분선 */}
        <div className="mt-6 w-full h-[1px] bg-[#2C3647]"></div>
      </div>

      {/* 지도 섹션 */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[500px] rounded-[20px] overflow-hidden">
          {/* 카카오맵 */}
          <KakaoMap className="w-full h-full" lat={37.6584} lng={126.832} level={3} />

          {/* 하단 정보 바 */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#004AAD] py-8 px-12">
            <div className="flex items-center justify-around">
              {/* ADDRESS */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#B0C7E6] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>
                    ADDRESS
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Montserrat' }}>
                    경기도 부천시 길주로 17, 608호
                  </p>
                </div>
              </div>

              {/* TEL */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#B0C7E6] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>
                    TEL
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Montserrat' }}>
                    010-1111-1111
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#B0C7E6] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat' }}>
                    EMAIL
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Montserrat' }}>
                    111@hani.co.kr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 교통안내 섹션 */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[36px] font-bold text-black" style={{ fontFamily: 'Gothic A1' }}>
          교통안내
        </h2>
        {/* 구분선 */}
        <div className="mt-6 w-full h-[1px] bg-[#2C3647]"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {transportInfo.map((item, index) => (
            <div
              key={index}
              className="bg-[#E6EDF7] rounded-[20px] p-8 flex flex-col items-center justify-center gap-6 min-h-[200px]"
            >
              <div className="text-black">{item.icon}</div>
              <div className="text-center">
                <p
                  className="text-[18px] font-medium text-black leading-[1.4]"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  {item.title}
                </p>
                {item.subtitle && (
                  <p
                    className="text-[18px] font-normal text-black leading-[1.4]"
                    style={{ fontFamily: 'Gothic A1' }}
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 푸터와의 간격 */}
      <div className="h-20"></div>
    </div>
  );
}
