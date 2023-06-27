import { Image, Card, List } from 'antd';
import React, { ReactElement } from 'react';
import { Cocktail } from '@/models/cocktail.model';
import { ShareAltOutlined } from '@ant-design/icons';
import { getCocktailHashTags } from '@/utils/cocktail';
import CountContainer from '../common/CountContainer';
import CocktailLike from '../cocktail-filter/CocktailLike';

const { Meta } = Card;

interface CocktailInfoProps {
  cocktail: Cocktail;
}

const CocktailInfo = ({ cocktail }: CocktailInfoProps): ReactElement => {
  const {
    englishName,
    koreanName,
    viewCount,
    likeCount,
    commentCount,
    introduce,
    thumbnail,
    baseAlcohol,
    seasonalStyle,
    cocktailStyle,
    volume,
  } = cocktail;

  return (
    <Card hoverable cover={<Image src={thumbnail} alt={englishName} />}>
      <Meta
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {koreanName} {englishName}
            </div>
            <div style={{ display: 'flex', alignSelf: 'center' }}>
              <ShareAltOutlined />
              <CocktailLike containsNameLabel={false} />
            </div>
          </div>
        }
        description={
          <List.Item key={englishName}>
            <List.Item.Meta
              title={getCocktailHashTags({
                baseAlcohol,
                seasonalStyle,
                cocktailStyle,
                volume,
                koreanName,
              })}
              description={
                <>
                  {introduce}
                  <CountContainer
                    key={englishName}
                    viewCount={viewCount}
                    likeCount={likeCount}
                    commentCount={commentCount}
                  />
                </>
              }
            />
          </List.Item>
        }
      />
    </Card>
  );
};

export default React.memo(CocktailInfo);
