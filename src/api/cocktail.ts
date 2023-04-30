import { CocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';
import { axiosInstance } from './axios';
import { CocktailListResponse } from '@/models/cocktail.model';

const cocktailAPI = {
  getAllCocktails: (params: CocktailSearchRequestState) => {
    return axiosInstance.get<CocktailListResponse>('/app/cocktails', { params });
  },
};

export default cocktailAPI;
