import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Logo from "./assests/Logo.jpg";
import SearchForm from "./SearchForm";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header>
        <Div1>
          <Div2>
            <Image src={Logo} alt="로고" />
          </Div2>
          <Div3></Div3>
          <Div4>
            <Link href="/business">
              <Atag>Business</Atag>
            </Link>
          </Div4>
          <Div5>
            <Ul>
              <Li>
                <Link href="/map">
                  <Atag>지도</Atag>
                </Link>
              </Li>
              <Li>
                <Link href="/mypage/notification">
                  <Atag>알림</Atag>
                </Link>
              </Li>
              <Li>
                <Link href="/mypage/profile">
                  <Atag>내정보</Atag>
                </Link>
              </Li>
              <Li log>
                <LoginBack>
                  <Link href="/signup">
                    <Atag>로그인</Atag>
                  </Link>
                </LoginBack>
              </Li>
              <Li log>
                <LoginBack>
                  <Link href="/">
                    <Atag>회원가입</Atag>
                  </Link>
                </LoginBack>
              </Li>
            </Ul>
          </Div5>
        </Div1>
      </Header>
      <SearchForm></SearchForm>
      <div>{children}</div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const LoginBack = styled.div`
  width: 88px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #a1dbdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Atag = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;

  cursor: pointer;
`;

const Li = styled.li`
  margin-top: 12px;
  margin-left: ${(props) => (props.log ? "25px" : "50px")};
  display: inline-block;
`;

const Ul = styled.ul`
  list-style: none;
`;

// 메뉴 리스트
const Div5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 114px;
  /* background: #bbb6b6; */
  /* z-index: 76; */
`;

// 사업 신청
const Div4 = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 114px;
  /* background: #e98585; */
  z-index: 76;
`;

// 왼쪽 여백
const Div3 = styled.div`
  width: 590px;
  height: 114px;
  /* background: #8a4c4c; */
  z-index: 76;
`;

// 로고
const Div2 = styled.div`
  width: 300px;
  height: 114px;
  /* background: #bbb6b6; */
  z-index: 76;

  cursor: pointer;
`;

const Div1 = styled.div`
  /* 헤더 센터 */
  /* width: 1491px; */
  height: 114px;
  display: flex;
  /* background: #f2b5b5; */
  z-index: 75;
`;

const Header = styled.header`
  flex-direction: column;
  display: flex;
  justify-content: center;
  /* width: 1920px; */
  height: 164px;
  /* background: #d9d9d9; */
  z-index: 74;
`;
