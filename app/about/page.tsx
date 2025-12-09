import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                회사 소개
              </h1>
              <p className="text-lg text-zinc-300">
                신뢰와 품질을 최우선으로 생각하는 구매대행 서비스 전문 기업입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  믿을 수 있는 파트너,
                  <br />
                  ZapCompany
                </h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    잽컴퍼니는 2025년 설립 이래 고객 중심의 서비스와 투명한 거래를 통해
                    신뢰 관계를 구축해가고 있습니다.
                  </p>
                  <p>
                    다양한 산업 분야의 구매대행 서비스 경험을 바탕으로 최적의 솔루션을 제공하며,
                    고객의 성공이 곧 우리의 성공이라는 믿음으로 함께 성장하고 있습니다.
                  </p>
                  <p>
                    엄격한 품질 관리와 경쟁력 있는 가격, 그리고 신속한 대응으로
                    고객 만족도 98%를 달성하고 있습니다.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-100 aspect-video rounded-lg flex items-center justify-center text-6xl">
                🏢
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                핵심 가치
              </h2>
              <p className="text-lg text-zinc-600">
                우리가 추구하는 가치
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-zinc-200">
                <div className="w-16 h-16 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">신뢰</h3>
                <p className="text-zinc-600">
                  투명한 거래와 정직한 소통으로 고객과의 신뢰를 최우선으로 합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-zinc-200">
                <div className="w-16 h-16 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">품질</h3>
                <p className="text-zinc-600">
                  엄격한 품질 관리를 통해 최상의 상품만을 선별하여 제공합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-zinc-200">
                <div className="w-16 h-16 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">신속</h3>
                <p className="text-zinc-600">
                  빠른 응대와 효율적인 프로세스로 고객의 시간을 아껴드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                주요 사업 분야
              </h2>
              <p className="text-lg text-zinc-600">
                다양한 분야의 전문성을 갖추고 있습니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-zinc-200 rounded-lg p-8 hover:border-zinc-400 transition-colors">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">B2B 구매대행 서비스</h3>
                <p className="text-zinc-600 mb-4">
                  기업 고객을 대상으로 대량 구매를 지원하며, 장기 거래 시 특별 할인과
                  맞춤형 서비스를 제공합니다.
                </p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    대량 구매 특별 할인
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    정기 배송 서비스
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    전담 매니저 배정
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-200 rounded-lg p-8 hover:border-zinc-400 transition-colors">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">B2C 소매</h3>
                <p className="text-zinc-600 mb-4">
                  개인 사업자와 소규모 기업을 위한 유연한 주문 옵션과
                  합리적인 가격을 제공합니다.
                </p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    소량 구매 가능
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    빠른 배송
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    온라인 견적 시스템
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-200 rounded-lg p-8 hover:border-zinc-400 transition-colors">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">맞춤형 소싱</h3>
                <p className="text-zinc-600 mb-4">
                  특정 상품이나 사양을 찾고 계신가요? 전문 팀이 최적의 솔루션을
                  찾아드립니다.
                </p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    맞춤 상품 발굴
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    해외 소싱 지원
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    품질 검증 서비스
                  </li>
                </ul>
              </div>

              <div className="border border-zinc-200 rounded-lg p-8 hover:border-zinc-400 transition-colors">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">물류 솔루션</h3>
                <p className="text-zinc-600 mb-4">
                  효율적인 물류 시스템으로 배송부터 재고 관리까지
                  토탈 솔루션을 제공합니다.
                </p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    전국 배송 네트워크
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    창고 보관 서비스
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-zinc-900 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    재고 관리 시스템
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                회사 정보
              </h2>
            </div>

            <div className="bg-white rounded-lg border border-zinc-200 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">상호명</h3>
                  <p className="text-zinc-600 mb-6">잽컴퍼니 (ZapCompany)</p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">성명</h3>
                  <p className="text-zinc-600 mb-6">안재빈</p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">개업일자</h3>
                  <p className="text-zinc-600 mb-6">2025년 10월 28일</p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">사업자등록번호</h3>
                  <p className="text-zinc-600">000-00-00000</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">사업장 소재지</h3>
                  <p className="text-zinc-600 mb-6">
                    광주광역시 동구 지산로57번길 5-4,<br />
                    201호(지산동)
                  </p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">대표전화</h3>
                  <p className="text-zinc-600 mb-6">010-7437-1240</p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">이메일</h3>
                  <p className="text-zinc-600 mb-6">whyda122416@gmail.com</p>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">업무시간</h3>
                  <p className="text-zinc-600">
                    평일 09:00 - 18:00<br />
                    (토/일/공휴일 휴무)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              함께 성장할 파트너를 찾고 있습니다
            </h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              잽컴퍼니와 함께 비즈니스를 성장시켜보세요.
            </p>
            <Link href="/estimate">
              <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                지금 문의하기
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
