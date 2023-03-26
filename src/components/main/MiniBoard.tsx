import { addComma } from '@/\butils/number';
import { CommentOutlined, FavoriteBorder, Visibility } from '@material-ui/icons';
import styled from 'styled-components';

interface MiniPost {
  title: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

type MiniBoardProps = {
  posts: Array<MiniPost>;
  title: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  padding: 16px;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
`;

const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

const PostTitle = styled.div`
  margin-left: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const ContentHistoryWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  margin-top: 1px;
  font-size: 8px;
  font-weight: 600;
`;

const MiniBoard: React.FC<MiniBoardProps> = ({ posts, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PostList>
        {posts.map((post, index) => (
          <PostItem key={index}>
            <PostTitle>{post.title}</PostTitle>
            <ContentHistoryWrapper>
              <Visibility style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
              <div>{addComma(post.viewCount)}</div>
              <FavoriteBorder style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
              <div>{addComma(post.likeCount)}</div>
              <CommentOutlined style={{ width: 10, height: 10, marginLeft: '3px', marginRight: '1px' }} />
              <div>{addComma(post.commentCount)}</div>
            </ContentHistoryWrapper>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
};

export default MiniBoard;
