import { Cocktail } from '@/models/cocktail.model';
import { atom } from 'recoil';

export const cocktailListState = atom<Cocktail[]>({
  key: 'cocktailListState',
  default: [],
});
