# ERP Client

Vite, React, TypeScript, Tailwind CSS로 구축된 ERP 클라이언트 애플리케이션입니다.

## 기술 스택

- **Vite** - 빠른 빌드 도구
- **React 19** - UI 라이브러리
- **React Router** - 클라이언트 사이드 라우팅
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **ESLint** - 코드 품질 관리

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── pages/         # 페이지 컴포넌트
├── components/    # 재사용 가능한 컴포넌트
├── layouts/      # 레이아웃 컴포넌트
├── hooks/        # 커스텀 훅
└── styles/       # 전역 스타일
```

## 개발 명령어

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 결과 미리보기
- `npm run lint` - ESLint 실행
