import React, { ReactElement } from 'react';
import { cocktailBaseAlcoholLabelMap, cocktailSeasonalLabelMap, cocktailStyleLabelMap } from '@/consts/cocktail';
import { Cocktail } from '@/models/cocktail.model';

interface HashTagContainerProps {
  cocktail: Cocktail;
}

const HashTagContainer = ({ cocktail }: HashTagContainerProps): ReactElement => {
  const { baseAlcohol, cocktailStyle, seasonalStyle, volume, koreanName } = cocktail;

  const baseAlcoholLabel = '#' + cocktailBaseAlcoholLabelMap[baseAlcohol];
  const cocktailStyleLabel = '#' + cocktailStyleLabelMap[cocktailStyle];
  const seasonalLabel = '#' + cocktailSeasonalLabelMap[seasonalStyle];
  const volumeLabel = volume ? '#' + volume + '도' : '';

  // HashTag 구현
  return (
    <>
      {baseAlcoholLabel} {volumeLabel} #{koreanName} {cocktailStyleLabel} {seasonalLabel}
    </>
  );
};

export default React.memo(HashTagContainer);
