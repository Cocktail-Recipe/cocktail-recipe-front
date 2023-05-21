import { Layout } from 'antd';
import { ReactElement, useCallback } from 'react';
import { StyledHeader } from './Header.styled';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

const HeaderWithBacklink = (): ReactElement => {
  const router = useRouter();
  const onClickBacklink = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <StyledHeader>
      <Layout.Header>
        <ArrowLeftOutlined onClick={onClickBacklink} />
      </Layout.Header>
    </StyledHeader>
  );
};

export default HeaderWithBacklink;
