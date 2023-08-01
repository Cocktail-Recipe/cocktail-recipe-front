import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import CocktailSearchInput from '../cocktail-filter/CocktailSearchInput';
import IngredientCategoryFilterContainer from './IngredientCategoryFilterContainer';
import CocktailIngredientListContainer from './CocktailIngredientListContainer';
import CocktailIngredientList from '../cocktail-ingredient/CocktailIngredientList';
import ingredientAPI from '@/api/ingredient';
import CocktailRecipe from './CocktailRecipe';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ingredientListState } from '@/states/ingredient/ingredientList.state';
import { selectedIngredientsState } from '@/states/ingredient/ingredient.state';
import useIngredientList from '@/hook/useIngredientList';
import { Ingredient } from '@/models/ingredient.model';

const CocktailRegister = (): ReactElement => {
  const [isIngredientSearchMode, setIngredientSearchMode] = useState(false);
  const [ingredientList, setIngredientList] = useRecoilState(ingredientListState);
  const [selectedIngredients, setSelectedIngredients] = useRecoilState(selectedIngredientsState);
  const { loadMoreIngredients, hasNextPage, isLoading } = useIngredientList();

  const onClickSearch = useCallback(() => {
    setIngredientSearchMode(true);

    ingredientAPI
      .getAllIngredients({ page: 1 })
      .then(({ data }) => {
        console.log(data);
        setIngredientList(data.result.content);
      })
      .catch(() => setIngredientList([]));
  }, [setIngredientList]);

  useEffect(() => {
    return () => setIngredientSearchMode(false);
  }, []);

  return (
    <>
      {isIngredientSearchMode ? (
        <>
          <CocktailSearchInput pageName="ingredient-list" />
          <IngredientCategoryFilterContainer />
          <CocktailIngredientList ingredients={ingredientList} />
        </>
      ) : (
        <>
          <CocktailIngredientListContainer onClickSearch={onClickSearch} />
          <CocktailRecipe />
        </>
      )}
    </>
  );
};

export default CocktailRegister;
