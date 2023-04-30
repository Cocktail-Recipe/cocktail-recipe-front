import { ReactElement } from 'react';
import { eventPosts, hotPosts, images, popularRecipes } from '@/__mocks__/main';
import AppLayout from '@/components/layout/AppLayout';
import Category from '@/components/main/Category';
import MiniBoard from '@/components/main/MiniBoard';
import PopularRecipe from '@/components/main/PopularRecipe';
import Slideshow from '@/components/main/SlideShow';

const Main = (): ReactElement => {
  return (
    <AppLayout>
      <>
        <Slideshow images={images} />
        <PopularRecipe recipes={popularRecipes} />
        <Category />
        <MiniBoard posts={hotPosts} title="Hot 게시판" />
        <MiniBoard posts={eventPosts} title="이벤트 / 공지사항" />
      </>
    </AppLayout>
  );
};

export default Main;
