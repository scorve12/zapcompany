'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '주문 및 견적',
      items: [
        {
          question: '견적은 어떻게 받을 수 있나요?',
          answer: '구매대행 문의 페이지에서 필요하신 상품 정보를 입력해주시면 24시간 이내에 이메일로 견적서를 보내드립니다.'
        },
        {
          question: '최소 주문 수량이 있나요?',
          answer: '상품에 따라 최소 주문 수량이 다를 수 있습니다. 소량 구매도 가능하니 구매대행 문의 시 원하시는 수량을 알려주시면 확인 후 안내드리겠습니다.'
        },
        {
          question: '대량 구매 시 할인이 가능한가요?',
          answer: '네, 대량 구매 시 수량에 따라 특별 할인을 제공하고 있습니다. 구매대행 문의 시 구매 수량을 알려주시면 최적의 가격을 제안해드리겠습니다.'
        }
      ]
    },
    {
      category: '배송 및 물류',
      items: [
        {
          question: '배송 기간은 얼마나 걸리나요?',
          answer: '일반적으로 주문 확정 후 3-5 영업일 내 배송됩니다. 상품과 수량, 배송 지역에 따라 차이가 있을 수 있으며, 정확한 배송 일정은 주문 시 안내드립니다.'
        },
        {
          question: '전국 배송이 가능한가요?',
          answer: '네, 전국 어디든 배송 가능합니다. 제주도 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.'
        },
        {
          question: '배송 추적이 가능한가요?',
          answer: '네, 상품 발송 시 송장번호를 이메일로 안내드리며, 택배사 홈페이지에서 실시간으로 배송 현황을 확인하실 수 있습니다.'
        }
      ]
    },
    {
      category: '결제 및 환불',
      items: [
        {
          question: '어떤 결제 방법을 사용할 수 있나요?',
          answer: '계좌이체, 카드결제, 현금영수증 발행이 가능합니다. 법인 고객의 경우 세금계산서 발행도 가능합니다.'
        },
        {
          question: '세금계산서 발행이 가능한가요?',
          answer: '네, 사업자 고객의 경우 세금계산서 발행이 가능합니다. 주문 시 사업자등록증과 세금계산서 발행 정보를 함께 보내주시면 됩니다.'
        },
        {
          question: '취소 및 환불 정책은 어떻게 되나요?',
          answer: '상품 발송 전 취소는 전액 환불 가능합니다. 배송 완료 후에는 상품 수령일로부터 7일 이내 미개봉 상품에 한해 반품 및 환불이 가능합니다.'
        }
      ]
    },
    {
      category: '상품 및 품질',
      items: [
        {
          question: '상품의 품질은 어떻게 보증되나요?',
          answer: '모든 상품은 엄격한 품질 관리 과정을 거쳐 선별됩니다. 불량품 발견 시 즉시 교환 또는 환불 처리해드립니다.'
        },
        {
          question: '샘플 제공이 가능한가요?',
          answer: '상품에 따라 샘플 제공이 가능한 경우가 있습니다. 구매대행 문의 시 샘플 요청 사항을 함께 말씀해주시면 확인 후 안내드리겠습니다.'
        },
        {
          question: '취급하지 않는 상품도 구해줄 수 있나요?',
          answer: '네, 맞춤형 소싱 서비스를 제공하고 있습니다. 필요하신 상품 정보를 알려주시면 최선을 다해 찾아드리겠습니다.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let faqIndex = 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-zinc-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                자주 묻는 질문
              </h1>
              <p className="text-lg text-zinc-300">
                고객님들이 자주 문의하시는 내용을 모았습니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6 pb-3 border-b-2 border-zinc-900">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((faq) => {
                      const currentIndex = faqIndex++;
                      return (
                        <div
                          key={currentIndex}
                          className="border border-zinc-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(currentIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
                          >
                            <span className="font-semibold text-zinc-900 pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform ${
                                openIndex === currentIndex ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {openIndex === currentIndex && (
                            <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200">
                              <p className="text-zinc-600">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-zinc-900 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                찾으시는 답변이 없으신가요?
              </h3>
              <p className="text-zinc-300 mb-6">
                문의하기를 통해 직접 질문해주시면 빠르게 답변드리겠습니다.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-900 bg-white rounded-md hover:bg-zinc-100 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
