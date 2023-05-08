import { ReactElement, useCallback } from 'react';
import BaseAlcoholList from '../common/BaseAlcoholList/BaseAlcoholList';

const CategoryBoard = (): ReactElement => {
  // TODO: detail view
  const onClickBaseCocktail = useCallback(() => {
    console.log('baseCocktial detail');
  }, []);

  return (
    <>
      <div>카테고리</div>
      <div style={{ display: 'flex' }}>
        <BaseAlcoholList onClickBaseCocktail={onClickBaseCocktail} />
      </div>
    </>
  );
};

export default CategoryBoard;
