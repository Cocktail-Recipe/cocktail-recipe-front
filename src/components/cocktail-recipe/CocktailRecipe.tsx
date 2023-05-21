import { Card } from 'antd';
import React, { ReactElement } from 'react';

interface CocktailRecipeProps {
  recipe: string | null;
}

const CocktailRecipe = ({ recipe }: CocktailRecipeProps): ReactElement => {
  return (
    <Card title={'레시피'} style={{ whiteSpace: 'break-spaces' }}>
      {recipe}
    </Card>
  );
};

export default React.memo(CocktailRecipe);
