/// <reference types="vite/client" />

import { useEffect, useRef } from 'react';

// 카카오맵 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  className?: string;
  lat?: number;
  lng?: number;
  level?: number;
}

export default function KakaoMap({
  className = '',
  lat = 37.6584,
  lng = 126.832,
  level = 3,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const apiKey = import.meta.env.VITE_KAKAO_API_KEY;
    if (!apiKey) {
      console.error('VITE_KAKAO_API_KEY가 설정되지 않았습니다.');
      return;
    }

    // 이미 스크립트가 로드되어 있는지 확인
    const existingScript = document.querySelector('script[src*="dapi.kakao.com/v2/maps/sdk.js"]');

    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error('카카오맵 SDK가 로드되지 않았습니다.');
        return;
      }

      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: level,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도에 표시
        marker.setMap(map);
      });
    };

    if (existingScript && window.kakao) {
      // 이미 로드되어 있으면 바로 초기화
      initMap();
    } else if (!existingScript) {
      // 스크립트가 없으면 새로 로드
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      script.async = true;

      script.onload = () => {
        initMap();
      };

      script.onerror = () => {
        console.error('카카오맵 SDK 로드에 실패했습니다.');
      };

      document.head.appendChild(script);
    } else {
      // 스크립트는 있지만 아직 로드 중이면 이벤트 리스너 추가
      existingScript.addEventListener('load', initMap);
    }
  }, [lat, lng, level]);

  return (
    <div className={`bg-gray-200 rounded-lg overflow-hidden relative ${className}`}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} className="rounded-lg" />
    </div>
  );
}
