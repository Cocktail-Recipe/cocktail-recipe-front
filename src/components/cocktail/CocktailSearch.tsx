import { ReactElement, useCallback } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const CocktailSearch = (): ReactElement => {
  const onSearchCocktail = useCallback((query: string) => {
    console.log(query);
  }, []);

  return <Search placeholder="재료, 칵테일 이름 검색" onSearch={onSearchCocktail} style={{ width: 200 }} />;
};

export default CocktailSearch;
