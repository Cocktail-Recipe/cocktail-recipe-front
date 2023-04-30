import React, { ReactElement } from 'react';
import { cocktailBaseAlcoholLabelMap, cocktailSeasonalLabelMap, cocktailStyleLabelMap } from '@/consts/cocktail';
import { Cocktail } from '@/models/cocktail.model';

interface HashTagContainer {
  cocktail: Cocktail;
}

const HashTagContainer = ({ cocktail }: HashTagContainer): ReactElement => {
  const { baseAlcohol, cocktailStyle, seasonalStyle, volume, koreanName } = cocktail;

  const baseAlcoholLabel = cocktailBaseAlcoholLabelMap[baseAlcohol];
  const cocktailStyleLabel = cocktailStyleLabelMap[cocktailStyle];
  const seasonalLabel = cocktailSeasonalLabelMap[seasonalStyle];

  // HashTag 구현
  return (
    <>
      #{baseAlcoholLabel} #{volume}도 #{koreanName} #{cocktailStyleLabel} #{seasonalLabel}
    </>
  );
};

export default React.memo(HashTagContainer);
