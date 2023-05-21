import { ReactElement } from 'react';
import { Layout } from 'antd';
import React from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

interface AppLayoutProps {
  children: JSX.Element;
  header: JSX.Element;
  style?: any;
}

const AppLayout = ({ children, header, style }: AppLayoutProps): ReactElement => {
  return (
    <Layout>
      {header}
      {/* TODO: 컴포넌트 style들 마크업 수정시 변경 */}
      <Layout.Content style={style || { height: 'calc(100vh - 130px' }}>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default React.memo(AppLayout);
