import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type SlideProps = {
  src: string;
  alt: string;
};

interface SlideshowProps {
  images: SlideProps[];
}

const SlideshowContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 225px;
`;

const SlideshowWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const SlideshowImage = styled.div`
  min-width: 100%;
  flex-shrink: 0;
  position: relative;
  transition: transform 0.5s ease-in-out;

  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEnd = e.touches[0].clientX;
    const touchDiff = touchStart - touchEnd;
    if (touchDiff > 5) {
      // Move to the next slide
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (touchDiff < -5) {
      // Move to the previous slide
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  console.log(currentIndex);

  return (
    <SlideshowContainer>
      <SlideshowWrapper>
        {images.map(({ src, alt }, index) => (
          <SlideshowImage
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
          </SlideshowImage>
        ))}
      </SlideshowWrapper>
    </SlideshowContainer>
  );
};

export default Slideshow;
