'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CompanyHistory() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const historyData = [
    {
      year: '2025',
      items: [
        '초격차 스타트업 1000+ 프로젝트 선정',
        '500배출 정자 영상 기반 티라넨 CNN AI 알고리즘 개발',
        '강원 바이오헬스 수요기업 협업 추진',
      ],
    },
    {
      year: '2024',
      items: [
        '산학연플랫폼협력기술개발 과제 종료',
        '(자율주행 드론 Station 기반 저탄소 농업기술)',
        '데이터 바우처 사업 실적',
        '모바일 게임 UX 개선 (모클)',
        '배회감지기 데이터 전처리 (프렌디)',
        '3D 모델 데이터 정규화 (뉴런즈)',
      ],
    },
    {
      year: '2023',
      items: [
        'AI 영유아 비대면 심리상담 서비스 정식 출시',
        '데이터 가공 및 분석 서비스 교육·심리 분야 확장',
      ],
    },
    {
      year: '2022',
      items: ['데이터 가공/AI 서비스 인프라 고도화', '웹·앱 구축 사업 진입 준비'],
    },
    {
      year: '2021',
      items: [
        '중소벤처기업부 청년창업사관학교 졸업',
        "AI 기반 인지발달 프로그램 'Brain Touch' 개발",
      ],
    },
    {
      year: '2020',
      items: ['고용노동부 예비사회적기업 지정', '사회적기업가 육성사업 참여'],
    },
    {
      year: '2019',
      items: ['KOICA 개발벤처상 수상', '주식회사 하니 설립'],
    },
  ];

  const certificates = [
    '/images/about/certificate-1.png',
    '/images/about/certificate-2.png',
    '/images/about/certificate-3.png',
    '/images/about/certificate-4.png',
    '/images/about/certificate-5.png',
  ];

  // 오토 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="space-y-20">
      {/* 연혁 메인 섹션 */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* 왼쪽: 이미지와 텍스트 */}
          <div className="lg:w-[450px] flex flex-col gap-8">
            <div className="relative w-full h-[400px] rounded-[30px] overflow-hidden">
              <Image
                src="/images/about/history-main.png"
                alt="History"
                fill
                className="object-cover"
              />
            </div>
            <p
              className="text-[24px] font-medium text-black leading-[1.4]"
              style={{ fontFamily: 'Gothic A1' }}
            >
              하니는 데이터와 AI를 기반으로
              <br />
              끊임없이 성장해왔습니다.
            </p>
          </div>

          {/* 오른쪽: 타임라인 (스크롤 영역) */}
          <div className="flex-1">
            <div className="h-[650px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-12">
                {historyData.map((item, index) => (
                  <div key={index} className="flex gap-8">
                    {/* 년도 */}
                    <div className="flex-shrink-0 w-[100px]">
                      <h3
                        className="text-[48px] font-bold text-black"
                        style={{ fontFamily: 'Montserrat' }}
                      >
                        {item.year}
                      </h3>
                    </div>

                    {/* 내용 */}
                    <div className="flex-1 pt-3">
                      <ul className="space-y-3">
                        {item.items.map((content, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#004AAD] mt-2 flex-shrink-0">−</span>
                            <span
                              className="text-[18px] font-normal text-black leading-[1.5]"
                              style={{ fontFamily: 'Gothic A1' }}
                            >
                              {content}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 인증 및 수상 섹션 */}
      <div className="bg-[#F7FAFD] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-[36px] font-bold text-black mb-12"
            style={{ fontFamily: 'Gothic A1' }}
          >
            인증 및 수상
          </h2>

          {/* 슬라이드 컨테이너 */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="min-w-full flex justify-center items-center gap-8">
                  {/* 현재 슬라이드에 4개 이미지 표시 */}
                  {[0, 1, 2, 3].map((offset) => {
                    const imgIndex = (index + offset) % certificates.length;
                    return (
                      <div
                        key={offset}
                        className="relative w-[280px] h-[380px] rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={certificates[imgIndex]}
                          alt={`Certificate ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-[#004AAD]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #004aad;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #003d8f;
        }
      `}</style>
    </div>
  );
}
