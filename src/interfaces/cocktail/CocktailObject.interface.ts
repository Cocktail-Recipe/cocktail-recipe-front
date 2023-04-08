export interface CocktailListType {
  cockTailId: number;
  status: CocktailStatus;
  name: string;
  baseAlcohol: string;
  volume: number;
  cocktailStyle: CocktailStyle;
  seasonalStyle: CocktailSeaonalStyle;
  garnish: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  thumbnail: string;
}

export enum CocktailStatus {
  VALID = '',
  DELETED = '',
  BLACKLIST = '',
  DORMANT = '',
  SUCCESS = '',
  FAIL = '',
  USED = '',
  EXPIRED = '',
  RESERVATION = '',
}

export enum CocktailBaseAlcohol {
  RUM = '럼',
  VODKA = '보드카',
  WHISKEY = '위스키',
  GIN = '진',
  TEQUILA = '데킬라',
  SOJU = '소주',
  BRANDY = '브랜디',
  NON_ALCOHOLIC = '논알콜',
}

export enum CocktailStyle {
  CLASSIC = '클래식',
  SWEET = '달달',
  FRUITY = '과일',
  CREAMY = '크림',
  SOUR = '사워',
}

export enum CocktailSeaonalStyle {
  SPRING = '봄',
  SUMMER = '여름',
  FALL = '가을',
  WINTER = '겨울',
}
