'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

// 샘플 상품 데이터
const products = [
  { id: 1, name: 'A4 복사용지 2500매', category: '사무용품', price: '18,900원', image: '📄', minOrder: '10박스' },
  { id: 2, name: '볼펜 세트 (10입)', category: '사무용품', price: '5,500원', image: '✏️', minOrder: '50세트' },
  { id: 3, name: '다목적 클리너', category: '청소용품', price: '12,000원', image: '🧴', minOrder: '20개' },
  { id: 4, name: '일회용 장갑 (100매)', category: '생활용품', price: '8,900원', image: '🧤', minOrder: '30박스' },
  { id: 5, name: '택배 박스 (대)', category: '포장자재', price: '450원', image: '📦', minOrder: '100개' },
  { id: 6, name: '에어캡 (50m)', category: '포장자재', price: '15,000원', image: '📦', minOrder: '20롤' },
  { id: 7, name: '스테인리스 수저세트', category: '주방용품', price: '3,200원', image: '🍴', minOrder: '100세트' },
  { id: 8, name: '1회용 앞치마', category: '주방용품', price: '45원', image: '👔', minOrder: '1000개' },
  { id: 9, name: 'LED 전구 (10W)', category: '전자제품', price: '2,500원', image: '💡', minOrder: '50개' },
  { id: 10, name: '멀티탭 (6구)', category: '전자제품', price: '9,800원', image: '🔌', minOrder: '30개' },
  { id: 11, name: '안전 장갑', category: '산업자재', price: '2,800원', image: '🧰', minOrder: '100켤레' },
  { id: 12, name: '공구 세트', category: '산업자재', price: '45,000원', image: '🔧', minOrder: '20세트' },
];

const categories = ['전체', '사무용품', '생활용품', '산업자재', '포장자재', '전자제품', '주방용품', '청소용품'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '전체' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                상품 카탈로그
              </h1>
              <p className="text-lg text-zinc-300">
                다양한 카테고리의 상품을 합리적인 가격으로 만나보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* 검색 */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="상품명 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-zinc-600">
                총 <span className="font-semibold text-zinc-900">{filteredProducts.length}</span>개의 상품
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg border border-zinc-200 hover:border-zinc-400 transition-all hover:shadow-lg overflow-hidden group"
                  >
                    <div className="aspect-square bg-zinc-100 flex items-center justify-center text-7xl">
                      {product.image}
                    </div>
                    <div className="p-5">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 rounded">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="mb-3">
                        <p className="text-2xl font-bold text-zinc-900">{product.price}</p>
                        <p className="text-sm text-zinc-500">최소 주문: {product.minOrder}</p>
                      </div>
                      <Link href="/estimate">
                        <Button className="w-full" variant="secondary">
                          견적 문의
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  검색 결과가 없습니다
                </h3>
                <p className="text-zinc-600">
                  다른 검색어나 카테고리를 선택해보세요.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              원하시는 상품을 찾지 못하셨나요?
            </h2>
            <p className="text-lg text-zinc-300 mb-8">
              견적 문의를 통해 필요하신 상품을 알려주세요.
            </p>
            <Link href="/estimate">
              <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                맞춤 견적 문의하기
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
