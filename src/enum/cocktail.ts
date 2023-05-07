export enum CocktailBaseAlcohol {
  RUM = 'RUM',
  VODKA = 'VODKA',
  WHISKEY = 'WHISKEY',
  GIN = 'GIN',
  TEQUILA = 'TEQUILA',
  SOJU = 'SOJU',
  BRANDY = 'BRANDY',

  // NON_ALCOHOLIC 이랑 혼용되고 있음 -> 명칭 하나로 통일해 줄 수 있는지 요청
  // 1. 이미지 파일은 NON-ALCOHOL.png
  // 2. 서버 칵테일 데이터는 { baseAlcohol: NON_ALCOHOLIC }
  NON_ALCOHOL = 'NON_ALCOHOLIC',
}

export enum CocktailStatus {
  VALID = 'valid',
  DELETED = 'deleted',
  BLACKLIST = 'blacklist',
  DORMANT = 'dormant',
  SUCCESS = 'success',
  FAIL = 'fail',
  USED = 'used',
  EXPIRED = 'expired',
  RESERVATION = 'reservation',
}

export enum CocktailSeasonalStyle {
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  FALL = 'FALL',
  WINTER = 'WINTER',
}

export enum CocktailFlavor {
  CLASSIC = 'CLASSIC',
  SWEET = 'SWEET',
  FRUITY = 'FRUITY',
  CREAMY = 'CREAMY',
  SOUR = 'SOUR',
}

export enum CocktailSort {
  VIEW_COUNT = 'viewCount',
  LIKE_COUNT = 'likeCount',
  COMMENT_COUNT = 'commentCount',
}
