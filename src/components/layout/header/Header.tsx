import { Layout } from 'antd';
import { ReactElement, useCallback } from 'react';
import { Typography } from 'antd';
import { useSetRecoilState } from 'recoil';
import { BellOutlined } from '@ant-design/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SocialLoginDrawer from '@/components/social-login/social-login-drawer/SocialLoginDrawer';
import { isNavDrawerOpen, isSocialLoginDrawerOpen } from '@/states/drawer/drawer.state';
import NavDrawer from '../nav-drawer/NavDrawer';

import { StyledHeader } from './Header.styled';

const Header = (): ReactElement => {
  const setIsNavDrawerVisible = useSetRecoilState(isNavDrawerOpen);
  const setIsSocialLoginDrawerVisible = useSetRecoilState(isSocialLoginDrawerOpen);

  const toggleDrawerOpen = useCallback(() => {
    setIsNavDrawerVisible((isVisible) => !isVisible);
  }, [setIsNavDrawerVisible]);

  const onCloseNavDrawer = useCallback(() => {
    setIsNavDrawerVisible(false);
  }, [setIsNavDrawerVisible]);

  const onCloseSocialLoginDrawer = useCallback(() => {
    setIsSocialLoginDrawerVisible(false);
    setIsNavDrawerVisible(true);
  }, [setIsNavDrawerVisible, setIsSocialLoginDrawerVisible]);

  const onOpenSocialLoginDrawer = useCallback(() => {
    setIsNavDrawerVisible(false);
    setIsSocialLoginDrawerVisible(true);
  }, [setIsNavDrawerVisible, setIsSocialLoginDrawerVisible]);

  return (
    <>
      <StyledHeader>
        <Layout.Header>
          <Typography.Text>칵테일</Typography.Text>
          <BellOutlined />
          <MenuIcon onClick={toggleDrawerOpen} />
        </Layout.Header>
      </StyledHeader>
      <NavDrawer onCloseDrawer={onCloseNavDrawer} onOpenSocialLoginDrawer={onOpenSocialLoginDrawer} />
      <SocialLoginDrawer onCloseDrawer={onCloseSocialLoginDrawer} />
    </>
  );
};

export default Header;
