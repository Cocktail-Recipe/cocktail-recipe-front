import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import { ReactElement } from 'react';
import { Post } from '@/interfaces/post';
import LinkIcon from '../common/LinkIcon/LinkIcon';

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
            <div>
              <LinkIcon url="" name={viewCount} icon={<Visibility />} isColumnAligned={true} />
              <LinkIcon url="" name={likeCount} icon={<FavoriteBorder />} isColumnAligned={true} />
              <LinkIcon url="" name={commentCount} icon={<CommentOutlined />} isColumnAligned={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBoard;
