import { List, Image } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';

import CounterContainer from '../common/CountContainer';
import HashTagContainer from '../common/HashTagContainer';
import { StyledCocktailCard } from './CocktailCard.syled';

interface CocktailCardProps {
  cocktail: Cocktail;
  onClick?: () => void;
  style: any;
}

const CocktailCard = ({ cocktail, onClick, style }: CocktailCardProps): ReactElement => {
  if (!cocktail) return <></>;

  return (
    <StyledCocktailCard style={style}>
      <List.Item onClick={onClick}>
        <List.Item.Meta
          avatar={<Image src={cocktail.thumbnail} alt={cocktail.englishName} width={150} height={150} />}
          title={cocktail.koreanName}
          description={
            <>
              <HashTagContainer cocktail={cocktail} />
              <CounterContainer
                viewCount={cocktail.viewCount}
                likeCount={cocktail.likeCount}
                commentCount={cocktail.commentCount}
              />
            </>
          }
        />
      </List.Item>
    </StyledCocktailCard>
  );
};

export default React.memo(CocktailCard);
