import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                개인정보처리방침
              </h1>
              <p className="text-lg text-zinc-300">
                ZapCompany는 고객님의 개인정보를 소중히 다룹니다.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-zinc max-w-none">
              <div className="mb-8">
                <p className="text-sm text-zinc-500">최종 업데이트: 2025년 10월 28일</p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. 개인정보의 수집 및 이용목적</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    잽컴퍼니(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                    이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600">
                    <li>구매대행 문의 응대 및 상담</li>
                    <li>상품 주문 및 배송</li>
                    <li>서비스 제공에 관한 계약 이행 및 요금 정산</li>
                    <li>고객 문의 및 불만 처리</li>
                    <li>마케팅 및 광고 활용 (선택사항, 별도 동의 시)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. 수집하는 개인정보의 항목</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">가. 필수 수집 항목</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>회사명</li>
                        <li>담당자명</li>
                        <li>이메일 주소</li>
                        <li>전화번호</li>
                        <li>상품 정보 (카테고리, 상품명, 수량 등)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">나. 선택 수집 항목</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>예상 예산</li>
                        <li>희망 납품일</li>
                        <li>추가 요청사항</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">다. 자동 수집 항목</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>접속 IP 정보</li>
                        <li>쿠키</li>
                        <li>서비스 이용 기록</li>
                        <li>방문 일시</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. 개인정보의 보유 및 이용기간</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600">
                    <li>구매대행 문의 정보: 문의 처리 완료 후 3년</li>
                    <li>계약 및 청약철회 기록: 5년 (전자상거래법)</li>
                    <li>대금결제 및 재화 공급 기록: 5년 (전자상거래법)</li>
                    <li>소비자 불만 또는 분쟁 처리 기록: 3년 (전자상거래법)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. 개인정보의 제3자 제공</h2>
                  <p className="text-zinc-600 leading-relaxed">
                    회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며,
                    정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. 개인정보 처리의 위탁</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                  </p>
                  <div className="border border-zinc-200 rounded-lg p-4">
                    <p className="text-zinc-600 mb-2">수탁업체: 배송 업체</p>
                    <p className="text-zinc-600">위탁업무 내용: 상품 배송</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                    <li>개인정보 열람 요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제 요구</li>
                    <li>처리정지 요구</li>
                  </ol>
                  <p className="text-zinc-600 leading-relaxed mt-3">
                    권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. 개인정보의 파기</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">가. 파기절차</h3>
                      <p className="text-zinc-600 leading-relaxed">
                        이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 파기됩니다.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2">나. 파기방법</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>전자적 파일 형태: 복구 및 재생이 되지 않도록 안전하게 삭제</li>
                        <li>기록물, 인쇄물, 서면: 분쇄기로 분쇄하거나 소각</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. 개인정보 보호책임자</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
                    아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                  </p>
                  <div className="border border-zinc-200 rounded-lg p-6 bg-zinc-50">
                    <h3 className="font-semibold text-zinc-900 mb-3">개인정보 보호책임자</h3>
                    <ul className="space-y-1 text-zinc-600">
                      <li>성명: 안재빈</li>
                      <li>이메일: whyda122416@gmail.com</li>
                      <li>전화번호: 010-7437-1240</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">9. 개인정보의 안전성 확보조치</h2>
                  <p className="text-zinc-600 leading-relaxed mb-3">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600">
                    <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
                    <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
                    <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">10. 개인정보 처리방침의 변경</h2>
                  <p className="text-zinc-600 leading-relaxed">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                    변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                  </p>
                </section>

                <section className="border-t border-zinc-200 pt-8 mt-12">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">부칙</h2>
                  <p className="text-zinc-600">본 방침은 2025년 10월 28일부터 시행됩니다.</p>
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
