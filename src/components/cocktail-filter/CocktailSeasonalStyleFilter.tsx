import React, { ReactElement } from 'react';
import { Space } from 'antd';
import { CocktailSeasonalStyle } from '@/enum/cocktail';
import CocktailSeasonalStyleList from '@/components/common/CocktailSeasonalStyleList/CocktailSeasonalStyleList';
import { StyledCocktailFilterText } from '../common/CocktailFilterText.styled';

interface CocktailSeasonalStyleFilterProps {
  seasonalStyle?: CocktailSeasonalStyle;
  onClickCocktailSeasonalStyle: (value: CocktailSeasonalStyle) => void;
}

const CocktailSeasonalStyleFilter = ({
  seasonalStyle,
  onClickCocktailSeasonalStyle,
}: CocktailSeasonalStyleFilterProps): ReactElement => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <StyledCocktailFilterText>시즈널</StyledCocktailFilterText>
      <CocktailSeasonalStyleList
        seasonalStyle={seasonalStyle}
        onClickCocktailSeasonalStyle={onClickCocktailSeasonalStyle}
      />
    </Space>
  );
};

export default React.memo(CocktailSeasonalStyleFilter);
