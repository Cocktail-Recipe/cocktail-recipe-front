import Image from 'next/image';
import { ReactElement } from 'react';
import { cockTailBaseAlcoholLabel, getCocktailImageSrc } from '@/utils/cocktail';

const CategoryBoard = (): ReactElement => {
  return (
    <>
      <div>카테고리</div>
      <div style={{ display: 'flex' }}>
        {Object.entries(cockTailBaseAlcoholLabel).map(([name, label]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={getCocktailImageSrc(name)} alt={label} width={42} height={42} />
            <div>{label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryBoard;
