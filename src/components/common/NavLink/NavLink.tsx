import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import LinkIcon from '@/types/material';

import { StyledNavLink } from './NavLink.styled';

interface NavLinkProps {
  url: string;
  name: string;
  icon: typeof LinkIcon;
  isColumnAligned?: boolean;
}

const NavLink = ({ url, name, icon, isColumnAligned = false }: NavLinkProps): ReactElement => {
  const router = useRouter();

  const onClickNavLink = useCallback(() => {
    router.push(url);
  }, [router, url]);

  return (
    <StyledNavLink
      className={isColumnAligned ? 'column-aligned-nav-links' : 'row-aligned-nav-links'}
      onClick={onClickNavLink}
    >
      {icon}
      <div>{name}</div>
    </StyledNavLink>
  );
};

export default React.memo(NavLink);
