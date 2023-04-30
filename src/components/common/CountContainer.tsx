import React, { ReactElement } from 'react';
import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import TextIcon from './TextIcon/TextIcon';

interface CounterContainerProps {
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

const CounterContainer = ({ likeCount, viewCount, commentCount }: CounterContainerProps): ReactElement => {
  return (
    <div>
      <TextIcon url="" name={viewCount} icon={<Visibility />} isColumnAligned={true} />
      <TextIcon url="" name={likeCount} icon={<FavoriteBorder />} isColumnAligned={true} />
      <TextIcon url="" name={commentCount} icon={<CommentOutlined />} isColumnAligned={true} />
    </div>
  );
};

export default React.memo(CounterContainer);
