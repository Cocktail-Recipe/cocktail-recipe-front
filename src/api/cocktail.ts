import { CocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';
import { CocktailListResponse } from '@/models/cocktail.model';
import { axiosInstance } from './axios';

const cocktailAPI = {
  getAllCocktails: (params: CocktailSearchRequestState) => {
    return axiosInstance.get<CocktailListResponse>('/app/cocktails/', { params });
  },
};

export default cocktailAPI;
