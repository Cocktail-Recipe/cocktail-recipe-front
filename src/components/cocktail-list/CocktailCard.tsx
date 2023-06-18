import { List, Image, Card } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';
import { getCocktailHashTags } from '@/utils/cocktail';

import CounterContainer from '../common/CountContainer';

import { StyledCocktailCard } from './CocktailCard.styled';

interface CocktailCardProps {
  cocktail: Cocktail;
  onClick?: () => void;
  style: any;
}

const CocktailCard = ({ cocktail, onClick, style }: CocktailCardProps): ReactElement => {
  if (!cocktail) return <></>;

  const {
    thumbnail,
    englishName,
    koreanName,
    baseAlcohol,
    cocktailStyle,
    seasonalStyle,
    volume,
    likeCount,
    viewCount,
    commentCount,
  } = cocktail;

  return (
    <StyledCocktailCard style={{ ...style, width: '50%', padding: '5px' }}>
      <List.Item onClick={onClick}>
        <Card cover={<Image src={thumbnail} alt={englishName} width="100%" height={150} />}>
          <Card.Meta
            title={koreanName}
            description={
              <>
                {getCocktailHashTags({
                  baseAlcohol,
                  cocktailStyle,
                  seasonalStyle,
                  volume,
                })}
                <CounterContainer viewCount={viewCount} likeCount={likeCount} commentCount={commentCount} />
              </>
            }
          />
        </Card>
      </List.Item>
    </StyledCocktailCard>
  );
};

export default React.memo(CocktailCard);
