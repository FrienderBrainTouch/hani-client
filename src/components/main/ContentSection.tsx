'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContentSection() {
  const vrContents = [
    {
      title: '환경과학',
      description: 'VR로 체험하는 환경과 생태계',
    },
    {
      title: '우주탐험',
      description: '우주의 신비를 VR로 탐험하기',
    },
    {
      title: '역사여행',
      description: '과거로 시간여행하는 VR 체험',
    },
    {
      title: '생물학',
      description: '세포와 생물의 구조를 VR로 관찰',
    },
    {
      title: '화학실험',
      description: '안전한 VR 화학실험 체험',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vrContents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vrContents.length) % vrContents.length);
  };

  const contentSections = [
    {
      id: 'education',
      title: '교육 콘텐츠 기획',
      bgColor: 'bg-gray-700',
      textColor: 'text-white',
      type: 'image',
      imageSrc: '/images/education-3d.svg',
    },
    {
      id: 'expert',
      title: '전문가 양성',
      bgColor: 'bg-green-800',
      textColor: 'text-white',
      type: 'image',
      imageSrc: '/images/professional-3d.svg',
    },
    {
      id: 'gallery',
      title: '갤러리',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      type: 'image',
      imageSrc: '/images/gallery-icon.svg',
    },
    {
      id: 'vr',
      title: 'VR 교육 콘텐츠',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
      type: 'carousel',
      carouselItems: vrContents,
    },
  ];

  const renderContent = (section: any) => {
    if (section.type === 'image') {
      return (
        <div className="flex justify-center items-center h-48">
          <Image
            src={section.imageSrc}
            alt={section.title}
            width={200}
            height={200}
            className="w-48 h-48"
          />
        </div>
      );
    } else if (section.type === 'carousel') {
      return (
        <div>
          <div className="flex justify-center items-center h-48">
            <div className="relative w-full max-w-md">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                ‹
              </button>

              <div className="mx-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {vrContents[currentSlide].title}
                  </h4>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {vrContents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <section className="bg-white">
      <div className="w-full">
        {/* 2x2 그리드 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {contentSections.map((section) => (
            <div
              key={section.id}
              className={`${
                section.bgColor
              } rounded-none p-8 min-h-96 flex flex-col justify-center items-center ${
                section.id === 'vr' ? 'border border-gray-200' : ''
              }`}
            >
              <div className="w-full">
                <h3 className={`text-2xl font-bold ${section.textColor} mb-6 text-center`}>
                  {section.title}
                </h3>
                {renderContent(section)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
