import { addComma } from '@/\butils/number';
import {
  CocktailBaseAlcohol,
  CocktailListType,
  CocktailSeaonalStyle,
  CocktailStyle,
} from '@/interfaces/cocktail/CocktailObject.interface';
import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type CocktailCardProps = { cocktail: CocktailListType };

const Card = styled.div`
  background-color: #fff;
  min-height: 200px;
  width: 160px;
`;

const CocktailImage = styled(Image)`
  object-fit: cover;
  position: relative;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

const Tags = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

const ContentHistoryWrapper = styled.div`
  margin-top: 1px;
  display: flex;
  font-size: 8px;
  font-weight: 600;
`;

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => {
    const newTags = [];
    let index = Object.keys(CocktailBaseAlcohol).indexOf(cocktail.baseAlcohol);
    if (index !== -1) newTags.push('#' + Object.values(CocktailBaseAlcohol)[index]);

    newTags.push('#' + cocktail.volume + '도');

    index = Object.keys(CocktailStyle).indexOf(cocktail.cocktailStyle);
    if (index !== -1) newTags.push('#' + Object.values(CocktailStyle)[index]);

    index = Object.keys(CocktailSeaonalStyle).indexOf(cocktail.seasonalStyle);
    if (index !== -1) newTags.push('#' + Object.values(CocktailSeaonalStyle)[index]);

    setTags(newTags);
  }, [cocktail]);

  return (
    <Card>
      <CocktailImage
        src={'https://dsx97ocm5rfcr.cloudfront.net/main-3.png'}
        alt={cocktail.name}
        width={160}
        height={160}
      />
      <Title>{cocktail.name}</Title>
      <Tags>{tags.join(' ')}</Tags>
      <ContentHistoryWrapper>
        <Visibility style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
        <div>{addComma(cocktail.viewCount)}</div>
        <FavoriteBorder style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
        <div>{addComma(cocktail.likeCount)}</div>
        <CommentOutlined style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
        <div>{addComma(cocktail.commentCount)}</div>
      </ContentHistoryWrapper>
    </Card>
  );
};

export default CocktailCard;
