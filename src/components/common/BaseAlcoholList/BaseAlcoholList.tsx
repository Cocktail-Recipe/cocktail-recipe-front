import Image from 'next/image';
import React, { ReactElement } from 'react';
import { Radio, Space } from 'antd';
import { getCocktailImageSrc } from '@/utils/cocktail';
import { cocktailBaseAlcoholLabelMap } from '@/consts/cocktail';
import { CocktailBaseAlcohol } from '@/enum/cocktail';
import { StyledCocktailFilterItemList } from '../CocktailFilterItemList.styled';

interface BaseAlcoholListProps {
  onClickBaseCocktail: (value: CocktailBaseAlcohol) => void;
  baseAlcohol?: CocktailBaseAlcohol;
}

const BaseAlcoholList = ({ onClickBaseCocktail, baseAlcohol }: BaseAlcoholListProps): ReactElement => {
  return (
    <StyledCocktailFilterItemList>
      <Radio.Group value={baseAlcohol}>
        <Space wrap>
          {Object.entries(cocktailBaseAlcoholLabelMap).map(([name, label]) => {
            const imgName = name.toLowerCase();

            return (
              <Radio.Button
                className="cocktail-filter-item"
                key={name}
                value={name}
                onClick={() => onClickBaseCocktail(name as CocktailBaseAlcohol)}
              >
                <Image
                  className="cocktail-filter-item-image"
                  src={getCocktailImageSrc(imgName)}
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

export default React.memo(BaseAlcoholList);
