'use client';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex items-center bg-[#001A3D]/80 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-[30px] xl:py-[15px] 2xl:px-[30px] 2xl:py-[15px] gap-1 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-[14px] 2xl:gap-[14px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex items-center justify-center py-1 px-1 sm:py-2 sm:px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 xl:py-4 xl:px-6 2xl:py-5 2xl:px-[100px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] 2xl:rounded-[100px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-semibold leading-[1.25] transition-all whitespace-nowrap ${
            activeTab === tab.id
              ? 'bg-[#002C68] text-white'
              : 'bg-transparent text-[#6B7685] hover:text-white'
          }`}
          style={{ fontFamily: 'Gothic A1', fontWeight: activeTab === tab.id ? 700 : 600 }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
