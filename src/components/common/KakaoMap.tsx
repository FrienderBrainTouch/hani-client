'use client';

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

    // script 태그 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
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

    document.head.appendChild(script);

    // cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [lat, lng, level]);

  return (
    <div className={`bg-gray-200 rounded-lg overflow-hidden relative ${className}`}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} className="rounded-lg" />
    </div>
  );
}
