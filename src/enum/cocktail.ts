export enum CocktailBaseAlcohol {
  RUM = 'RUM',
  VODKA = 'VODKA',
  WHISKEY = 'WHISKEY',
  GIN = 'GIN',
  TEQUILA = 'TEQUILA',
  SOJU = 'SOJU',
  BRANDY = 'BRANDY',
  NON_ALCOHOL = 'NON_ALCOHOL',
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
