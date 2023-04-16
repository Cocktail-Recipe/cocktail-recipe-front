interface CocktailStyleValueInterface {
  name: string;
  src: (baseUrl: string) => string;
}

const CocktailStyleMap: { [index: string]: CocktailStyleValueInterface } = {
  CLASSIC: { name: '클래식', src: (baseUrl: string) => baseUrl + '/style/classic.png' },
  SWEET: { name: '스위트', src: (baseUrl: string) => baseUrl + '/style/sweet.png' },
  FRUITY: { name: '프루티', src: (baseUrl: string) => baseUrl + '/style/fruity.png' },
  CREAMY: { name: '크리미', src: (baseUrl: string) => baseUrl + '/style/creamy.png' },
  SOUR: { name: '샤워', src: (baseUrl: string) => baseUrl + '/style/sour.png' },
};

export type CocktailStyleType = keyof typeof CocktailStyleMap;

export function isCocktailStyleType(style: any): style is CocktailStyleType {
  if (typeof style !== 'string') return false;
  return CocktailStyleMap.hasOwnProperty(style);
}

export function getStyleKeys(): CocktailStyleType[] {
  return Object.keys(CocktailStyleMap) as CocktailStyleType[];
}

export function getStyleValue(key: CocktailStyleType) {
  return CocktailStyleMap[key];
}
