import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import cocktailAPI from '@/api/cocktail';
import { cocktailListState } from '@/states/cocktail/cocktailList.state';
import { cocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';

const useCocktailList = () => {
  const searchParams = useRecoilValue(cocktailSearchRequestState);
  const setCocktailList = useSetRecoilState(cocktailListState);

  useEffect(() => {
    cocktailAPI
      .getAllCocktails(searchParams)
      .then(({ data }) => setCocktailList(data.result.content))
      .catch(() => setCocktailList([]));
  }, [searchParams, setCocktailList]);
};

export default useCocktailList;
