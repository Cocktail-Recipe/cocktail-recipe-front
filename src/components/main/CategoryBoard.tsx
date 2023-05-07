import Image from 'next/image';
import { ReactElement } from 'react';
import { getCocktailImageSrc } from '@/utils/cocktail';
import { cocktailBaseAlcoholLabelMap } from '@/consts/cocktail';

const CategoryBoard = (): ReactElement => {
  return (
    <>
      <div>카테고리</div>
      <div style={{ display: 'flex' }}>
        {Object.entries(cocktailBaseAlcoholLabelMap).map(([name, label]) => {
          const imgName = name.toLowerCase();

          return (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={getCocktailImageSrc(imgName)} alt={label} width={42} height={42} />
              <div>{label}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryBoard;
