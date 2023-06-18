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
      <Button onClick={onToggleCocktailLike}>
        <div>{containsNameLabel ? '찜' : ''}</div>
        {like ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
      </Button>
    </StyledCocktailLike>
  );
};

export default CocktailLike;
