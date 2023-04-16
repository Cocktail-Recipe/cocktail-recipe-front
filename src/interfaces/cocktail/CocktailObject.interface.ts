import { CocktailBaseAlcoholType } from '../inquiry/CocktailBaseAlcohol.type';
import { CocktailSeasonalType } from '../inquiry/CocktailSeasonal.type';
import { CocktailStyleType } from '../inquiry/CocktailStyle.type';

export interface CocktailListType {
  cockTailId: number;
  status: CocktailStatus;
  name: string;
  baseAlcohol: CocktailBaseAlcoholType;
  volume: number;
  cocktailStyle: CocktailStyleType;
  seasonalStyle: CocktailSeasonalType;
  garnish: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  thumbnail: string;
}

export enum CocktailStatus {
  VALID = '',
  DELETED = '',
  BLACKLIST = '',
  DORMANT = '',
  SUCCESS = '',
  FAIL = '',
  USED = '',
  EXPIRED = '',
  RESERVATION = '',
}
