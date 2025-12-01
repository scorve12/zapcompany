# WOOCI - 도소매 플랫폼

품고(Poomgo)를 참고하여 제작한 물건 도소매 웹사이트입니다. 무채색을 사용한 세련되고 믿음직한 디자인으로, 견적 문의 기능을 중심으로 설계되었습니다.

## 주요 기능

- **메인 페이지**: 회사 소개, 특장점, 주요 카테고리, 신뢰 지표
- **견적 문의**: 상세한 폼을 통한 견적 요청 시스템
- **상품 카탈로그**: 카테고리별 필터링 및 검색 기능
- **회사 소개**: 핵심 가치, 사업 분야, 회사 정보

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI**: React 19

## 프로젝트 구조

```
wooci/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── estimate/
│   │   └── page.tsx          # 견적 문의 페이지
│   ├── products/
│   │   └── page.tsx          # 상품 카탈로그 페이지
│   └── about/
│       └── page.tsx          # 회사 소개 페이지
├── components/
│   ├── Header.tsx            # 공용 헤더 컴포넌트
│   ├── Footer.tsx            # 공용 푸터 컴포넌트
│   └── Button.tsx            # 공용 버튼 컴포넌트
└── public/                   # 정적 파일
```

## 시작하기

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
npm run start
```

## 디자인 특징

### 무채색 컬러 팔레트

- **Primary**: Zinc-900 (검정에 가까운 진한 회색)
- **Background**: White, Zinc-50
- **Text**: Zinc-900, Zinc-700, Zinc-600
- **Border**: Zinc-200, Zinc-300

### 반응형 디자인

- 모바일 우선 접근 방식
- Tailwind CSS의 브레이크포인트 활용 (sm, md, lg, xl)
- 햄버거 메뉴를 통한 모바일 네비게이션

### 사용자 경험

- 명확한 Call-to-Action 버튼
- 직관적인 네비게이션
- 빠른 로딩 속도 (정적 생성)
- 접근성을 고려한 시맨틱 HTML

## 견적 문의 시스템

견적 문의 페이지는 다음 정보를 수집합니다:

**기업 정보**
- 회사명
- 담당자명
- 이메일
- 연락처

**상품 정보**
- 카테고리
- 상품명
- 수량
- 예상 예산
- 희망 납품일

**추가 요청사항**
- 상세 내용 (자유 입력)

## 향후 개선 사항

### 백엔드 연동
- [ ] 견적 문의 폼 데이터 저장
- [ ] 이메일 알림 시스템
- [ ] 관리자 대시보드

### 상품 관리
- [ ] 상품 상세 페이지
- [ ] 실제 상품 데이터베이스 연동
- [ ] 이미지 업로드 시스템
- [ ] 재고 관리

### 사용자 기능
- [ ] 회원가입/로그인
- [ ] 견적 이력 조회
- [ ] 찜하기 기능
- [ ] 장바구니

### 추가 페이지
- [ ] FAQ 페이지
- [ ] 문의하기 페이지
- [ ] 이용약관 페이지
- [ ] 개인정보처리방침 페이지

## 유지보수 가이드

### 컴포넌트 재사용

공용 컴포넌트([Header.tsx](components/Header.tsx), [Footer.tsx](components/Footer.tsx), [Button.tsx](components/Button.tsx))를 활용하여 일관된 UI를 유지하세요.

### 색상 변경

무채색 팔레트를 변경하려면 Tailwind CSS 설정에서 `zinc` 색상을 다른 회색 계열(`gray`, `slate`, `neutral` 등)로 교체할 수 있습니다.

### 새 페이지 추가

```bash
# app 디렉토리 내에 새 폴더 생성
mkdir app/새페이지명
# page.tsx 파일 생성
touch app/새페이지명/page.tsx
```

Header 컴포넌트의 네비게이션에 링크를 추가하는 것을 잊지 마세요.

## 라이선스

MIT

## 문의

프로젝트에 대한 문의사항이 있으시면 whyda122416@gmail.com으로 연락주세요.
