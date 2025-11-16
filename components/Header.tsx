'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-zinc-900">
              WOOCI
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              상품 카탈로그
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              회사 소개
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
            >
              견적 문의
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:bg-zinc-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">메뉴 열기</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-zinc-200">
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              상품 카탈로그
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              회사 소개
            </Link>
            <Link
              href="/estimate"
              className="block px-3 py-2 text-base font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-md text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              견적 문의
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
