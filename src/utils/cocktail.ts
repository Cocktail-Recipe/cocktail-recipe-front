import { cocktailBaseAlcoholLabelMap, cocktailSeasonalLabelMap, cocktailStyleLabelMap } from '@/consts/cocktail';
import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle } from '@/enum/cocktail';

const IMG_BASE_URL = process.env.NEXT_PUBLIC_STATIC_URL || '';

export const getCocktailImageSrc = (alcohol: string) => {
  return `${IMG_BASE_URL}/baseAlcohol/${alcohol}.png`;
};

export const getCocktailStyleImageSrc = (cocktailStyle: string) => {
  return `${IMG_BASE_URL}/style/${cocktailStyle}.png`;
};

export const getCocktailHashTags = ({
  baseAlcohol,
  cocktailStyle,
  seasonalStyle,
  volume,
  koreanName,
}: {
  baseAlcohol: CocktailBaseAlcohol;
  cocktailStyle?: CocktailFlavor;
  seasonalStyle?: CocktailSeasonalStyle;
  volume?: number;
  koreanName?: string;
}) => {
  const baseAlcoholLabel = '#' + cocktailBaseAlcoholLabelMap[baseAlcohol];
  const cocktailStyleLabel = cocktailStyle ? '#' + cocktailStyleLabelMap[cocktailStyle] : '';
  const seasonalLabel = seasonalStyle ? '#' + cocktailSeasonalLabelMap[seasonalStyle] : '';
  const volumeLabel = volume ? '#' + volume + '도' : '';
  const koreanNameLabel = koreanName ? '#' + koreanName : '';

  return `${baseAlcoholLabel} ${volumeLabel} ${koreanNameLabel} ${cocktailStyleLabel} ${seasonalLabel}`;
};
