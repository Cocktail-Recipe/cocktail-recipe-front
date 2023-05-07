import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle, CocktailSort } from '@/enum/cocktail';

export const cocktailBaseAlcoholLabelMap: { [key in CocktailBaseAlcohol]: string } = {
  [CocktailBaseAlcohol.RUM]: '럼',
  [CocktailBaseAlcohol.VODKA]: '보드카',
  [CocktailBaseAlcohol.WHISKEY]: '위스키',
  [CocktailBaseAlcohol.GIN]: '진',
  [CocktailBaseAlcohol.TEQUILA]: '데킬라',
  [CocktailBaseAlcohol.SOJU]: '소주',
  [CocktailBaseAlcohol.BRANDY]: '브랜디',
  [CocktailBaseAlcohol.NON_ALCOHOL]: '무알콜',
};

export const cocktailStyleLabelMap: { [key in CocktailFlavor]: string } = {
  [CocktailFlavor.CLASSIC]: '클래식',
  [CocktailFlavor.SWEET]: '스위트',
  [CocktailFlavor.FRUITY]: '프루티',
  [CocktailFlavor.CREAMY]: '크리미',
  [CocktailFlavor.SOUR]: '사워',
};

export const cocktailSeasonalLabelMap = {
  [CocktailSeasonalStyle.SPRING]: '봄',
  [CocktailSeasonalStyle.SUMMER]: '여름',
  [CocktailSeasonalStyle.FALL]: '가을',
  [CocktailSeasonalStyle.WINTER]: '겨울',
};

export const cocktailSortLabelMap = {
  [CocktailSort.VIEW_COUNT]: '조회순',
  [CocktailSort.LIKE_COUNT]: '찜순',
  [CocktailSort.COMMENT_COUNT]: '댓글순',
};
