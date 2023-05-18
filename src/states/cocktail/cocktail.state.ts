import { Cocktail } from '@/models/cocktail.model';
import { atom } from 'recoil';

export const selectedCocktailState = atom<Cocktail | null>({
  key: 'selectedCocktail',
  default: null,
});
