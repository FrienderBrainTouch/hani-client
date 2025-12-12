import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export function useTabState(defaultTab: string, paramName: string = 'tab') {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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
    navigate(`?${params.toString()}`, { replace: true });
  };

  return [activeTab, handleTabChange] as const;
}
