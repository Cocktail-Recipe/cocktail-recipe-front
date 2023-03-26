import Image from 'next/image';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  padding: 16px;
`;

const ContentContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  padding: 0 16px;
`;

const ContentWrapper = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 65px;
  height: 65px;
  margin: 0 8px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: grab;
  touch-action: pan-y;
  &:active: {
    cursor: grabbing;
  }
`;

const CategoryImage = styled(Image)`
  object-fit: cover;
  position: relative;
`;

const CategoryName = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  color: #6a6868;
`;

interface Category {
  src: string;
  name: string;
}

type CategoryProps = {
  categories: Array<Category>;
};

const Category: React.FC<CategoryProps> = ({ categories }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX !== null) {
      const diffX = startX - event.touches[0].clientX;
      containerRef.current?.scrollTo({ left: scrollLeft + diffX, behavior: 'smooth' });
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  return (
    <Container>
      <Title>카테고리</Title>
      <ContentContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {categories.map((item, index) => (
          <ContentWrapper key={index}>
            <CategoryImage src={item.src} alt={item.name} width={42} height={42} />
            <CategoryName>{item.name}</CategoryName>
          </ContentWrapper>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Category;
