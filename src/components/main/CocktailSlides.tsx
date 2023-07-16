import { SlideImage } from '@/models/image.model';
import { ReactElement } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { StyledCocktailSlides } from './CocktailSlides.styled';

interface CocktailSlidesProps {
  images: SlideImage[];
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
};

const CocktailSlides = ({ images }: CocktailSlidesProps): ReactElement => {
  return (
    <StyledCocktailSlides>
      <Slider {...settings}>
        {images.map(({ src, alt }: SlideImage) => (
          <Image key={src} src={src} alt={alt} width={100} height={300} />
        ))}
      </Slider>
    </StyledCocktailSlides>
  );
};

export default CocktailSlides;
