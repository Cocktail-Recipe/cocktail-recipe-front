import { IngredientCategory } from '@/enum/ingredient';

export const ingredientCategoryLabelMap: { [key in IngredientCategory]: string } = {
  [IngredientCategory.ALCOHOL]: '주류',
  [IngredientCategory.LIQUOR]: '리큐르',
  [IngredientCategory.JUICE]: '주스',
  [IngredientCategory.SOFT_DRINK]: '탄산음료',
  [IngredientCategory.SYRUP]: '시럽',
  [IngredientCategory.FRUIT]: '과일',
  [IngredientCategory.ETC]: '기타',
};
