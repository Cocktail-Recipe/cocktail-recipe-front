import { addComma } from '@/\butils/number';
import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const PopularRecipeContainer = styled.div``;

const PopularRecipeTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  padding: 16px;
`;

const PopularRecipeContentContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const PopularRecipeContentWrapper = styled.div`
  flex: 0 0 auto;
  width: 137px;
  height: 137px;
  margin: 0 8px;
  overflow: hidden;
  position: relative;
  cursor: grab;
  touch-action: pan-y;
  &:active: {
    cursor: grabbing;
  }
`;

const PopularRecipeImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const PopularRecipeContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1.5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentHeader = styled.div`
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  margin-left: 3px;
  color: #ffffff;
`;

const ContentTag = styled.div`
  margin-top: 1px;
  font-size: 8px;
  font-weight: 600;
  line-height: 10px;
  letter-spacing: 0em;
  color: #ffffff;
  margin-left: 3px;
`;

const ContentHistoryWrapper = styled.div`
  margin-top: 1px;
  display: flex;
  color: #ffffff;
  font-size: 8px;
  font-weight: 600;
`;

interface PopularRecipeContent {
  src: string;
  alt: string;
  name: string;
  tags: Array<string>;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

type PopularRecipeProps = {
  recipes: Array<PopularRecipeContent>;
};

const PopularRecipe: React.FC<PopularRecipeProps> = ({ recipes }) => {
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
    <PopularRecipeContainer>
      <PopularRecipeTitle>인기 레시피</PopularRecipeTitle>
      <PopularRecipeContentContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {recipes.map((item, index) => (
          <PopularRecipeContentWrapper key={index}>
            <PopularRecipeImage src={item.src} alt={item.name} fill />
            <PopularRecipeContent>
              <ContentHeader>{item.name}</ContentHeader>
              <ContentTag>{item.tags.map((t) => `#${t}`).join(' ')}</ContentTag>
              <ContentHistoryWrapper>
                <Visibility style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
                <div>{addComma(item.viewCount)}</div>
                <FavoriteBorder style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
                <div>{addComma(item.likeCount)}</div>
                <CommentOutlined style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
                <div>{addComma(item.commentCount)}</div>
              </ContentHistoryWrapper>
            </PopularRecipeContent>
          </PopularRecipeContentWrapper>
        ))}
      </PopularRecipeContentContainer>
    </PopularRecipeContainer>
  );
};

export default PopularRecipe;
