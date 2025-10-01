'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 페이지 타이틀 */}
        <h1 className="text-[48px] font-bold text-black mb-12" style={{ fontFamily: 'Gothic A1' }}>
          문의
        </h1>

        {/* 콘텐츠 */}
        <div className="py-8">
          <p
            className="text-[18px] text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Gothic A1' }}
          >
            여기에 문의 폼 컴포넌트를 렌더링합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
