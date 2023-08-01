import { CocktailSearchRequestParamsState } from '@/states/cocktail/cocktailSearchRequest.state';
import { CocktailListResponse, CocktailResponse } from '@/models/cocktail.model';
import { axiosInstance } from './axios';

const cocktailAPI = {
  getAllCocktails: (params: CocktailSearchRequestParamsState) => {
    return axiosInstance.get<CocktailListResponse>('/app/cocktails/', { params });
  },
  getCocktail: (cocktailId: number) => {
    return axiosInstance.get<CocktailResponse>(`/app/cocktails/${cocktailId}`);
  },
};

export default cocktailAPI;
