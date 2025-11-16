'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    category: '',
    productName: '',
    quantity: '',
    budget: '',
    deliveryDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 서버로 데이터 전송
    console.log('견적 요청:', formData);
    setSubmitted(true);

    // 3초 후 폼 초기화
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        category: '',
        productName: '',
        quantity: '',
        budget: '',
        deliveryDate: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                견적 문의
              </h1>
              <p className="text-lg text-zinc-300">
                필요하신 상품 정보를 입력해주시면 24시간 이내에 최적의 견적을 제공해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg border border-zinc-200 p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                    견적 요청이 완료되었습니다!
                  </h2>
                  <p className="text-zinc-600">
                    24시간 이내에 입력하신 이메일로 견적서를 보내드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 기업 정보 */}
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
                      기업 정보
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-zinc-700 mb-2">
                          회사명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                          placeholder="(주)우씨컴퍼니"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-zinc-700 mb-2">
                          담당자명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                          placeholder="contact@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 상품 정보 */}
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
                      상품 정보
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-zinc-700 mb-2">
                          카테고리 <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors bg-white"
                        >
                          <option value="">선택해주세요</option>
                          <option value="사무용품">사무용품</option>
                          <option value="생활용품">생활용품</option>
                          <option value="산업자재">산업자재</option>
                          <option value="포장자재">포장자재</option>
                          <option value="전자제품">전자제품</option>
                          <option value="주방용품">주방용품</option>
                          <option value="청소용품">청소용품</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-zinc-700 mb-2">
                          상품명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="productName"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                          placeholder="필요하신 상품명을 입력해주세요"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-zinc-700 mb-2">
                            수량 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                            placeholder="예: 100개, 50박스"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-zinc-700 mb-2">
                            예상 예산
                          </label>
                          <input
                            type="text"
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                            placeholder="예: 100만원"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="deliveryDate" className="block text-sm font-medium text-zinc-700 mb-2">
                          희망 납품일
                        </label>
                        <input
                          type="date"
                          id="deliveryDate"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 추가 요청사항 */}
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
                      추가 요청사항
                    </h2>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                        상세 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2.5 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-colors resize-none"
                        placeholder="상품 사양, 특이사항 등 추가로 전달하실 내용을 자유롭게 입력해주세요."
                      />
                    </div>
                  </div>

                  {/* 제출 버튼 */}
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full">
                      견적 요청하기
                    </Button>
                    <p className="text-sm text-zinc-500 text-center mt-4">
                      * 표시는 필수 입력 항목입니다
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* 추가 정보 */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-zinc-200 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">빠른 응답</h3>
                <p className="text-sm text-zinc-600">24시간 이내 회신</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-zinc-200 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">정보 보호</h3>
                <p className="text-sm text-zinc-600">안전한 정보 관리</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-zinc-200 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">전문 상담</h3>
                <p className="text-sm text-zinc-600">맞춤형 솔루션 제공</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
