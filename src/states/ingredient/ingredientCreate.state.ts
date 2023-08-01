import { atom } from 'recoil';

export interface IngredientSearchRequestParamsState {
  page?: number;
  size?: number;
  categoryName?: string;
  sortBy?: string;
  name?: string;
}

export interface IngredientCreateBodyState {
  categoryName: string;
  name: string;
  unit: string; // ml, oz
}

export const ingredientCategoryState = atom<string | null>({
  key: 'ingredientCategoryState',
  default: '',
});

export const ingredeintIdState = atom<number | undefined>({
  key: 'ingredientIdState',
  default: 0,
});

export const ingredientNameState = atom<string>({
  key: 'ingredientNameState',
  default: '',
});

export const ingredientThumbnailState = atom<string | null>({
  key: 'ingredientThumbnailState',
  default: null,
});

export const ingredientUnitState = atom<string>({
  key: 'ingredientUnitState',
  default: 'ml',
});

export const ingredietnAmountState = atom<number>({
  key: 'ingredientAmountState',
  default: 0,
});
