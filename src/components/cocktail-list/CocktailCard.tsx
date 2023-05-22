import { List, Image } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';
import { getCocktailHashTags } from '@/utils/cocktail';

import CounterContainer from '../common/CountContainer';
import { StyledCocktailCard } from './CocktailCard.syled';

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
    <StyledCocktailCard style={style}>
      <List.Item onClick={onClick}>
        <List.Item.Meta
          avatar={<Image src={thumbnail} alt={englishName} width={150} height={150} />}
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
      </List.Item>
    </StyledCocktailCard>
  );
};

export default React.memo(CocktailCard);
