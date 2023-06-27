import { Layout } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from '../nav-drawer/NavDrawer';

import { StyledHeader } from './Header.styled';

const Header = (): ReactElement => {
  const [isNavDrawerVisible, setIsNavDrawerVisible] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsNavDrawerVisible((isVisible) => !isVisible);
  }, []);

  const onCloseNavDrawer = useCallback(() => {
    setIsNavDrawerVisible(false);
  }, []);

  return (
    <>
      <StyledHeader>
        <Layout.Header>
          <Typography.Text>칵테일</Typography.Text>
          <BellOutlined />
          <MenuIcon onClick={toggleDrawerOpen} />
        </Layout.Header>
      </StyledHeader>
      <NavDrawer isDrawerOpen={isNavDrawerVisible} onCloseDrawer={onCloseNavDrawer} />
    </>
  );
};

export default Header;
