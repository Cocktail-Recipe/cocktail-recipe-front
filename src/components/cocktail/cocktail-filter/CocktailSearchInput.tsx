import { ReactElement, useCallback } from 'react';
import { Input } from 'antd';
import { useSetRecoilState } from 'recoil';
import { cocktailSearchQueryState } from '@/states/cocktail/cocktailSearchRequest.state';

const { Search } = Input;

const CocktailSearchInput = (): ReactElement => {
  const setCocktailSearchQuery = useSetRecoilState(cocktailSearchQueryState);

  const onSearchCocktail = useCallback(
    (query: string) => {
      setCocktailSearchQuery(query);
    },
    [setCocktailSearchQuery],
  );

  return <Search placeholder="재료, 칵테일 이름 검색" onSearch={onSearchCocktail} style={{ width: 200 }} />;
};

export default CocktailSearchInput;
