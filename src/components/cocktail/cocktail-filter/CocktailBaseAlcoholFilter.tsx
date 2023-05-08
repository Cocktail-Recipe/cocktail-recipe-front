import { Space, Typography } from 'antd';
import React, { ReactElement } from 'react';
import { CocktailBaseAlcohol } from '@/enum/cocktail';
import BaseAlcoholList from '../../common/BaseAlcoholList/BaseAlcoholList';

interface CocktailBaseAlcoholFilterProps {
  onClickBaseAlcohol: (value: CocktailBaseAlcohol) => void;
  baseAlcohol?: CocktailBaseAlcohol;
}

const CocktailBaseAlcoholFilter = ({
  onClickBaseAlcohol,
  baseAlcohol,
}: CocktailBaseAlcoholFilterProps): ReactElement => {
  return (
    <Space direction="vertical">
      <Typography.Text>베이스주</Typography.Text>
      <BaseAlcoholList baseAlcohol={baseAlcohol} onClickBaseCocktail={onClickBaseAlcohol} />
    </Space>
  );
};

export default React.memo(CocktailBaseAlcoholFilter);
