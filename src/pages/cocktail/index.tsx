import { ReactElement } from 'react';
import { Typography } from 'antd';
import { useRecoilValue } from 'recoil';

import AppLayout from '@/components/layout/AppLayout';
import CocktailSearch from '@/components/cocktail/cocktail-filter/CocktailSearchInput';
import CocktailSearchContainer from '@/components/cocktail/CocktailSearchFilterContainer';
import CockTailList from '@/components/cocktail/CocktailList';
import useCocktailList from '@/hook/useCocktailList';
import { cocktailListState } from '@/states/cocktail/cocktailList.state';

const { Text } = Typography;

const Cocktail = (): ReactElement => {
  useCocktailList();

  const cocktails = useRecoilValue(cocktailListState);

  return (
    <AppLayout>
      <>
        <Text>칵테일</Text>
        <CocktailSearch />
        <CocktailSearchContainer />
        <CockTailList cocktails={cocktails} />
      </>
    </AppLayout>
  );
};

export default Cocktail;
