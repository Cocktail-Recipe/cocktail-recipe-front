import { Ingredient } from '@/models/ingredient.model';
import { atom } from 'recoil';

export const ingredientListState = atom<Ingredient[]>({
  key: 'ingredientListState',
  default: [],
});
