import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                문의하기
              </h1>
              <p className="text-lg text-zinc-300">
                궁금하신 사항이 있으시면 언제든지 연락주세요.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                  연락처 정보
                </h2>

                <div className="space-y-6">
                  {/* 주소 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-zinc-900 mb-1">주소</h3>
                      <p className="text-zinc-600">
                        광주광역시 동구 지산로57번길 5-4,<br />
                        201호(지산동)
                      </p>
                    </div>
                  </div>

                  {/* 전화 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-zinc-900 mb-1">전화</h3>
                      <p className="text-zinc-600">02-1234-5678</p>
                    </div>
                  </div>

                  {/* 이메일 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-zinc-900 mb-1">이메일</h3>
                      <p className="text-zinc-600">whyda122416@gmail.com</p>
                    </div>
                  </div>

                  {/* 업무시간 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-zinc-900 mb-1">업무시간</h3>
                      <p className="text-zinc-600">
                        평일 09:00 - 18:00<br />
                        (토/일/공휴일 휴무)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 p-6 bg-zinc-50 rounded-lg border border-zinc-200">
                  <h3 className="font-semibold text-zinc-900 mb-4">빠른 문의</h3>
                  <p className="text-zinc-600 mb-4 text-sm">
                    상품 견적이 필요하신가요? 구매대행 문의 페이지에서 빠르게 요청하실 수 있습니다.
                  </p>
                  <Link
                    href="/estimate"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    구매대행 문의하기
                  </Link>
                </div>
              </div>

              {/* Map or Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                  오시는 길
                </h2>

                {/* Map Placeholder */}
                <div className="bg-zinc-100 rounded-lg border border-zinc-200 aspect-video flex items-center justify-center mb-6">
                  <div className="text-center text-zinc-500">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-sm">지도가 표시됩니다</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="bg-white rounded-lg border border-zinc-200 p-6">
                  <h3 className="font-semibold text-zinc-900 mb-4">찾아오시는 방법</h3>
                  <div className="space-y-3 text-sm text-zinc-600">
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">지하철</p>
                      <p>가까운 지하철역에서 도보로 이동 가능합니다.</p>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">버스</p>
                      <p>주변 버스 정류장을 이용하실 수 있습니다.</p>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 mb-1">주차</p>
                      <p>건물 내 주차 공간을 이용하실 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
