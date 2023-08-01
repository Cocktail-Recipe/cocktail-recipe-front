import { IngredientCreateBodyState, IngredientSearchRequestParamsState } from '@/states/ingredient/ingredient.state';
import { axiosInstance } from './axios';

const ingredientAPI = {
  getAllIngredients: (params: IngredientSearchRequestParamsState) => {
    return axiosInstance.get('/app/ingredients/', { params });
  },
  createIngredient: (ingredient: IngredientCreateBodyState) => {
    return axiosInstance.post('/app/ingredients', { body: ingredient });
  },
  createIngredientImage: (ingredientId: number, imageStr: string) => {
    return axiosInstance.post(`/app/ingredients/${ingredientId}/thumbnails`, {body: {}});
  },
};

export default ingredientAPI;
