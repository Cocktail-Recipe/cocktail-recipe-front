import { ReactElement } from 'react';
import { Typography } from 'antd';

import AppLayout from '@/components/layout/AppLayout';
import CocktailSearch from '@/components/cocktail-filter/CocktailSearchInput';
import CockTailList from '@/components/cocktail-list/CocktailList';
import CocktailSearchFilterContainer from '@/components/cocktail-filter/CocktailSearchFilterContainer';

const { Text } = Typography;

const Cocktail = (): ReactElement => {
  return (
    <AppLayout>
      <>
        <Text>칵테일</Text>
        <CocktailSearch />
        <CocktailSearchFilterContainer />
        <CockTailList />
      </>
    </AppLayout>
  );
};

export default Cocktail;
