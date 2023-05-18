import { Ingredient } from '@/models/ingredient.model';
import { ReactElement } from 'react';
import { Avatar, Card, List, Typography } from 'antd';
import CocktailIngredient from './CocktailIngredientList';
import CocktailIngredientList from './CocktailIngredientList';
import CocktailIngredientUnitSelector from './CocktailIngredientUnitSelector';

interface CocktailIngredientContainerProps {
  ingredients: Ingredient[];
}

const CocktailIngredientContainer = ({ ingredients }: CocktailIngredientContainerProps): ReactElement => {
  return (
    <Card title={'재료 정보'} extra={<CocktailIngredientUnitSelector />}>
      <CocktailIngredientList ingredients={ingredients} />
    </Card>
  );
};

export default CocktailIngredientContainer;
