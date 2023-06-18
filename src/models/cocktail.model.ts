import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle, CocktailStatus } from '@/enum/cocktail';
import { Ingredient } from './ingredient.model';

export interface PopularCocktailRecipe {
  src: string;
  alt: string;
  name: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export interface Cocktail {
  cocktailId: number;
  status: CocktailStatus;
  koreanName: string;
  englishName: string;
  baseAlcohol: CocktailBaseAlcohol;
  volume: number;
  cocktailStyle: CocktailFlavor;
  seasonalStyle: CocktailSeasonalStyle;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  thumbnail: string;
  introduce: null | string;
  recipe: null | string;
  ingredientList: Ingredient[];
}

export interface CocktailListResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    content: Cocktail[];
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    number: number;
    numberOfElements: number;
    size: number;
    empty: boolean;
  };
}

export interface CocktailResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Cocktail;
}
