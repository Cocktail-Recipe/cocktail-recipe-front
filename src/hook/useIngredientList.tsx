import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import IngredientAPI from '@/api/ingredient';
import {
  IngredientSearchRequestParamsState,
  ingredientSearchRequestState,
} from '@/states/ingredient/ingredientSearchRequest.state';
import { Ingredient } from '@/models/ingredient.model';
import { ingredientListState } from '@/states/ingredient/ingredientList.state';

const DEFAULT_PAGE = 1;

const useIngredientList = () => {
  const searchParams = useRecoilValue(ingredientSearchRequestState);
  const setIngredients = useSetRecoilState<Ingredient[]>(ingredientListState);

  const [page, setPage] = useState(DEFAULT_PAGE);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const loadIngredients = useCallback(
    (hasMore: boolean, params: IngredientSearchRequestParamsState) => {
      setLoading(true);

      IngredientAPI.getAllIngredients(params)
        .then(({ data }) => {
          setHasNextPage(!data.result.last);
          setIngredients((prev) => (hasMore ? [...prev, ...data.result.content] : data.result.content));
        })
        .catch(() => setIngredients([]));

      setLoading(false);
    },
    [setIngredients],
  );

  useEffect(() => {
    setPage(DEFAULT_PAGE);
    loadIngredients(false, searchParams);
  }, [loadIngredients, searchParams]);

  const loadMoreIngredients = useCallback(() => {
    setPage(page + 1);
    loadIngredients(true, { ...searchParams, page: page + 1 });
  }, [loadIngredients, page, searchParams]);

  return { loadMoreIngredients, hasNextPage, isLoading };
};

export default useIngredientList;
