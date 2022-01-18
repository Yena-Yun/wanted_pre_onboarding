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
            <ShownLi>홈</ShownLi>
            <ShownLi>채용</ShownLi>
            <ShownLi>이벤트</ShownLi>
            <GoneLi>직군별 연봉</GoneLi>
            <GoneLi>이력서</GoneLi>
            <CommunityLi>커뮤니티</CommunityLi>
            <GoneLi>프리랜서</GoneLi>
            <AIBetaLi>AI 합격예측</AIBetaLi>
          </ListBox>
          <AsideBox>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
            <SignupLogin>회원가입/로그인</SignupLogin>
            <Divider></Divider>
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
  background: #fff;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
  margin-bottom: 40px;

  @media ${(props) => props.theme.mediumToXXL} {
    height: 50px;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.medium} {
    height: 110px;
  }
`;

const MainbarNav = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.medium} {
    width: 975px;
    height: 110px;
    margin: 0 48px;
    flex-direction: column;
  }

  @media ${(props) => props.theme.small} {
    display: block;
    margin: 0 25px;
  }
`;

const LogoGrid = styled.div`
  display: flex;

  @media ${(props) => props.theme.medium} {
    width: 100%;
    padding: 15px 0;
    justify-content: space-between;
  } ;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 29px;
  margin-top: 7px;
  margin-left: -5px;
`;

const Logo = styled.div`
  width: 90px;
  height: 36px;
  margin-top: 0px;
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
  display: none;

  @media ${(props) => props.theme.medium} {
    display: block;
  } ;
`;

const MainGrid = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.medium} {
    width: 100%;
    justify-content: space-between;
  } ;
`;

const ListBox = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 40px 0 30px;

  @media ${(props) => props.theme.medium} {
    margin-left: 0;
  }

  & li {
    @media ${(props) => props.theme.large} {
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

const ShownLi = styled.li`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 15px;

  @media ${(props) => props.theme.medium} {
    font-size: 13px;
    font-weight: 400;
    padding: 11px 10px 19px;
  }

  @media ${(props) => props.theme.small} {
    font-size: 14px;
    font-weight: 600;
  }

  &:first-child {
    display: none;

    @media ${(props) => props.theme.small} {
      display: block;
      margin-left: -40px;
    }
  }
`;

const GoneLi = styled.li`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 15px;

  @media ${(props) => props.theme.medium} {
    font-size: 13px;
    font-weight: 400;
    padding: 11px 10px 19px;
  }

  @media ${(props) => props.theme.small} {
    display: none;
  }
`;

const CommunityLi = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  position: relative;

  @media ${(props) => props.theme.medium} {
    font-size: 13px;
    font-weight: 400;
    padding: 11px 10px 19px;
  }

  @media ${(props) => props.theme.small} {
    display: none;
  }

  &::after {
    height: 100%;
    content: 'New';
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    color: #225fec;
    position: absolute;
    top: 9px;
    left: 70px;
    font-size: 3px;
    font-weight: 400;

    @media ${(props) => props.theme.medium} {
      top: 7px;
      left: 60px;
    }
  }
`;

const AIBetaLi = styled.li`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  position: relative;

  @media ${(props) => props.theme.medium} {
    font-size: 13px;
    font-weight: 400;
    padding: 11px 10px 19px;
  }

  @media ${(props) => props.theme.small} {
    display: none;
  }

  &::after {
    height: 100%;
    content: 'Beta';
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    color: #225fec;
    position: absolute;
    top: 9px;
    left: 90px;
    font-size: 3px;
    font-weight: 400;

    @media ${(props) => props.theme.medium} {
      top: 7px;
      left: 77px;
    }
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

  @media ${(props) => props.theme.medium} {
    display: none;
  } ;
`;

const Divider = styled.div`
  width: 1px;
  height: 10px;
  background: #e1e2e3;
  margin: 10px;

  @media ${(props) => props.theme.medium} {
    display: none;
  } ;
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

  @media ${(props) => props.theme.medium} {
    display: none;
  } ;
`;

const MoreBtn = styled.button`
  padding: 0 5px 0 10px;
  display: none;

  @media ${(props) => props.theme.medium} {
    display: block;
  } ;
`;
