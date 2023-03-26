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
  border-bottom-left-radius: 100px 20px;
  border-bottom-right-radius: 100px 20px;
  margin-bottom: 20px;
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
  const [touchDiff, setTouchDiff] = useState(0);
  const length = images.length;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEnd = e.touches[0].clientX;
    const touchDiff = touchStart - touchEnd;
    setTouchDiff(touchDiff);
  };

  const handleTouchEnd = () => {
    if (touchDiff > 5) {
      // Move to the next slide
      setCurrentIndex(currentIndex === length - 1 ? currentIndex : currentIndex + 1);
    } else if (touchDiff < -5) {
      // Move to the previous slide
      setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
    }

    setTouchStart(0);
    setTouchDiff(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (touchStart === 0) {
        setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [length, touchStart]);

  return (
    <SlideshowContainer>
      <SlideshowWrapper>
        {images.map(({ src, alt }, index) => (
          <SlideshowImage
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </SlideshowImage>
        ))}
      </SlideshowWrapper>
    </SlideshowContainer>
  );
};

export default Slideshow;
