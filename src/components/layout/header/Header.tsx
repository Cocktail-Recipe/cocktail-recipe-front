import { Layout } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { Typography } from 'antd';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';

import { StyledHeader } from './Header.styled';

const Header = (): ReactElement => {
  const [isNavDrawerVisible, setIsNavDrawerVisible] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsNavDrawerVisible((isVisible) => !isVisible);
  }, []);

  return (
    <>
      <StyledHeader>
        <Layout.Header>
          <MenuIcon onClick={toggleDrawerOpen} />
          <Typography.Text>Cocktail App</Typography.Text>
          <Search />
        </Layout.Header>
      </StyledHeader>
    </>
  );
};

export default Header;
