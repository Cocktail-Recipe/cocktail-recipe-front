import { ReactElement } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/layout/header/Header';

const MessagePage = (): ReactElement => {
  return (
    <AppLayout header={<Header />}>
      <>메세지</>
    </AppLayout>
  );
};

export default MessagePage;
