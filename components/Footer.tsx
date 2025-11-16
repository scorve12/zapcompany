import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">WOOCI</h3>
            <p className="text-sm text-zinc-400 mb-4">
              믿을 수 있는 도소매 파트너
            </p>
            <div className="space-y-2 text-sm">
              <p>대표: 홍길동</p>
              <p>사업자등록번호: 000-00-00000</p>
              <p>주소: 서울특별시 강남구 테헤란로 123</p>
              <p>이메일: contact@wooci.com</p>
              <p>전화: 02-1234-5678</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  상품 카탈로그
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-white transition-colors">
                  견적 문의
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} WOOCI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
