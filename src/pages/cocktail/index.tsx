import { ReactElement } from 'react';
import { Typography } from 'antd';

import AppLayout from '@/components/layout/AppLayout';
import CocktailSearch from '@/components/cocktail-filter/CocktailSearchInput';
import CockTailList from '@/components/cocktail-list/CocktailList';
import CocktailSearchFilterContainer from '@/components/cocktail-filter/CocktailSearchFilterContainer';
import Header from '@/components/layout/header/Header';

const { Text } = Typography;

const CocktailPage = (): ReactElement => {
  return (
    <AppLayout header={<Header />}>
      <>
        <Text>칵테일</Text>
        <CocktailSearch />
        <CocktailSearchFilterContainer />
        <CockTailList />
      </>
    </AppLayout>
  );
};

export default CocktailPage;
