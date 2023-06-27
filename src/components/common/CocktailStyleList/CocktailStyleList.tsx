import { Radio, Space } from 'antd';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import { cocktailStyleLabelMap } from '@/consts/cocktail';
import { getCocktailStyleImageSrc } from '@/utils/cocktail';
import { CocktailFlavor } from '@/enum/cocktail';
import { StyledCocktailFilterItemList } from '../CocktailFilterItemList.styled';

interface CocktailStyleListProps {
  cocktailStyle?: CocktailFlavor;
  onClickCocktailStyle: (value: CocktailFlavor) => void;
}

const CocktailStyleList = ({ cocktailStyle, onClickCocktailStyle }: CocktailStyleListProps): ReactElement => {
  return (
    <StyledCocktailFilterItemList>
      <Radio.Group value={cocktailStyle}>
        <Space wrap>
          {Object.entries(cocktailStyleLabelMap).map(([name, label]) => {
            const imgName = name.toLowerCase();

            return (
              <Radio.Button
                className="cocktail-filter-item"
                key={name}
                value={name}
                onClick={() => onClickCocktailStyle(name as CocktailFlavor)}
              >
                <Image
                  className="cocktail-filter-item-image"
                  src={getCocktailStyleImageSrc(imgName)}
                  alt={label}
                  width={60}
                  height={60}
                />
                <div className="cocktail-filter-item-label">{label}</div>
              </Radio.Button>
            );
          })}
        </Space>
      </Radio.Group>
    </StyledCocktailFilterItemList>
  );
};

export default React.memo(CocktailStyleList);
