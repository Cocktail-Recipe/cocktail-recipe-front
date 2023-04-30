import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';

import { StyledTextIcon } from './TextIcon.styled';

interface TextIconProps {
  url?: string;
  name: string | number;
  icon: any;
  isColumnAligned?: boolean;
}

const TextIcon = ({ url, name, icon, isColumnAligned = false }: TextIconProps): ReactElement => {
  const router = useRouter();

  const onClickTextIcon = useCallback(() => {
    url && router.push(url);
  }, [router, url]);

  return (
    <StyledTextIcon
      className={isColumnAligned ? 'column-aligned-nav-links' : 'row-aligned-nav-links'}
      onClick={onClickTextIcon}
    >
      {icon}
      <div>{name}</div>
    </StyledTextIcon>
  );
};

export default React.memo(TextIcon);
