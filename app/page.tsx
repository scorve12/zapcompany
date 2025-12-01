import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              믿을 수 있는
              <br />
              도소매 파트너
            </h1>
            <p className="text-lg md:text-xl text-zinc-100 mb-8 drop-shadow-md">
              다양한 상품을 경쟁력 있는 가격으로 제공합니다.
              <br />
              빠른 견적 문의로 시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/estimate">
                <Button size="lg" className="w-full sm:w-auto">
                  견적 문의하기
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  상품 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 특장점 Section */}
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              왜 우리를 선택해야 할까요?
            </h2>
            <p className="text-lg text-zinc-600">
              고객의 성공이 우리의 성공입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors">
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                빠른 응대
              </h3>
              <p className="text-zinc-600">
                24시간 이내 견적 회신으로 빠른 비즈니스 결정을 도와드립니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors">
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                품질 보증
              </h3>
              <p className="text-zinc-600">
                엄격한 품질 관리를 통해 최상의 상품만을 제공합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors">
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                경쟁력 있는 가격
              </h3>
              <p className="text-zinc-600">
                직접 소싱과 대량 구매로 최적의 가격을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 카테고리 Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              주요 취급 품목
            </h2>
            <p className="text-lg text-zinc-600">
              다양한 카테고리의 상품을 취급합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: '사무용품', icon: '📋' },
              { name: '생활용품', icon: '🏠' },
              { name: '산업자재', icon: '🔧' },
              { name: '포장자재', icon: '📦' },
              { name: '전자제품', icon: '💻' },
              { name: '주방용품', icon: '🍴' },
              { name: '청소용품', icon: '🧹' },
              { name: '기타', icon: '✨' }
            ].map((category) => (
              <Link
                key={category.name}
                href="/products"
                className="bg-zinc-50 hover:bg-zinc-100 p-6 rounded-lg text-center transition-colors border border-zinc-200 hover:border-zinc-400"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-zinc-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 견적을 받아보세요
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            필요하신 상품과 수량을 알려주시면 24시간 이내에 최적의 견적을 제공해드립니다.
          </p>
          <Link href="/estimate">
            <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
              무료 견적 문의
            </Button>
          </Link>
        </div>
      </section>

      {/* 신뢰 지표 Section */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">100+</div>
              <div className="text-zinc-600">거래 기업</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">1,000+</div>
              <div className="text-zinc-600">취급 상품</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">98%</div>
              <div className="text-zinc-600">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">24H</div>
              <div className="text-zinc-600">견적 응답 시간</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
