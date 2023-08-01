export interface Ingredient {
  category: string | null;
  ingredientId: number;
  name: string;
  thumbnail: string | null;
  unit: string; // ml, oz
  amount?: number;
}
