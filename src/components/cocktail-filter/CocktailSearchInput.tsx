import { ReactElement, useCallback } from 'react';
import { Input } from 'antd';
import { useSetRecoilState } from 'recoil';
import { cocktailSearchQueryState } from '@/states/cocktail/cocktailSearchRequest.state';

import { StyledSearchInput } from './CocktailSearchInput.styled';
import { ingredientSearchNameState } from '@/states/ingredient/ingredientSearchRequest.state';

const { Search } = Input;

interface CocktailSearchInputProps {
  pageName: string;
}

// pageName 상수화
const CocktailSearchInput = ({ pageName }: CocktailSearchInputProps): ReactElement => {
  const setCocktailSearchQuery = useSetRecoilState(cocktailSearchQueryState);
  const setIngredientSearchQuery = useSetRecoilState(ingredientSearchNameState);

  const onSearchCocktail = useCallback(
    (query: string) => {
      switch (pageName) {
        case 'cocktail-list': {
          setCocktailSearchQuery(query);
          break;
        }
        case 'ingredient-list': {
          setIngredientSearchQuery(query);
          break;
        }
      }
    },
    [pageName, setCocktailSearchQuery, setIngredientSearchQuery],
  );

  return (
    <StyledSearchInput>
      <Search placeholder="재료, 칵테일 이름 직접 검색하기" onSearch={onSearchCocktail} style={{ width: 200 }} />
    </StyledSearchInput>
  );
};

export default CocktailSearchInput;
