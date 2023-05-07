import Image from 'next/image';
import React, { ReactElement } from 'react';
import { Radio, Space } from 'antd';
import { getCocktailImageSrc } from '@/utils/cocktail';
import { cocktailBaseAlcoholLabelMap } from '@/consts/cocktail';
import { CocktailBaseAlcohol } from '@/enum/cocktail';

interface BaseAlcoholListProps {
  onClickBaseCocktail: (value: CocktailBaseAlcohol) => void;
  baseAlcohol?: CocktailBaseAlcohol;
}

const BaseAlcoholList = ({ onClickBaseCocktail, baseAlcohol }: BaseAlcoholListProps): ReactElement => {
  return (
    <Radio.Group value={baseAlcohol}>
      <Space wrap>
        {Object.entries(cocktailBaseAlcoholLabelMap).map(([name, label]) => {
          const imgName = name.toLowerCase();

          return (
            <Radio.Button
              key={name}
              value={name}
              onClick={() => onClickBaseCocktail(name as CocktailBaseAlcohol)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70px' }}
            >
              <Image src={getCocktailImageSrc(imgName)} alt={label} width={32} height={32} />
              <div>{label}</div>
            </Radio.Button>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default React.memo(BaseAlcoholList);
