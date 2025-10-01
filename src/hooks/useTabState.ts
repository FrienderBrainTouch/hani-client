'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function useTabState(defaultTab: string, paramName: string = 'tab') {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에서 탭 파라미터 읽기, 없으면 기본값 사용
  const initialTab = searchParams.get(paramName) || defaultTab;
  const [activeTab, setActiveTab] = useState(initialTab);

  // URL 파라미터가 변경되면 탭 상태 업데이트
  useEffect(() => {
    const tabFromUrl = searchParams.get(paramName);
    if (tabFromUrl && tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, paramName, activeTab]);

  // 탭 변경 시 URL 업데이트
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, tabId);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return [activeTab, handleTabChange] as const;
}
