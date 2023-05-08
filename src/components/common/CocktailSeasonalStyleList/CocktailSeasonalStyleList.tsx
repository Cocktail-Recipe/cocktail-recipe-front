import { Radio, Space } from 'antd';
import React, { ReactElement } from 'react';
import { cocktailSeasonalLabelMap } from '@/consts/cocktail';
import { CocktailSeasonalStyle } from '@/enum/cocktail';

interface CocktailSeasonalStyleListProps {
  seasonalStyle?: CocktailSeasonalStyle;
  onClickCocktailSeasonalStyle: (value: CocktailSeasonalStyle) => void;
}

const CocktailSeasonalStyleList = ({
  seasonalStyle,
  onClickCocktailSeasonalStyle,
}: CocktailSeasonalStyleListProps): ReactElement => {
  return (
    <Radio.Group value={seasonalStyle}>
      <Space wrap>
        {Object.entries(cocktailSeasonalLabelMap).map(([name, label]) => {
          return (
            <Radio.Button
              key={name}
              value={name}
              onClick={() => onClickCocktailSeasonalStyle(name as CocktailSeasonalStyle)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '30px' }}
            >
              <div>{label}</div>
            </Radio.Button>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default React.memo(CocktailSeasonalStyleList);
