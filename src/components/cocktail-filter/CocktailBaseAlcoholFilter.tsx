import { Space } from 'antd';
import React, { ReactElement } from 'react';
import { CocktailBaseAlcohol } from '@/enum/cocktail';
import BaseAlcoholList from '../common/BaseAlcoholList/BaseAlcoholList';

import { StyledCocktailFilterText } from '../common/CocktailFilterText.styled';

interface CocktailBaseAlcoholFilterProps {
  onClickBaseAlcohol: (value: CocktailBaseAlcohol) => void;
  baseAlcohol?: CocktailBaseAlcohol;
}

const CocktailBaseAlcoholFilter = ({
  onClickBaseAlcohol,
  baseAlcohol,
}: CocktailBaseAlcoholFilterProps): ReactElement => {
  return (
    <Space direction="vertical" size="large">
      <StyledCocktailFilterText>베이스주</StyledCocktailFilterText>
      <BaseAlcoholList baseAlcohol={baseAlcohol} onClickBaseCocktail={onClickBaseAlcohol} />
    </Space>
  );
};

export default React.memo(CocktailBaseAlcoholFilter);
