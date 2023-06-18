import { ReactElement, useCallback } from 'react';
import { Input } from 'antd';
import { useSetRecoilState } from 'recoil';
import { cocktailSearchQueryState } from '@/states/cocktail/cocktailSearchRequest.state';

import { StyledSearchInput } from './CocktailSearchInput.styled';

const { Search } = Input;

const CocktailSearchInput = (): ReactElement => {
  const setCocktailSearchQuery = useSetRecoilState(cocktailSearchQueryState);

  const onSearchCocktail = useCallback(
    (query: string) => {
      setCocktailSearchQuery(query);
    },
    [setCocktailSearchQuery],
  );

  return (
    <StyledSearchInput>
      <Search placeholder="재료, 칵테일 이름 직접 검색하기" onSearch={onSearchCocktail} style={{ width: 200 }} />
    </StyledSearchInput>
  );
};

export default CocktailSearchInput;
