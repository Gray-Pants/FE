import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 15px;
  background-color: #fff;
  width: 400px;
  height: 40px;
`;

const OrderButton = styled.button`
  background-color: #f4975c;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  transition: all 0.3s ease; /* 모든 속성에 대한 부드러운 전환 효과 */

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
    color: #fff;
  }
`;

const ButtonText = styled.span`
  display: inline-block; // 텍스트를 블록 요소처럼 취급하여 width, height 설정 가능
  width: auto;
  height: auto;
  transition: all 0.3s ease; // 텍스트 변화에 대한 부드러운 전환 효과
`;

function OrderFooter({ totalPrice }) {
  const [isHovered, setIsHovered] = useState(false);
  const [localTotalPrice, setLocalTotalPrice] = useState(totalPrice);

  const [isImpLoaded, setIsImpLoaded] = useState(false); // 스크립트 로딩 상태 추가

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    script.async = true;
    script.onload = () => {
      setIsImpLoaded(true); // 스크립트 로딩 완료 시 상태 변경
      const { IMP } = window;
      IMP.init("imp76724406"); // 아임포트 가맹점 식별 코드
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 비동기 requestPay 함수 (async/await 사용)
  const requestPay = async () => {
    if (!isImpLoaded) {
      // 아직 로딩 중이면 대기
      await new Promise((resolve) => setTimeout(resolve, 100)); // 짧은 지연 추가
      return requestPay(); // 재귀적으로 다시 호출
    }

    if (typeof window.IMP !== "undefined") {
      IMP.request_pay(
        {
          pg: "uplus",
          merchant_uid: `order_${Date.now()}`, // 고유한 주문 번호 생성 (예시)
          name: "나이키 와플 트레이너 2 SD",
          pay_method: "card",
          escrow: false,
          amount: totalPrice,
          // ... (나머지 결제 정보)
          customer_uid: "user_12345", // 사용자 ID를 customer_uid로 사용
          customer_id: "test@example.com", // 이메일 주소를 customer_id로 사용
          buyer_name: "홍길동",
          buyer_email: "buyer@example.com",
          buyer_tel: "02-1670-5176",
          buyer_addr: "성수이로 20길 16",
          buyer_postcode: "04783",
          m_redirect_url: "https://helloworld.com/payments/result", // 모바일 환경에서 필수 입력
          notice_url: "https://helloworld.com/api/v1/payments/notice",
          confirm_url: "https://helloworld.com/api/v1/payments/confirm",
          currency: "KRW",
          locale: "ko",
          custom_data: { userId: 30930 },
          display: { card_quota: [0, 6], only_installment: true },
          appCard: false,
          useCardPoint: false,
          bypass: {
            tosspayments: {
              useInternationalCardOnly: false, // 영어 결제창 활성화
            },
          },
        },
        function (rsp) {
          if (rsp.success) {
            // 결제 성공 시 로직
            console.log("결제 성공:", rsp);
            // ...
          } else {
            // 결제 실패 시 로직
            console.log("결제 실패:", rsp);
            // ...
          }
        }
      );
    } else {
      alert("결제 모듈 로딩 실패"); // IMP 객체가 없을 경우 에러 처리
    }
  };

  return (
    <OrderButtonContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OrderButton onClick={requestPay} disabled={!isImpLoaded}>
        <ButtonText>
          {isHovered
            ? `총 상품금액 ${totalPrice.toLocaleString()}원 결제하기`
            : "주문하기"}
        </ButtonText>
      </OrderButton>
    </OrderButtonContainer>
  );
}

export default OrderFooter;
