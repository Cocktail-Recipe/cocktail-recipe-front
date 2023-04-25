import { CocktailBaseAlcohol } from '@/enum/cocktail';

const IMG_BASE_URL = process.env.NEXT_PUBLIC_STATIC_URL || '';

export const cockTailBaseAlcoholLabel: { [key in CocktailBaseAlcohol]: string } = {
  [CocktailBaseAlcohol.RUM]: '럼',
  [CocktailBaseAlcohol.VODKA]: '보드카',
  [CocktailBaseAlcohol.WHISKEY]: '위스키',
  [CocktailBaseAlcohol.GIN]: '진',
  [CocktailBaseAlcohol.TEQUILA]: '데킬라',
  [CocktailBaseAlcohol.SOJU]: '소주',
  [CocktailBaseAlcohol.BRANDY]: '브랜디',
  [CocktailBaseAlcohol.NON_ALCOHOLIC]: '무알콜',
};

export const getCocktailImageSrc = (alcohol: string) => {
  return `${IMG_BASE_URL}/baseAlcohol/${alcohol}.png`;
};
