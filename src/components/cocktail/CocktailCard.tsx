import { List, Image } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';

import CounterContainer from '../common/CountContainer';
import HashTagContainer from '../common/HashTagContainer';

interface CocktailCardProps {
  cocktail: Cocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps): ReactElement => {
  const { thumbnail, englishName, koreanName, viewCount, likeCount, commentCount } = cocktail;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Image src={thumbnail} alt={englishName} width={150} height={150} />}
        title={koreanName}
        description={
          <>
            <HashTagContainer cocktail={cocktail} />
            <CounterContainer viewCount={viewCount} likeCount={likeCount} commentCount={commentCount} />
          </>
        }
      />
    </List.Item>
  );
};

export default React.memo(CocktailCard);
