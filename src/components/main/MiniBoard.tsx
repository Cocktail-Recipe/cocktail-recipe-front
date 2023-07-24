import { ReactElement } from 'react';
import { Typography } from 'antd';
import { Post } from '@/models/post.model';
import CounterContainer from '../common/CountContainer';

import { StyledMiniBoard } from './MiniBoard.styled';

interface MiniBoardProps {
  posts: Post[];
  name: string;
}

const MiniBoard = ({ posts, name }: MiniBoardProps): ReactElement => {
  return (
    <StyledMiniBoard>
      <Typography.Text>{name}</Typography.Text>
      <div className="post-content-list">
        {posts.map(({ title, viewCount, likeCount, commentCount }, index) => (
          <div key={index} className="post-content-wrapper">
            <div>{title}</div>
            <CounterContainer viewCount={viewCount} likeCount={likeCount} commentCount={commentCount} />
          </div>
        ))}
      </div>
    </StyledMiniBoard>
  );
};

export default MiniBoard;
