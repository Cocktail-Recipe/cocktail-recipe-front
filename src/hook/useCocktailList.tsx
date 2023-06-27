import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import cocktailAPI from '@/api/cocktail';
import { CocktailSearchRequestState, cocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';
import { Cocktail } from '@/models/cocktail.model';
import { cocktailListState } from '@/states/cocktail/cocktailList.state';

const DEFAULT_PAGE = 1;

const useCocktailList = () => {
  const searchParams = useRecoilValue(cocktailSearchRequestState);
  const setCocktails = useSetRecoilState<Cocktail[]>(cocktailListState);

  const [page, setPage] = useState(DEFAULT_PAGE);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const loadCocktails = useCallback(
    (hasMore: boolean, params: CocktailSearchRequestState) => {
      setLoading(true);

      cocktailAPI
        .getAllCocktails(params)
        .then(({ data }) => {
          setHasNextPage(!data.result.last);
          setCocktails((prev) => (hasMore ? [...prev, ...data.result.content] : data.result.content));
        })
        .catch(() => setCocktails([]));

      setLoading(false);
    },
    [setCocktails],
  );

  useEffect(() => {
    setPage(DEFAULT_PAGE);
    loadCocktails(false, searchParams);
  }, [loadCocktails, searchParams]);

  const loadMoreCocktails = useCallback(() => {
    setPage(page + 1);
    loadCocktails(true, { ...searchParams, page: page + 1 });
  }, [loadCocktails, page, searchParams]);

  return { loadMoreCocktails, hasNextPage, isLoading };
};

export default useCocktailList;
