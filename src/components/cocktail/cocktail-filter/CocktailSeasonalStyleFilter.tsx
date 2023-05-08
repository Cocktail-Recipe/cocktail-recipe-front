import React, { ReactElement } from 'react';
import { Space, Typography } from 'antd';
import { CocktailSeasonalStyle } from '@/enum/cocktail';
import CocktailSeasonalStyleList from '@/components/common/CocktailSeasonalStyleList/CocktailSeasonalStyleList';

interface CocktailSeasonalStyleFilterProps {
  seasonalStyle?: CocktailSeasonalStyle;
  onClickCocktailSeasonalStyle: (value: CocktailSeasonalStyle) => void;
}

const CocktailSeasonalStyleFilter = ({
  seasonalStyle,
  onClickCocktailSeasonalStyle,
}: CocktailSeasonalStyleFilterProps): ReactElement => {
  return (
    <Space direction="vertical">
      <Typography.Text>시즈널</Typography.Text>
      <CocktailSeasonalStyleList
        seasonalStyle={seasonalStyle}
        onClickCocktailSeasonalStyle={onClickCocktailSeasonalStyle}
      />
    </Space>
  );
};

export default React.memo(CocktailSeasonalStyleFilter);
