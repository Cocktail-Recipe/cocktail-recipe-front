import { ReactElement } from 'react';
import { Layout } from 'antd';
import React from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps): ReactElement => {
  return (
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default React.memo(AppLayout);
