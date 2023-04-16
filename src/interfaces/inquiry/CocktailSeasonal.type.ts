interface CocktailSeasonalValueInterface {
  name: string;
}

const CocktailSeasonalMap: { [index: string]: CocktailSeasonalValueInterface } = {
  SPRING: { name: '봄' },
  SUMMER: { name: '여름' },
  FALL: { name: '가을' },
  WINTER: { name: '겨울' },
};

export type CocktailSeasonalType = keyof typeof CocktailSeasonalMap;

export function isCocktailSeasonalType(season: any): season is CocktailSeasonalType {
  if (typeof season !== 'string') return false;
  return CocktailSeasonalMap.hasOwnProperty(season);
}

export function getSeasonalKeys(): CocktailSeasonalType[] {
  return Object.keys(CocktailSeasonalMap) as CocktailSeasonalType[];
}

export function getSeasonalValue(key: CocktailSeasonalType) {
  return CocktailSeasonalMap[key];
}
