import { Drawer, IconButton } from '@material-ui/core';
import { ContactSupportOutlined, SettingsOutlined } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import React, { useState } from 'react';
import styled from 'styled-components';

type User = {
  nickname: string;
  src: string;
  alt: string;
};

type NavbarProps = {
  user: User | undefined;
};

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #000000;
  color: #fff;
`;

const NavbarTitle = styled.h1`
  font-size: 14px;
  margin-left: 12px;
`;

const NavbarMenuButton = styled(IconButton)`
  && {
    color: #fff;
    margin-right: 8px;
  }

  &&:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavbarSearchButton = styled(IconButton)`
  && {
    color: #fff;
    margin-left: auto;
  }

  &&:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavbarDrawer = styled(Drawer)`
  && .MuiDrawer-paper {
    width: 60%;
    background-color: ##efefef;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

const MenuContainer = styled.div`
  margin: 48px 24px;
`;

const WelcomeText = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

const UserContainer = styled.div`
  margin: 16px 0 80px 0;
`;

const LoginText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const NavLinkText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-left: 8px;
`;

const VersionContainer = styled.div`
  margin: 48px 24px;
`;

const VersionText = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  margin-top: 8px;

  color: #52525c;
`;

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <NavbarWrapper>
      <NavbarMenuButton onClick={handleDrawerOpen}>
        <MenuIcon />
      </NavbarMenuButton>
      <NavbarTitle>Cocktail App</NavbarTitle>
      <NavbarSearchButton>
        <Search />
      </NavbarSearchButton>

      <NavbarDrawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <MenuContainer>
          <WelcomeText>반가워요!</WelcomeText>
          <UserContainer>
            <LoginText>{'로그인 해주세요 >'}</LoginText>
          </UserContainer>
          <NavLinkWrapper>
            <SettingsOutlined style={{ width: 14, height: 14 }} />
            <NavLinkText>설정</NavLinkText>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <ContactSupportOutlined style={{ width: 14, height: 14 }} />
            <NavLinkText>문의하기</NavLinkText>
          </NavLinkWrapper>
        </MenuContainer>
        <VersionContainer>
          <VersionText>어플리케이션 버전 v 1.00</VersionText>
          <VersionText>팀명</VersionText>
        </VersionContainer>
      </NavbarDrawer>
    </NavbarWrapper>
  );
};

export default Navbar;
