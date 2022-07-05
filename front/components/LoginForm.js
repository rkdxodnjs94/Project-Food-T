import React from "react";
import styled from "styled-components";
import ModalCard from "./UI/ModalCard";
import Image from "next/image";
import ModalLogo from "./assests/ModalLogo.png";
import SimpleLine from "./assests/SimpleLine.png";

const LoginForm = () => {
  //   const navigate = useNavigate();

  return (
    <LoginDiv>
      <ModalCard>
        <MainDiv>
          <HeaderDiv>
            <Image src={ModalLogo} alt="로고" />
          </HeaderDiv>
          <InputDiv>
            <InputId />
            <InputPw />
          </InputDiv>
          <LoginButtonDiv>
            <LoginButton type="primary" htmlType="submit">
              <LoginText>로그인</LoginText>
            </LoginButton>
          </LoginButtonDiv>
          <FindDiv>
            <Ul>
              <li>
                <FindText>비밀번호 찾기</FindText>
              </li>
              <li>
                <FindText>회원가입</FindText>
              </li>
            </Ul>
          </FindDiv>
          <MainSimpleLoginDiv>
            <ImageIndex src={SimpleLine} alt="라인" />
            <SimpleLoginDiv>
              <TextSimple>간편로그인</TextSimple>
            </SimpleLoginDiv>
            <ImageIndex src={SimpleLine} alt="라인" />
          </MainSimpleLoginDiv>
        </MainDiv>
      </ModalCard>
    </LoginDiv>
  );
};

export default LoginForm;

const ImageIndex = styled(Image)`
  z-index: 70;
`;

const SimpleLoginDiv = styled.div`
  display: flex;
  align-items: center;

  width: 68px;
  height: 26px;

  /* background: #d9d9d9; */
`;

const TextSimple = styled.text`
  width: 84px;
  height: 18px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #868484;
`;

const MainSimpleLoginDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 501px;
  height: 24px;

  /* background: #fc9f9f; */
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const FindText = styled.text`
  /* 비밀번호 찾기 */
  width: 82px;
  height: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  text-decoration-line: underline;

  color: #868484;
`;

const FindDiv = styled.div`
  width: 501px;
  height: 30px;
  /* background: #ffffff; */
`;

const LoginText = styled.text`
  width: 96px;
  height: 36px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;

  color: #e0fdd3;
`;

const LoginButton = styled.button`
  box-sizing: border-box;

  width: 344px;
  height: 67px;

  background: #1ab095;
  border: 1px solid #3c6c64;
`;

const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 82px;

  /* background: #b34d4d; */
`;

const InputPw = styled.input`
  margin-top: 10px;
  width: 500px;
  height: 40px;

  /* background: #ffffff; */
`;
const InputId = styled.input`
  width: 500px;
  height: 40px;

  /* background: #ffffff; */
`;

const InputDiv = styled.div`
  display: block;
  width: 500px;
  height: 95px;
  /* background: #9f7676; */
`;

const HeaderDiv = styled.div`
  width: 500px;
  height: 121px;
  /* background: #de8e8e; */
`;

const MainDiv = styled.div`
  margin: auto;
  width: 500px;
  height: 531px;

  /* background: #d9d9d9; */

  z-index: 80;
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
`;
