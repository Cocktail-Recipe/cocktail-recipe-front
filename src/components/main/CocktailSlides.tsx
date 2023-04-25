import { SlideImage } from '@/interfaces/image';
import { ReactElement } from 'react';
import Image from 'next/image';

interface CocktailSlidesProps {
  images: SlideImage[];
}

const CocktailSlides = ({ images }: CocktailSlidesProps): ReactElement => {
  return (
    <div>
      {images.map(({ src, alt }: SlideImage) => (
        <Image key={src} src={src} alt={alt} width={100} height={100} />
      ))}
    </div>
  );
};

export default CocktailSlides;
