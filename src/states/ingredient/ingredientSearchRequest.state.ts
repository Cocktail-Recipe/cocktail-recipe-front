import { DefaultValue, atom, selector } from 'recoil';

export interface IngredientSearchRequestParamsState {
  page?: number;
  size?: number;
  categoryName?: string;
  sortBy?: string;
  name?: string;
}

const PAGE_LIMIT = 10;

export const ingredientSearchPageState = atom<number>({
  key: 'ingredientSearchPageState',
  default: PAGE_LIMIT,
});

export const ingredientSearchSizeState = atom<number>({
  key: 'ingredientSearchSizeState',
  default: 1,
});

export const ingredientSearchCategoryNameState = atom<string>({
  key: 'ingredientSearchCaategoryNameState',
  default: '',
});

export const ingredientSearchSortByState = atom<string>({
  key: 'ingredientSearchSortByState',
  //TODO: sort 기준 무엇인지
  default: 'updatedAt',
});

export const ingredientSearchNameState = atom<string | undefined>({
  key: 'ingredientSearchNameState',
  default: undefined,
});

export const ingredientSearchRequestState = selector<IngredientSearchRequestParamsState>({
  key: 'ingredientSearchRequestState',
  get: ({ get }) => {
    return {
      size: get(ingredientSearchSizeState),
      page: get(ingredientSearchPageState),
      categoryName: get(ingredientSearchCategoryNameState),
      sortBy: get(ingredientSearchSortByState),
      name: get(ingredientSearchNameState),
    };
  },
  set: ({ get, set, reset }, newState) => {
    if (newState instanceof DefaultValue) {
      reset(ingredientSearchSizeState);
      reset(ingredientSearchPageState);
      reset(ingredientSearchCategoryNameState);
      reset(ingredientSearchSortByState);
      reset(ingredientSearchNameState);

      return;
    }
    const { size, page, sortBy, categoryName, name } = newState;

    set(ingredientSearchPageState, page || get(ingredientSearchPageState));
    set(ingredientSearchSizeState, size || get(ingredientSearchSizeState));
    set(ingredientSearchCategoryNameState, categoryName || get(ingredientSearchCategoryNameState));
    set(ingredientSearchSortByState, sortBy || get(ingredientSearchSortByState));
    set(ingredientSearchNameState, name || get(ingredientSearchNameState));
  },
});
