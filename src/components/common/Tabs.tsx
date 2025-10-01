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
    <div className="flex items-center bg-[#001A3D]/80 rounded-[50px] md:rounded-[80px] lg:rounded-[100px] w-full max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-none px-3 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-[15px] gap-1 md:gap-2 lg:gap-3 xl:gap-[14px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex items-center justify-center py-2 px-2 md:py-3 md:px-4 lg:py-4 lg:px-8 xl:py-5 xl:px-[100px] rounded-[50px] md:rounded-[80px] lg:rounded-[100px] text-sm md:text-base lg:text-lg xl:text-[24px] font-semibold leading-[1.25] transition-all whitespace-nowrap ${
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
