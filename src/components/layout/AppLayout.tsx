import { ReactElement } from 'react';
import { Layout } from 'antd';
import React from 'react';

import Footer from './footer/Footer';
import { StyledAppLayout } from './AppLayout.styled';

interface AppLayoutProps {
  children: JSX.Element;
  header: JSX.Element;
  className?: string;
  hasFooter?: boolean;
}

const AppLayout = ({ children, header, className, hasFooter = true }: AppLayoutProps): ReactElement => {
  return (
    <StyledAppLayout>
      <Layout className={className}>
        {header}
        <Layout.Content>{children}</Layout.Content>
        {hasFooter && <Footer />}
      </Layout>
    </StyledAppLayout>
  );
};

export default React.memo(AppLayout);
