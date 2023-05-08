import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle, CocktailStatus } from '@/enum/cocktail';

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
  garnish: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  thumbnail: string;
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
