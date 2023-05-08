import { ReactElement, useCallback, useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import TextIcon from '@/components/common/TextIcon/TextIcon';

const CocktailLikeFilter = (): ReactElement => {
  const [like, setLike] = useState(false);

  const onToggleCocktailLikeFilter = useCallback(() => {
    setLike((prev) => !prev);
  }, []);

  return <TextIcon name="찜" icon={like ? <HeartFilled /> : <HeartOutlined />} onClick={onToggleCocktailLikeFilter} />;
};

export default CocktailLikeFilter;
