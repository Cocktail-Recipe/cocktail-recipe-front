import { ReactElement, useCallback } from 'react';
import { Typography } from 'antd';
import BaseAlcoholList from '../common/BaseAlcoholList/BaseAlcoholList';

import { StyledCategoryBoard } from './CategoryBoard.styled';

const CategoryBoard = (): ReactElement => {
  const onClickBaseCocktail = useCallback(() => {
    console.log('baseCocktial detail');
  }, []);

  return (
    <StyledCategoryBoard>
      <Typography.Text>카테고리</Typography.Text>
      <div className="base-alcohol-list-wrapper">
        <BaseAlcoholList onClickBaseCocktail={onClickBaseCocktail} />
      </div>
    </StyledCategoryBoard>
  );
};

export default CategoryBoard;
