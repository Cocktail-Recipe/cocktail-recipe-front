import { ReactElement } from 'react';
import { PopularCocktailRecipe } from '@/interfaces/cocktail';
import Image from 'next/image';
import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import LinkIcon from '../common/LinkIcon/LinkIcon';

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
              <div>
                <LinkIcon url="" name={viewCount} icon={<Visibility />} isColumnAligned={true} />
                <LinkIcon url="" name={likeCount} icon={<FavoriteBorder />} isColumnAligned={true} />
                <LinkIcon url="" name={commentCount} icon={<CommentOutlined />} isColumnAligned={true} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularRecipes;
