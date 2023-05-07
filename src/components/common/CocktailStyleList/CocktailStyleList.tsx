import { Radio, Space } from 'antd';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import { cocktailStyleLabelMap } from '@/consts/cocktail';
import { getCocktailStyleImageSrc } from '@/utils/cocktail';
import { CocktailFlavor } from '@/enum/cocktail';

interface CocktailStyleListProps {
  cocktailStyle?: CocktailFlavor;
  onClickCocktailStyle: (value: CocktailFlavor) => void;
}

const CocktailStyleList = ({ cocktailStyle, onClickCocktailStyle }: CocktailStyleListProps): ReactElement => {
  return (
    <Radio.Group value={cocktailStyle}>
      <Space wrap>
        {Object.entries(cocktailStyleLabelMap).map(([name, label]) => {
          const imgName = name.toLowerCase();

          return (
            <Radio.Button
              key={name}
              value={name}
              onClick={() => onClickCocktailStyle(name as CocktailFlavor)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70px' }}
            >
              <Image src={getCocktailStyleImageSrc(imgName)} alt={label} width={32} height={32} />
              <div>{label}</div>
            </Radio.Button>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default React.memo(CocktailStyleList);
