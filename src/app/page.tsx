export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-16 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 animate-pulse">🚀 ERP Client</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Next.js + TypeScript + Tailwind CSS로 구축된 현대적인 ERP 시스템
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
                ✅ Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                ⚡ Next.js 15
              </span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium">
                🔷 TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            주요 기능
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dashboard Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  대시보드
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  실시간 시스템 현황을 한눈에 확인하고 중요한 지표를 모니터링하세요.
                </p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 transition-colors">
                  자세히 보기
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* Inventory Management Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  재고 관리
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  재고 현황을 실시간으로 추적하고 재고 부족 알림을 받아보세요.
                </p>
                <div className="mt-4 flex items-center text-green-600 dark:text-green-400 text-sm font-medium group-hover:text-green-700 transition-colors">
                  자세히 보기
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* Order Management Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  주문 관리
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  주문을 효율적으로 처리하고 배송 상태를 실시간으로 관리하세요.
                </p>
                <div className="mt-4 flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium group-hover:text-orange-700 transition-colors">
                  자세히 보기
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* Reports Card */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">보고서</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  상세한 비즈니스 분석과 인사이트를 통해 데이터 기반 의사결정을 하세요.
                </p>
                <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:text-purple-700 transition-colors">
                  자세히 보기
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Test Section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              🎨 Tailwind CSS 색상 테스트
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-red-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-red-600 transition-colors">
                Red
              </div>
              <div className="bg-orange-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-orange-600 transition-colors">
                Orange
              </div>
              <div className="bg-yellow-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-yellow-600 transition-colors">
                Yellow
              </div>
              <div className="bg-green-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-green-600 transition-colors">
                Green
              </div>
              <div className="bg-blue-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-blue-600 transition-colors">
                Blue
              </div>
              <div className="bg-purple-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-purple-600 transition-colors">
                Purple
              </div>
              <div className="bg-pink-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-pink-600 transition-colors">
                Pink
              </div>
              <div className="bg-indigo-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-indigo-600 transition-colors">
                Indigo
              </div>
              <div className="bg-teal-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-teal-600 transition-colors">
                Teal
              </div>
              <div className="bg-cyan-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-cyan-600 transition-colors">
                Cyan
              </div>
              <div className="bg-emerald-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-emerald-600 transition-colors">
                Emerald
              </div>
              <div className="bg-rose-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:bg-rose-600 transition-colors">
                Rose
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
