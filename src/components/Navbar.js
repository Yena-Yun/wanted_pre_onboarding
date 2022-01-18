import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/search_icon.svg';
import { ReactComponent as MoreBtnIcon } from 'assets/more_btn.svg';

export const Navbar = () => {
  return (
    <Mainbar>
      <MainbarNav>
        <LogoGrid>
          <LogoBox>
            <MenuBtn>
              <img src='https://static.wanted.co.kr/images/icon-menu.png' alt='hamburger-menu' />
            </MenuBtn>
            <Logo>
              <img src='img/wanted-logo.png' alt='logo' />
            </Logo>
          </LogoBox>
          <Signup>회원가입하기</Signup>
        </LogoGrid>

        <MainGrid>
          <ListBox>
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 연봉</li>
            <li>이력서</li>
            <CommunityLi>
              커뮤니티<span>New</span>
            </CommunityLi>
            <li>프리랜서</li>
            <AIBetaLi>
              AI 합격예측<span>Beta</span>
            </AIBetaLi>
          </ListBox>
          <AsideBox>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
            <SignupLogin>회원가입/로그인</SignupLogin>
            <Division></Division>
            <Dashboard>기업 서비스</Dashboard>
            <MoreBtn>
              <MoreBtnIcon />
            </MoreBtn>
          </AsideBox>
        </MainGrid>
      </MainbarNav>
    </Mainbar>
  );
};

const Mainbar = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
  margin-bottom: 40px;
`;

const MainbarNav = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoGrid = styled.div`
  display: flex;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 29px;
  margin-top: 7px;
  margin-left: -15px;
`;

const Logo = styled.div`
  width: 90px;
  height: 22px;
  margin-top: -5px;
  margin-left: 2px;
`;

const Signup = styled.button`
  color: #36f;
  font-size: 14px;
  line-height: 32px;
  height: 34px;
  border: 1px solid #36f;
  border-radius: 17px;
  padding: 0 14px;
`;

const MainGrid = styled.div`
  display: flex;
`;

const ListBox = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    position: relative;
  }
`;

const CommunityLi = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  position: relative;

  & span {
    color: #225fec;
    position: absolute;
    top: 9px;
    left: 72px;
    font-size: 3px;
    font-weight: 400;
  }
`;

const AIBetaLi = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  position: relative;

  & span {
    color: #225fec;
    position: absolute;
    top: 9px;
    left: 90px;
    font-size: 3px;
    font-weight: 400;
  }
`;

const AsideBox = styled.aside`
  display: flex;
  padding: 10px 0;
`;

const SearchBtn = styled.div`
  padding: 0 5px;
  margin-top: 5px;
`;

const SignupLogin = styled.button`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  padding: 0 3px;
`;

const Division = styled.div`
  width: 1px;
  height: 10px;
  background: #e1e2e3;
  margin: 10px;
`;

const Dashboard = styled.button`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
`;

const MoreBtn = styled.button`
  padding: 0 5px 0 10px;
`;
