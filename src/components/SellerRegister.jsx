import React from 'react';

function SellerRegister() {
  return (
    <>
    <div className="SellerRegister">
      <div className="frame">
        <div className="background">
          <h1 className="title">판매자 회원가입</h1>

          <div className="input-container input_name">
            <input type="text" placeholder="store name" />
          </div>
          
          <div className="input-container input_email">
            <input type="email" placeholder="email" />
          </div>
          
          <div className="input-container input_password">
            <input type="password" placeholder="password" />
          </div>
          
          <div className="input-container input_checkpassword">
            <input type="password" placeholder="Check the password" />
          </div>

          <button className="btn_signup">회원가입</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default SellerRegister;

const styles = `
/* 판매자 회원가입 */

.SellerRegister {
  position: relative;
  width: 1440px;
  height: 2836px;
  background: #FFFFFF;
}

/* 메인페이지_배경 */

.frame {
  position: absolute;
  width: 575px;
  height: 1120px;
  left: calc(50% - 575px/2 - 2.5px);
  top: 144px;
  background: #FFFFFF;
}

/* 판매자 회원가입 */

.title {
  position: absolute;
  width: 392px;
  height: 34px;
  left: 50%;
  transform: translateX(-50%);
  top: 167px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
  color: #000000;
}

/* Input Containers */

.input-container {
  position: absolute;
  width: 476.44px;
  height: 58.89px;
  left: 50%;
  transform: translateX(-50%);
  background: #D9D9D9;
}

.input_name {
  top: 291.5px;
}

.input_email {
  top: 389.65px;
}

.input_password {
  top: 489.48px;
}

.input_checkpassword {
  top: 589px;
}

.input-container input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  background: transparent;
}

/* 회원가입 Button */

.btn_signup {
  position: absolute;
  width: 284.65px;
  height: 60px;
  left: 50%;
  transform: translateX(-50%);
  top: 704px;
  border: 2px solid #000000;
  border-radius: 30px;
  background: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  cursor: pointer;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
