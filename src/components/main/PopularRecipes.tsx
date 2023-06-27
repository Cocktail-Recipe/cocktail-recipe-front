import React, { ReactElement } from 'react';
import { PopularCocktailRecipe } from '@/models/cocktail.model';
import Image from 'next/image';

import CounterContainer from '../common/CountContainer';

interface PopularRecipesProps {
  recipes: PopularCocktailRecipe[];
}

const PopularRecipes = ({ recipes }: PopularRecipesProps): ReactElement => {
  return (
    <>
      <div>인기 레시피</div>
      <div>
        {recipes.map(({ src, name, tags, viewCount, likeCount, commentCount }: PopularCocktailRecipe) => (
          <div key={`${src}-${name}`}>
            <Image src={src} alt={name} width="42" height="42" />
            <div>
              <div>{name}</div>
              <div>{tags.map((tag) => `#${tag}`)}</div>
              <CounterContainer viewCount={viewCount} likeCount={likeCount} commentCount={commentCount} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(PopularRecipes);
