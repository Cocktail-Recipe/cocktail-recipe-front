import { ReactElement, useCallback, useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import TextIcon from '@/components/common/TextIcon/TextIcon';

interface CocktailLikeProps {
  containsNameLabel?: boolean;
}

const CocktailLike = ({ containsNameLabel = true }: CocktailLikeProps): ReactElement => {
  const [like, setLike] = useState(false);

  const onToggleCocktailLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);

  return (
    <TextIcon
      name={containsNameLabel ? '찜' : ''}
      icon={like ? <HeartFilled /> : <HeartOutlined />}
      onClick={onToggleCocktailLike}
    />
  );
};

export default CocktailLike;
