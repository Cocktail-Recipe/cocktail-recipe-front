import { Button, Space, Typography } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { StyledCocktailEditorInput, StyledCocktailEditorInputTitle } from './CocktailEditor.styled';
import { StyledCocktailCategoryButton } from './CocktailCategory.styled';
import { RightOutlined } from '@ant-design/icons';
import ingredientAPI from '@/api/ingredient';
import CocktailIngredientContainer from '../cocktail-ingredient/CocktailIngredientContainer';
import CocktailIngredientList from '../cocktail-ingredient/CocktailIngredientList';

interface CocktailIngredientContainer {
  onClickSearch: () => void;
}

const CocktailIngredientListContainer = ({ onClickSearch }: CocktailIngredientContainer): ReactElement => {
  return (
    <Space direction="vertical">
      <StyledCocktailEditorInputTitle>
        <Typography.Text>칵테일 카테고리</Typography.Text>
      </StyledCocktailEditorInputTitle>
      <StyledCocktailEditorInput>
        <StyledCocktailCategoryButton>
          <Button onClick={onClickSearch}>
            <>
              <Typography.Text>칵테일 재료 선택</Typography.Text> <RightOutlined />
            </>
          </Button>
        </StyledCocktailCategoryButton>
      </StyledCocktailEditorInput>
    </Space>
  );
};

export default CocktailIngredientListContainer;
