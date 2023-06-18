import { ReactElement } from 'react';
import { Layout } from 'antd';
import React from 'react';

import Footer from './footer/Footer';
import { StyledAppLayout } from './AppLayout.styled';

interface AppLayoutProps {
  children: JSX.Element;
  header: JSX.Element;
  style?: any;
}

const AppLayout = ({ children, header, style }: AppLayoutProps): ReactElement => {
  return (
    <StyledAppLayout>
      <Layout>
        {header}
        {/* TODO: 컴포넌트 style들 마크업 수정시 변경 */}
        <Layout.Content style={style || { height: 'calc(100vh - 170px)' }}>{children}</Layout.Content>
        <Footer />
      </Layout>
    </StyledAppLayout>
  );
};

export default React.memo(AppLayout);
