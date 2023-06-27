import { Radio, Space } from 'antd';
import React, { ReactElement } from 'react';
import { cocktailSeasonalLabelMap } from '@/consts/cocktail';
import { CocktailSeasonalStyle } from '@/enum/cocktail';
import { StyledCocktailSeasonalStyleList } from './CocktailSeasonalStyleList.styled';

interface CocktailSeasonalStyleListProps {
  seasonalStyle?: CocktailSeasonalStyle;
  onClickCocktailSeasonalStyle: (value: CocktailSeasonalStyle) => void;
}

const CocktailSeasonalStyleList = ({
  seasonalStyle,
  onClickCocktailSeasonalStyle,
}: CocktailSeasonalStyleListProps): ReactElement => {
  return (
    <StyledCocktailSeasonalStyleList>
      <Radio.Group value={seasonalStyle}>
        <Space align="center" size={[8, 16]}>
          {Object.entries(cocktailSeasonalLabelMap).map(([name, label]) => {
            return (
              <Radio.Button
                key={name}
                value={name}
                className="seasonal-style-item"
                onClick={() => onClickCocktailSeasonalStyle(name as CocktailSeasonalStyle)}
              >
                <div className="seasonal-style-label">{label}</div>
              </Radio.Button>
            );
          })}
        </Space>
      </Radio.Group>
    </StyledCocktailSeasonalStyleList>
  );
};

export default React.memo(CocktailSeasonalStyleList);
