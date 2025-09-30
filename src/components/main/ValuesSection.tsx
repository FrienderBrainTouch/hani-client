'use client';

import Image from 'next/image';

export default function ValuesSection() {
  const values = [
    {
      title: '창의성',
      icon: '/images/creative-icon.svg',
    },
    {
      title: '혁신',
      icon: '/images/innovative-icon.svg',
    },
    {
      title: '지역 협력',
      icon: '/images/collaborative-icon.svg',
    },
    {
      title: '교육',
      icon: '/images/education-icon.svg',
    },
    {
      title: '지속 가능성',
      icon: '/images/esg-icon.svg',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-left mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            프랜더는 <span className="text-green-600">기술과 교육의 융합</span>을 통해 함께
            성장합니다.
          </h2>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* 왼쪽: 핵심 가치들 */}
          <div className="flex flex-col justify-center gap-4 flex-1 min-h-80">
            {/* 5개 가치 아이콘들 */}
            <div className="flex flex-wrap gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#E5F0D5' }}
                  >
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{value.title}</span>
                </div>
              ))}
            </div>

            {/* 설명 텍스트 */}
            <div className="mt-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                첨단 기술과 창의 교육 콘텐츠를 결합해
                <br />
                학생, 교사, 지역사회를 연결하는 솔루션을 제공합니다.
              </p>
            </div>

            {/* 회사 정보 태그들 */}
            <div className="flex flex-wrap gap-4 pt-6">
              {['#예비사회적기업', '#벤처기업', '#기업부설 연구소'].map((tag, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-green-100 text-green-700 rounded-full text-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 오른쪽: 3D 일러스트레이션 영역 */}
          <div className="flex-1">
            <div className="rounded-2xl p-8 min-h-80 flex items-center justify-center">
              <Image
                src="/images/value.svg"
                alt="프랜더 가치 일러스트레이션"
                width={200}
                height={200}
                className="w-72 h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
