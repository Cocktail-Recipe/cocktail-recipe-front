import { Cocktail } from '@/models/cocktail.model';
import { Typography, Image, Card, List, Avatar } from 'antd';
import { ReactElement } from 'react';
import CountContainer from '../common/CountContainer';
import HashTagContainer from '../common/HashTagContainer';
import CocktailLike from '../cocktail-filter/CocktailLike';
import { ShareAltOutlined } from '@ant-design/icons';

interface CocktailInfoProps {
  cocktail: Cocktail;
}

const { Meta } = Card;

const CocktailInfo = ({ cocktail }: CocktailInfoProps): ReactElement => {
  const { englishName, koreanName, viewCount, likeCount, commentCount, introduce } = cocktail;

  return (
    <>
      <Card hoverable cover={<Image src={cocktail.thumbnail} alt={cocktail.englishName} />} actions={[]}>
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
                title={<HashTagContainer key={cocktail.englishName} cocktail={cocktail} />}
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
    </>
  );
};

export default CocktailInfo;
