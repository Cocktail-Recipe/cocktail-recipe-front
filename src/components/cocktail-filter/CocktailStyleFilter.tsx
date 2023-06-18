import { Space } from 'antd';
import React, { ReactElement } from 'react';
import { CocktailFlavor } from '@/enum/cocktail';
import CocktailStyleList from '@/components/common/CocktailStyleList/CocktailStyleList';
import { StyledCocktailFilterText } from '../common/CocktailFilterText.styled';

interface CocktailStyleFilterProps {
  cocktailStyle?: CocktailFlavor;
  onClickCocktailStyle: (value: CocktailFlavor) => void;
}

const CocktailStyleFilter = ({ cocktailStyle, onClickCocktailStyle }: CocktailStyleFilterProps): ReactElement => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <StyledCocktailFilterText>스타일</StyledCocktailFilterText>
      <CocktailStyleList cocktailStyle={cocktailStyle} onClickCocktailStyle={onClickCocktailStyle} />
    </Space>
  );
};

export default React.memo(CocktailStyleFilter);
