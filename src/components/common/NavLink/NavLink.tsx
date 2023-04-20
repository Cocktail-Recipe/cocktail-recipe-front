import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import LinkIcon from '@/types/material';

import { StyledNavLink } from './NavLink.styled';

interface NavLinkProps {
  url: string;
  name: string;
  icon: typeof LinkIcon;
}

const NavLink = ({ url, name, icon }: NavLinkProps): ReactElement => {
  const router = useRouter();

  const onClickNavLink = useCallback(() => {
    router.push(url);
  }, [router, url]);

  return (
    <StyledNavLink onClick={onClickNavLink}>
      {icon}
      <div>{name}</div>
    </StyledNavLink>
  );
};

export default React.memo(NavLink);
