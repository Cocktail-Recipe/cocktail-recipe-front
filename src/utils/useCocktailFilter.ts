import { CocktailBaseAlcoholType, isCocktailBaseAlcoholType } from '@/interfaces/inquiry/CocktailBaseAlcohol.type';
import { CocktailSeasonalType, isCocktailSeasonalType } from '@/interfaces/inquiry/CocktailSeasonal.type';
import { CocktailSortType, isCocktailSortType } from '@/interfaces/inquiry/CocktailSort.type';
import { CocktailStyleType, isCocktailStyleType } from '@/interfaces/inquiry/CocktailStyle.type';
import { ParsedUrlQuery } from 'querystring';

export interface CocktailFilterInterface {
  [index: string]: any;
  sortBy: CocktailSortType;
  baseAlcohol: CocktailBaseAlcoholType | undefined;
  maxVolume: number | undefined;
  minVolume: number | undefined;
  cocktailStyle: CocktailStyleType | undefined;
  seasonalStyle: CocktailSeasonalType | undefined;
}

export const getCocktailFilter = (query: ParsedUrlQuery): CocktailFilterInterface => {
  return {
    sortBy: isCocktailSortType(query?.sort) ? query.sort : 'viewCount',
    baseAlcohol: isCocktailBaseAlcoholType(query?.base) ? query.base : undefined,
    maxVolume: typeof query?.maxVolumn === 'string' ? Number.parseInt(query.maxVolume as string) : undefined,
    minVolume: typeof query?.minVolume === 'string' ? Number.parseInt(query.minVolume as string) : undefined,
    cocktailStyle: isCocktailStyleType(query?.style) ? query.style : undefined,
    seasonalStyle: isCocktailSeasonalType(query?.season) ? query.season : undefined,
  };
};
