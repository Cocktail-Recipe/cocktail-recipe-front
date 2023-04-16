interface CocktailBaseAlcoholValueInterface {
  name: string;
  src: (baseUrl: string) => string;
}

const CocktailBaseAlcoholMap: { [index: string]: CocktailBaseAlcoholValueInterface } = {
  RUM: { name: '럼', src: (baseUrl: string) => baseUrl + '/baseAlcohol/rum.png' },
  VODKA: { name: '보드카', src: (baseUrl: string) => baseUrl + '/baseAlcohol/vodka.png' },
  WHISKEY: { name: '위스키', src: (baseUrl: string) => baseUrl + '/baseAlcohol/whisky.png' },
  GIN: { name: '진', src: (baseUrl: string) => baseUrl + '/baseAlcohol/gin.png' },
  TEQUILA: { name: '데킬라', src: (baseUrl: string) => baseUrl + '/baseAlcohol/tequila.png' },
  SOJU: { name: '소주', src: (baseUrl: string) => baseUrl + '/baseAlcohol/soju.png' },
  BRANDY: { name: '브랜디', src: (baseUrl: string) => baseUrl + '/baseAlcohol/brandy.png' },
  NON_ALCOHOLIC: { name: '무알콜', src: (baseUrl: string) => baseUrl + '/baseAlcohol/non-alcohol.png' },
};

export type CocktailBaseAlcoholType = keyof typeof CocktailBaseAlcoholMap;

export function isCocktailBaseAlcoholType(baseAlcohol: any): baseAlcohol is CocktailBaseAlcoholType {
  if (typeof baseAlcohol !== 'string') return false;
  return CocktailBaseAlcoholMap.hasOwnProperty(baseAlcohol);
}

export function getBaseAlcoholKeys(): CocktailBaseAlcoholType[] {
  return Object.keys(CocktailBaseAlcoholMap) as CocktailBaseAlcoholType[];
}

export function getBaseAlcoholValue(key: CocktailBaseAlcoholType) {
  return CocktailBaseAlcoholMap[key];
}
