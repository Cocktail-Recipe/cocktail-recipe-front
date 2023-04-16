const CocktailSortMap = {
  viewCount: '조회순',
  likeCount: '찜순',
  commentCount: '댓글순',
};

export type CocktailSortType = keyof typeof CocktailSortMap;

export function isCocktailSortType(sort: any): sort is CocktailSortType {
  if (typeof sort !== 'string') return false;
  return CocktailSortMap.hasOwnProperty(sort);
}

export const sortKeys: CocktailSortType[] = Object.keys(CocktailSortMap) as CocktailSortType[];

export function getSortValue(key: CocktailSortType) {
  return CocktailSortMap[key];
}
