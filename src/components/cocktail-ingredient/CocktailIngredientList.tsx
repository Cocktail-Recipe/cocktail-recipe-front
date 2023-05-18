import { Ingredient } from '@/models/ingredient.model';
import React, { ReactElement } from 'react';
import { Avatar, List } from 'antd';

interface CocktailIngredientListProps {
  ingredients: Ingredient[];
}

const CocktailIngredientList = ({ ingredients }: CocktailIngredientListProps): ReactElement => {
  return (
    <List
      dataSource={ingredients}
      renderItem={(ingredient) => (
        <List.Item key={ingredient.name}>
          <List.Item.Meta
            avatar={<Avatar src={ingredient.thumbnail} />}
            title={ingredient.name}
            description={ingredient.category}
          />
          <div>
            {ingredient.amount} {ingredient.unit}
          </div>
        </List.Item>
      )}
    />
  );
};

export default React.memo(CocktailIngredientList);
