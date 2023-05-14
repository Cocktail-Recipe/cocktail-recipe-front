import { ReactElement } from 'react';
import { Typography } from 'antd';

import AppLayout from '@/components/layout/AppLayout';
import CocktailSearch from '@/components/cocktail/CocktailSearch';
import CocktailSearchFilters from '@/components/cocktail/CocktailSearchFilters';
import CockTailList from '@/components/cocktail/CocktailList';

const { Text } = Typography;

const Cocktail = (): ReactElement => {
  return (
    <AppLayout>
      <>
        <Text>칵테일</Text>
        <CocktailSearch />
        <CocktailSearchFilters />
        <CockTailList />
      </>
    </AppLayout>
  );
};

export default Cocktail;
