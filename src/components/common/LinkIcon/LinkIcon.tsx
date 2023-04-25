import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import SvgIcon from '@/types/material';

import { StyledLinkIcon } from './LinkIcon.styled';

interface LinkIconProps {
  url?: string;
  name: string | number;
  icon: typeof SvgIcon;
  isColumnAligned?: boolean;
}

const LinkIcon = ({ url, name, icon, isColumnAligned = false }: LinkIconProps): ReactElement => {
  const router = useRouter();

  const onClickLinkIcon = useCallback(() => {
    url && router.push(url);
  }, [router, url]);

  return (
    <StyledLinkIcon
      className={isColumnAligned ? 'column-aligned-nav-links' : 'row-aligned-nav-links'}
      onClick={onClickLinkIcon}
    >
      {icon}
      <div>{name}</div>
    </StyledLinkIcon>
  );
};

export default React.memo(LinkIcon);
