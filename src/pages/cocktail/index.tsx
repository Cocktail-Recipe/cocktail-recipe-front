import { ReactElement } from 'react';

import AppLayout from '@/components/layout/AppLayout';
import CocktailSearch from '@/components/cocktail-filter/CocktailSearchInput';
import CockTailList from '@/components/cocktail-list/CocktailList';
import CocktailSearchFilterContainer from '@/components/cocktail-filter/CocktailSearchFilterContainer';
import Header from '@/components/layout/header/Header';

const CocktailPage = (): ReactElement => {
  return (
    <AppLayout header={<Header />} className="cocktail-list-page">
      <>
        <CocktailSearch />
        <CocktailSearchFilterContainer />
        <CockTailList />
      </>
    </AppLayout>
  );
};

export default CocktailPage;
