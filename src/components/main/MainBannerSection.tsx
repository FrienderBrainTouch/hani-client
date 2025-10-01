'use client';

export default function MainBannerSection() {
  return (
    <div id="main-banner">
      {/* Hero Section */}
      <section
        className="h-[1000px] bg-[#001A3D]"
        style={{
          backgroundImage: 'url(/images/main/main-bg-01.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center max-w-[841px] px-6 gap-5">
            <h1
              className="text-[60px] font-bold text-white leading-[1.22] text-center"
              style={{ fontFamily: 'Montserrat' }}
            >
              Data & AI, Designing Value
            </h1>
            <p
              className="text-[36px] font-medium text-white leading-[1.25] text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              데이터와 AI로 세상을 분석하고, 가치를 설계하다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="bg-black/50 py-20"
        style={{
          backgroundImage: 'url(/images/main/main-bg-02.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-12 max-w-7xl px-6">
            <h2
              className="text-[50px] font-bold text-white text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              데이터를 담다
            </h2>
            <h2
              className="text-[50px] font-bold text-white text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              AI로 읽다
            </h2>
            <h2
              className="text-[50px] font-bold text-white text-center"
              style={{ fontFamily: 'Gothic A1' }}
            >
              가치로 만들다
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
