import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle } from '@/enum/cocktail';
import { Ingredient } from '@/models/ingredient.model';
import { DefaultValue, atom, selector } from 'recoil';

export interface CocktailEditInputState {
  koreanName?: string;
  englishName?: string;
  baseAlcohol?: CocktailBaseAlcohol;
  volume?: number;
  cocktailStyle?: CocktailFlavor;
  seasonalStyle?: CocktailSeasonalStyle;
  introduce?: string;
  image?: Blob | MediaSource;
  ingredientList: Ingredient[];
  recipe?: string;
}

export const cocktailKoreanNameState = atom<string | undefined>({
  key: 'cocktailKoreanNameState',
  default: undefined,
});

export const cocktailEnglishNameState = atom<string | undefined>({
  key: 'cocktailEnglishNameState',
  default: undefined,
});

export const cocktailBaseAlcoholState = atom<CocktailBaseAlcohol | undefined>({
  key: 'cocktailBaseAlcoholState',
  default: undefined,
});

export const cocktailVolumeState = atom<number | undefined>({
  key: 'cocktailVolumeState',
  default: undefined,
});

export const cocktailStyleState = atom<CocktailFlavor | undefined>({
  key: 'cocktailStyleState',
  default: undefined,
});

export const cocktailSeasonalState = atom<CocktailSeasonalStyle | undefined>({
  key: 'cocktailSeasonalState',
  default: undefined,
});

export const cocktailIntroduceState = atom<string | undefined>({
  key: 'cocktailIntroduceState',
  default: undefined,
});

export const cocktailImageState = atom<Blob | MediaSource | undefined>({
  key: 'cocktailImageState',
  default: undefined,
});

export const cocktailIngredientListState = atom<Ingredient[]>({
  key: 'cocktailIngredientListState',
  default: [],
});

export const cocktailRecipeState = atom<string | undefined>({
  key: 'cocktailRecipeState',
  default: undefined,
});

export const cocktailEditInputState = selector<CocktailEditInputState>({
  key: 'cocktailEditInputState',
  get: ({ get }) => {
    return {
      koreanName: get(cocktailKoreanNameState),
      englishName: get(cocktailEnglishNameState),
      baseAlcohol: get(cocktailBaseAlcoholState),
      volume: get(cocktailVolumeState),
      cocktailStyle: get(cocktailStyleState),
      seasonalStyle: get(cocktailSeasonalState),
      introduce: get(cocktailIntroduceState),
      image: get(cocktailImageState),
      ingredientList: get(cocktailIngredientListState) || [],
      recipe: get(cocktailRecipeState),
    };
  },
  set: ({ get, set, reset }, newState) => {
    if (newState instanceof DefaultValue) {
      reset(cocktailKoreanNameState);
      reset(cocktailEnglishNameState);
      reset(cocktailBaseAlcoholState);
      reset(cocktailVolumeState);
      reset(cocktailStyleState);
      reset(cocktailSeasonalState);
      reset(cocktailIntroduceState);
      reset(cocktailImageState);
      reset(cocktailIngredientListState);
      reset(cocktailRecipeState);

      return;
    }

    const {
      koreanName,
      englishName,
      baseAlcohol,
      volume,
      cocktailStyle,
      seasonalStyle,
      introduce,
      image,
      ingredientList,
      recipe,
    } = newState;

    set(cocktailKoreanNameState, koreanName || get(cocktailKoreanNameState));
    set(cocktailEnglishNameState, englishName || get(cocktailEnglishNameState));
    set(cocktailBaseAlcoholState, baseAlcohol || get(cocktailBaseAlcoholState));
    set(cocktailVolumeState, volume || get(cocktailVolumeState));
    set(cocktailStyleState, cocktailStyle || get(cocktailStyleState));
    set(cocktailSeasonalState, seasonalStyle || get(cocktailSeasonalState));
    set(cocktailIntroduceState, introduce || get(cocktailIntroduceState));
    set(cocktailImageState, image || get(cocktailImageState));
    set(cocktailIngredientListState, ingredientList || get(cocktailIngredientListState));
    set(cocktailRecipeState, recipe || get(cocktailRecipeState));
  },
});
