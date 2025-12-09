import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactName,
      email,
      phone,
      category,
      productName,
      quantity,
      budget,
      deliveryDate,
      message
    } = body;

    // 필수 항목 검증
    if (!companyName || !contactName || !email || !phone || !category || !productName || !quantity) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 발송
    const { data, error } = await resend.emails.send({
      from: 'ZapCompany 구매대행 문의 <noreply@produck.life>', // 인증된 도메인 사용
      to: [process.env.ADMIN_EMAIL || 'scorve5322@gmail.com'], // 관리자 이메일
      replyTo: email, // 고객 이메일로 답장 가능
      subject: `[구매대행 문의] ${companyName} - ${productName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #18181b;
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
              }
              .section {
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 6px;
                border: 1px solid #e5e7eb;
              }
              .section h2 {
                margin-top: 0;
                color: #18181b;
                font-size: 18px;
                border-bottom: 2px solid #18181b;
                padding-bottom: 10px;
              }
              .field {
                margin-bottom: 12px;
              }
              .label {
                font-weight: 600;
                color: #52525b;
                display: inline-block;
                width: 120px;
              }
              .value {
                color: #18181b;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #71717a;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">새로운 구매대행 문의</h1>
            </div>

            <div class="content">
              <div class="section">
                <h2>기업 정보</h2>
                <div class="field">
                  <span class="label">회사명:</span>
                  <span class="value">${companyName}</span>
                </div>
                <div class="field">
                  <span class="label">담당자명:</span>
                  <span class="value">${contactName}</span>
                </div>
                <div class="field">
                  <span class="label">이메일:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">연락처:</span>
                  <span class="value">${phone}</span>
                </div>
              </div>

              <div class="section">
                <h2>상품 정보</h2>
                <div class="field">
                  <span class="label">카테고리:</span>
                  <span class="value">${category}</span>
                </div>
                <div class="field">
                  <span class="label">상품명:</span>
                  <span class="value">${productName}</span>
                </div>
                <div class="field">
                  <span class="label">수량:</span>
                  <span class="value">${quantity}</span>
                </div>
                ${budget ? `
                <div class="field">
                  <span class="label">예상 예산:</span>
                  <span class="value">${budget}</span>
                </div>
                ` : ''}
                ${deliveryDate ? `
                <div class="field">
                  <span class="label">희망 납품일:</span>
                  <span class="value">${deliveryDate}</span>
                </div>
                ` : ''}
              </div>

              ${message ? `
              <div class="section">
                <h2>추가 요청사항</h2>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
              ` : ''}
            </div>

            <div class="footer">
              <p>이 메일은 ZapCompany 웹사이트의 구매대행 문의 시스템에서 자동으로 발송되었습니다.</p>
              <p>답변은 위 고객 이메일(${email})로 회신해주세요.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('이메일 발송 실패:', error);
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '구매대행 문의가 성공적으로 접수되었습니다.',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('구매대행 문의 처리 중 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
