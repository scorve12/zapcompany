import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                이용약관
              </h1>
              <p className="text-lg text-zinc-300">
                ZapCompany 서비스 이용약관입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none">
              <div className="mb-8">
                <p className="text-sm text-zinc-500">최종 업데이트: 2025년 10월 28일</p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제1조 (목적)</h2>
                  <p className="text-zinc-600 leading-relaxed">
                    본 약관은 잽컴퍼니(이하 "회사"라 함)가 제공하는 도소매 서비스(이하 "서비스"라 함)의 이용과 관련하여
                    회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제2조 (정의)</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>"서비스"라 함은 회사가 제공하는 모든 도소매 관련 서비스를 의미합니다.</li>
                    <li>"이용자"라 함은 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 말합니다.</li>
                    <li>"견적"이라 함은 이용자의 요청에 따라 회사가 제공하는 상품 가격 및 조건 제안을 의미합니다.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제3조 (약관의 게시와 개정)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 웹사이트에 게시합니다.</li>
                    <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
                    <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 웹사이트에 그 적용일자 7일 이전부터 공지합니다.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제4조 (서비스의 제공)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>회사는 다음과 같은 서비스를 제공합니다:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>도소매 상품 견적 제공</li>
                        <li>상품 주문 및 배송 서비스</li>
                        <li>기타 회사가 정하는 서비스</li>
                      </ul>
                    </li>
                    <li>회사는 서비스의 품질 향상을 위해 서비스의 내용을 변경할 수 있습니다.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제5조 (주문 및 계약의 성립)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>이용자는 회사가 제공하는 절차에 따라 견적을 요청할 수 있습니다.</li>
                    <li>회사가 견적을 제시하고 이용자가 이를 승인한 경우 계약이 성립됩니다.</li>
                    <li>회사는 다음 각 호에 해당하는 경우 승인을 거부하거나 승인을 유보할 수 있습니다:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                        <li>허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우</li>
                        <li>기타 승인이 부적절하다고 판단되는 경우</li>
                      </ul>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제6조 (결제 및 배송)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>상품의 결제는 계좌이체, 카드결제 등 회사가 정하는 방법으로 할 수 있습니다.</li>
                    <li>회사는 결제 확인 후 신속하게 상품을 배송합니다.</li>
                    <li>배송 기간은 상품과 수량에 따라 달라질 수 있으며, 정확한 배송 일정은 주문 시 안내됩니다.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제7조 (취소 및 환불)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>이용자는 상품 발송 전까지 주문을 취소할 수 있습니다.</li>
                    <li>배송 완료 후에는 상품 수령일로부터 7일 이내 미개봉 상품에 한해 반품 및 환불이 가능합니다.</li>
                    <li>다음 각 호의 경우에는 반품 및 환불이 제한될 수 있습니다:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>이용자의 책임 있는 사유로 상품이 멸실 또는 훼손된 경우</li>
                        <li>이용자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</li>
                        <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한 경우</li>
                      </ul>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제8조 (면책조항)</h2>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.</li>
                    <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">제9조 (분쟁해결)</h2>
                  <p className="text-zinc-600 leading-relaxed">
                    본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
                    서비스 이용과 관련하여 발생한 분쟁에 대해서는 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
                  </p>
                </section>

                <section className="border-t border-zinc-200 pt-8 mt-12">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">부칙</h2>
                  <p className="text-zinc-600">본 약관은 2025년 10월 28일부터 시행됩니다.</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
