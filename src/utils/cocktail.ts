const IMG_BASE_URL = process.env.NEXT_PUBLIC_STATIC_URL || '';

export const getCocktailImageSrc = (alcohol: string) => {
  return `${IMG_BASE_URL}/baseAlcohol/${alcohol}.png`;
};
