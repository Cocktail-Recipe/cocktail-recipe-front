import { Ingredient } from '@/models/ingredient.model';
import { atom } from 'recoil';

export const selectedIngredientsState = atom<Ingredient[]>({
  key: 'selectedIngredients',
  default: [],
});