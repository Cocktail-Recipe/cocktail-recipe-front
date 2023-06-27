import { ReactElement, useCallback, useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { StyledCocktailLike } from './CocktailLike.styled';
import { Button } from 'antd';

interface CocktailLikeProps {
  containsNameLabel?: boolean;
}

const CocktailLike = ({ containsNameLabel = true }: CocktailLikeProps): ReactElement => {
  const [like, setLike] = useState(false);

  const onToggleCocktailLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);

  return (
    <StyledCocktailLike>
      <Button onClick={onToggleCocktailLike} style={{ backgroundColor: like ? '#ff4e16' : '#1b1b1b' }}>
        <div>{containsNameLabel ? '찜' : ''}</div>
        {like ? <HeartFilled /> : <HeartOutlined />}
      </Button>
    </StyledCocktailLike>
  );
};

export default CocktailLike;
