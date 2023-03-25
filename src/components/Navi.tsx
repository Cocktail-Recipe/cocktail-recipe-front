import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

type LinkItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  links: LinkItem[];
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
    width: 240px;
    background-color: #333;
    color: #fff;
  }
`;

const NavbarCloseButton = styled(IconButton)`
  && {
    color: #fff;
    margin-right: 8px;
    align-self: flex-end;
  }

  &&:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavbarLinks = styled(List)`
  && .MuiListItem-root {
    color: #fff;
  }
`;

const NavbarLinkItem = styled(ListItem)`
  &&:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavbarLinkIcon = styled(ListItemIcon)`
  && {
    color: #fff;
  }
`;

const NavbarLinkText = styled(ListItemText)`
  && {
    font-size: 1rem;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ links }) => {
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
        <NavbarCloseButton onClick={handleDrawerClose}>
          <CloseIcon />
        </NavbarCloseButton>
        <NavbarLinks>
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <NavbarLinkItem button onClick={handleDrawerClose}>
                <NavbarLinkIcon>{/* Icon */}</NavbarLinkIcon>
                <NavbarLinkText primary={link.label} />
              </NavbarLinkItem>
            </Link>
          ))}
        </NavbarLinks>
      </NavbarDrawer>
    </NavbarWrapper>
  );
};

export default Navbar;
