import { ReactElement } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/header/Header';

const MyPage = (): ReactElement => {
  return (
    <AppLayout header={<Header />}>
      <>마이페이지</>
    </AppLayout>
  );
};

export default MyPage;
