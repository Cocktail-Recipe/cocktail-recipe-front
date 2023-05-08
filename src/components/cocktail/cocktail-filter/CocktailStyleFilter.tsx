import { Space, Typography } from 'antd';
import React, { ReactElement } from 'react';
import { CocktailFlavor } from '@/enum/cocktail';
import CocktailStyleList from '@/components/common/CocktailStyleList/CocktailStyleList';

interface CocktailStyleFilterProps {
  cocktailStyle?: CocktailFlavor;
  onClickCocktailStyle: (value: CocktailFlavor) => void;
}

const CocktailStyleFilter = ({ cocktailStyle, onClickCocktailStyle }: CocktailStyleFilterProps): ReactElement => {
  return (
    <Space direction="vertical">
      <Typography.Text>칵테일 스타일</Typography.Text>
      <CocktailStyleList cocktailStyle={cocktailStyle} onClickCocktailStyle={onClickCocktailStyle} />
    </Space>
  );
};

export default React.memo(CocktailStyleFilter);
