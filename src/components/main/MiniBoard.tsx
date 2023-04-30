import { ReactElement } from 'react';
import { Post } from '@/models/post.model';
import CounterContainer from '../common/CountContainer';

interface MiniBoardProps {
  posts: Post[];
  name: string;
}
const MiniBoard = ({ posts, name }: MiniBoardProps): ReactElement => {
  return (
    <div>
      <div>{name}</div>
      <div>
        {posts.map(({ title, viewCount, likeCount, commentCount }, index) => (
          <div key={index}>
            <div>{title}</div>
            <CounterContainer viewCount={viewCount} likeCount={likeCount} commentCount={commentCount} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBoard;
