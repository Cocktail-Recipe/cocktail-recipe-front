import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle, CocktailSort } from '@/enum/cocktail';
import { DefaultValue, atom, selector } from 'recoil';

export interface CocktailSearchRequestState {
  nameOrIngredient: string;
  size: number;
  page: number;
  isAsc: boolean;
  sortBy: CocktailSort;
  baseAlcohol?: CocktailBaseAlcohol;
  maxVolume?: number;
  minVolume?: number;
  garnish?: string;
  cocktailStyle?: CocktailFlavor;
  seasonalStyle?: CocktailSeasonalStyle;
}

export const cocktailSearchQueryState = atom<string>({
  key: 'cocktailSearchQueryState',
  default: '',
});

const PAGE_LIMIT = 10;
export const cocktailSearchSizeState = atom<number>({
  key: 'cocktailSearchSizeState',
  default: PAGE_LIMIT,
});

export const cocktailSearchPageState = atom<number>({
  key: 'cocktailSearchPageState',
  default: 1,
});

export const cocktailSearchIsAscState = atom<boolean>({
  key: 'cocktailSearchIsAscState',
  default: false,
});

export const cocktailSearchSortByState = atom<CocktailSort>({
  key: 'cocktailSearchSortByState',
  default: CocktailSort.VIEW_COUNT,
});

export const cocktailSearchBaseAlcoholState = atom<CocktailBaseAlcohol>({
  key: 'cocktailSearchBaseAlcoholState',
  default: undefined,
});

export const cocktailSearchMaxVolumeState = atom<number | undefined>({
  key: 'cocktailSearchMaxVolumeState',
  default: undefined,
});

export const cocktailSearchMinVolumeState = atom<number | undefined>({
  key: 'cocktailSearchMinVolumeState',
  default: undefined,
});

export const cocktailSearchGarnishState = atom<string | undefined>({
  key: 'cocktailSearchGarnishState',
  default: undefined,
});

export const cocktailSearchCocktailStyleState = atom<CocktailFlavor | undefined>({
  key: 'cocktailSearchCocktailStyleState',
  default: undefined,
});

export const cocktailSearchSeasonalStyleState = atom<CocktailSeasonalStyle | undefined>({
  key: 'cocktailSearchSeasonalStyleState',
  default: undefined,
});

export const cocktailSearchRequestState = selector<CocktailSearchRequestState>({
  key: 'cocktailSearchRequestState',
  get: ({ get }) => {
    return {
      nameOrIngredient: get(cocktailSearchQueryState),
      size: get(cocktailSearchSizeState),
      page: get(cocktailSearchPageState),
      isAsc: get(cocktailSearchIsAscState),
      sortBy: get(cocktailSearchSortByState),
      baseAlcohol: get(cocktailSearchBaseAlcoholState),
      maxVolume: get(cocktailSearchMaxVolumeState),
      minVolume: get(cocktailSearchMinVolumeState),
      garnish: get(cocktailSearchGarnishState),
      cocktailStyle: get(cocktailSearchCocktailStyleState),
      seasonalStyle: get(cocktailSearchSeasonalStyleState),
    };
  },
  set: ({ set, reset }, newState) => {
    if (newState instanceof DefaultValue) {
      reset(cocktailSearchQueryState);
      reset(cocktailSearchSizeState);
      reset(cocktailSearchPageState);
      reset(cocktailSearchIsAscState);
      reset(cocktailSearchSortByState);
      reset(cocktailSearchBaseAlcoholState);
      reset(cocktailSearchMaxVolumeState);
      reset(cocktailSearchMinVolumeState);
      reset(cocktailSearchGarnishState);
      reset(cocktailSearchCocktailStyleState);
      reset(cocktailSearchSeasonalStyleState);

      return;
    }
    const { nameOrIngredient, size, page, isAsc, sortBy, maxVolume, minVolume, garnish, cocktailStyle, seasonalStyle } =
      newState;
    set(cocktailSearchQueryState, nameOrIngredient || '');
    set(cocktailSearchSizeState, size);
    set(cocktailSearchPageState, page);
    set(cocktailSearchIsAscState, isAsc);
    set(cocktailSearchSortByState, sortBy || CocktailSort.VIEW_COUNT);
    set(cocktailSearchCocktailStyleState, cocktailStyle);
    set(cocktailSearchMaxVolumeState, maxVolume);
    set(cocktailSearchMinVolumeState, minVolume);
    set(cocktailSearchGarnishState, garnish);
    set(cocktailSearchCocktailStyleState, cocktailStyle);
    set(cocktailSearchSeasonalStyleState, seasonalStyle);
  },
});
