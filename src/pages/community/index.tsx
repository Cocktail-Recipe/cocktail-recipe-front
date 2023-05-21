import { ReactElement } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/header/Header';

const CommunityPage = (): ReactElement => {
  return (
    <AppLayout header={<Header />}>
      <>커뮤니티</>
    </AppLayout>
  );
};

export default CommunityPage;
