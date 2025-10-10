'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 배너 */}
      <section
        id="page-banner"
        className="h-[500px] xs:h-[600px] sm:h-[700px] md:h-[800px] pt-16 xs:pt-18 sm:pt-20"
        style={{
          backgroundImage: 'url(/images/contact/contact_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-full flex flex-col justify-between pb-8 xs:pb-10 sm:pb-12">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 xs:gap-4 sm:gap-5 px-4 xs:px-6">
              <h1
                className="text-[32px] xs:text-[40px] sm:text-[48px] md:text-[60px] font-bold text-white text-center"
                style={{ fontFamily: 'Montserrat' }}
              >
                CONTACT
              </h1>
              <p
                className="text-[18px] xs:text-[22px] sm:text-[28px] md:text-[36px] font-medium text-white text-center leading-[1.25]"
                style={{ fontFamily: 'Gothic A1' }}
              >
                프로젝트 상담, 제휴, 제안 등 언제든 편하게 문의해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 폼 타이틀 */}
      <section className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-14 sm:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2
              className="text-[28px] xs:text-[32px] sm:text-[36px] font-semibold text-black"
              style={{ fontFamily: 'Gothic A1' }}
            >
              문의하기
            </h2>
            <div className="w-full h-[1px] bg-[#2C3647]" />
          </div>
        </div>
      </section>

      {/* 폼 본문 */}
      <section className="max-w-7xl mx-auto px-4 xs:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 좌측 이미지 */}
          <div className="hidden lg:block w-full max-w-[420px]">
            <div
              className="w-full rounded-[12px] overflow-hidden"
              style={{
                backgroundImage: 'url(/images/contact/contact_side.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '3/4',
              }}
            />
          </div>

          {/* 입력 폼 */}
          <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* 이름 */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                이름
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 연락처 */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                연락처
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 회사명 */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                회사명(소속 기관)
              </label>
              <input
                type="text"
                placeholder="회사명 또는 기관명을 입력하세요."
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 직위 */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                직위/직책
              </label>
              <input
                type="text"
                placeholder="팀장, 연구원 등"
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 이메일 */}
            {/* 모바일: 단일 입력 */}
            <div className="md:hidden md:col-span-2 flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                이메일
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 데스크톱: 아이디/도메인 분리 */}
            <div className="hidden md:flex md:col-span-2 md:flex-col md:gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                이메일
              </label>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <input
                  type="text"
                  placeholder="이메일 주소를 입력하세요."
                  className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                  style={{ fontFamily: 'Gothic A1' }}
                />
                <div
                  className="text-[20px] text-black text-center"
                  style={{ fontFamily: 'Gothic A1' }}
                >
                  @
                </div>
                <input
                  type="text"
                  placeholder="naver.com"
                  className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                  style={{ fontFamily: 'Gothic A1' }}
                />
              </div>
            </div>

            {/* 문의 항목 */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                문의 항목
              </label>
              <select
                className="h-[56px] rounded-[8px] border border-[#E5E7EB] px-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              >
                <option>문의하실 항목을 선택하세요.</option>
                <option>프로젝트 상담</option>
                <option>제휴</option>
                <option>기타</option>
              </select>
            </div>

            {/* 문의 내용 */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label
                className="text-[16px] font-semibold text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                문의 내용
              </label>
              <textarea
                placeholder="문의 내용을 입력해주세요. "
                className="min-h-[180px] rounded-[8px] border border-[#E5E7EB] p-4 text-[16px]"
                style={{ fontFamily: 'Gothic A1' }}
              />
            </div>

            {/* 개인정보 동의 + 버튼 */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <label
                className="inline-flex items-center gap-3 text-[16px] text-black"
                style={{ fontFamily: 'Gothic A1' }}
              >
                <input type="checkbox" className="w-4 h-4" /> 개인정보수집 및 이용방침에 동의합니다.
              </label>

              <button
                className="self-start bg-[#004AAD] text-[#E6EDF7] px-10 py-4 rounded-[50px] text-[18px] font-semibold"
                style={{ fontFamily: 'Gothic A1' }}
              >
                제출하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
