# ERP Client

Next.js, TypeScript, Tailwind CSS로 구축된 ERP 클라이언트 애플리케이션입니다.

## 기술 스택

- **Next.js 15** - React 프레임워크
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

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/           # Next.js App Router
├── components/    # 재사용 가능한 컴포넌트
├── lib/          # 유틸리티 함수
└── types/        # TypeScript 타입 정의
```

## 개발 명령어

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 시작
- `npm run lint` - ESLint 실행
