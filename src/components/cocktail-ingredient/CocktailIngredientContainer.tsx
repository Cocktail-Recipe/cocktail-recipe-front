import { Ingredient } from '@/models/ingredient.model';
import React, { ReactElement } from 'react';
import { Card } from 'antd';
import CocktailIngredientList from './CocktailIngredientList';
import CocktailIngredientUnitSelector from './CocktailIngredientUnitSelector';

interface CocktailIngredientContainerProps {
  ingredients: Ingredient[];
}

const CocktailIngredientContainer = ({ ingredients }: CocktailIngredientContainerProps): ReactElement => {
  return (
    <Card title="재료 정보" extra={<CocktailIngredientUnitSelector />}>
      <CocktailIngredientList ingredients={ingredients} />
    </Card>
  );
};

export default React.memo(CocktailIngredientContainer);
