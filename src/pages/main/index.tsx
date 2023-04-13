import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navi';
import Category from '@/components/main/Category';
import MiniBoard from '@/components/main/MiniBoard';
import PopularRecipe from '@/components/main/PopularRecipe';
import Slideshow from '@/components/main/SlideShow';

const STATIC_URL = process.env['NEXT_PUBLIC_STATIC_URL'];

const images = [
  { src: `${STATIC_URL}/main-1.png`, alt: 'Cocktail 1' },
  { src: `${STATIC_URL}/main-2.png`, alt: 'Cocktail 2' },
  { src: `${STATIC_URL}/main-3.png`, alt: 'Cocktail 3' },
];

const popularRecipes = [
  {
    src: `${STATIC_URL}/popular-1.png`,
    alt: 'popular recipe 1',
    name: '모히또',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: `${STATIC_URL}/popular-2.png`,
    alt: 'popular recipe 2',
    name: '칵테일1',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: `${STATIC_URL}/main-2.png`,
    alt: 'popular recipe 3',
    name: '칵테일2',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: `${STATIC_URL}/main-3.png`,
    alt: 'popular recipe 3',
    name: '칵테일2',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
];

const categories = [
  { src: `${STATIC_URL}/vodka.png`, name: '보드카' },
  { src: `${STATIC_URL}/whisky.png`, name: '위스키' },
  { src: `${STATIC_URL}/gin.png`, name: '진' },
  { src: `${STATIC_URL}/rum.png`, name: '럼' },
  { src: `${STATIC_URL}/tequila.png`, name: '데킬라' },
  { src: `${STATIC_URL}/soju.png`, name: '소주' },
];

const hotPosts = [
  {
    title: '강남 칵테일 맛집 추천 2023 ver.',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    title: '맛잘알만 아는 베이스 리퀴드',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    title: '모히또 먹을 바엔 준벅 먹는 EU',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
];

const eventPosts = [
  {
    title: '공지 1',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    title: '공지 2',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    title: '공지 3',
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
];

const Main = () => {
  return (
    <>
      <Navbar user={undefined} />
      <Slideshow images={images} />
      <PopularRecipe recipes={popularRecipes} />
      <Category categories={categories} />
      <MiniBoard posts={hotPosts} title="Hot 게시판" />
      <MiniBoard posts={eventPosts} title="이벤트 / 공지사항" />
      <Footer />
    </>
  );
};

export default Main;
