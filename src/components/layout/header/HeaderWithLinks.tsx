import { Layout } from 'antd';
import React, { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header.styled';

interface HeaderWithlinksProps {
  title?: string;
  nextLink?: JSX.Element;
}

const HeaderWithlinks = ({ title, nextLink }: HeaderWithlinksProps): ReactElement => {
  const router = useRouter();

  const onClickBacklink = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <StyledHeader>
      <Layout.Header>
        <ArrowLeftOutlined onClick={onClickBacklink} />
        {title}
        {nextLink}
      </Layout.Header>
    </StyledHeader>
  );
};

export default React.memo(HeaderWithlinks);
