import React, { ReactElement } from 'react';

import { StyledTextIcon } from './TextIcon.styled';

interface TextIconProps {
  name: string | number;
  icon?: any;
  className?: string;
  isColumnAligned?: boolean;
  onClick?: () => void;
}

const TextIcon = ({ name, icon, className, isColumnAligned = false, onClick }: TextIconProps): ReactElement => {
  return (
    <StyledTextIcon
      className={`${isColumnAligned ? 'column' : 'row'}` + '-aligned-nav-links' + ` ${className}`}
      onClick={onClick}
    >
      {icon}
      <div>{name}</div>
    </StyledTextIcon>
  );
};

export default React.memo(TextIcon);
