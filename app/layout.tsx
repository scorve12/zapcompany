import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-noto-serif',
});

export const metadata: Metadata = {
  title: "ZapCompany - 믿을 수 있는 구매대행 서비스 파트너",
  description: "다양한 상품을 경쟁력 있는 가격으로 제공하는 구매대행 서비스 전문 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSerifKR.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
