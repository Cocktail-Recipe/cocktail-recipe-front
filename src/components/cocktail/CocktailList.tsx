import { List } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';
import CocktailCard from './CocktailCard';

interface CockTailListProps {
  cocktails: Cocktail[];
}

const CockTailList = ({ cocktails }: CockTailListProps): ReactElement => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cocktails}
      renderItem={(cocktail: Cocktail) => <CocktailCard cocktail={cocktail} key={cocktail.cockTailId} />}
    />
  );
};

export default React.memo(CockTailList);
