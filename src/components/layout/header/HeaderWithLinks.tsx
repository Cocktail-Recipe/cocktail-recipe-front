import { Layout } from 'antd';
import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header.styled';

interface HeaderWithlinksProps {
  title?: string;
  backLink?: JSX.Element;
  nextLink?: JSX.Element;
}

const HeaderWithlinks = ({ title, backLink, nextLink }: HeaderWithlinksProps): ReactElement => {
  return (
    <StyledHeader>
      <Layout.Header>
        {backLink}
        {title}
        {nextLink}
      </Layout.Header>
    </StyledHeader>
  );
};

export default React.memo(HeaderWithlinks);
