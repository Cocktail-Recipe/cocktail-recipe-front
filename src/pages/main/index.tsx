import { ReactElement } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CategoryBoard from '@/components/main/CategoryBoard';
import PopularRecipes from '@/components/main/PopularRecipes';
import { popularRecipes, hotPosts, eventPosts, images } from '@/__mocks__/main';
import MiniBoard from '@/components/main/MiniBoard';
import CocktailSlides from '@/components/main/CocktailSlides';

const Main = (): ReactElement => {
  return (
    <AppLayout>
      <>
        <CocktailSlides images={images} />
        <PopularRecipes recipes={popularRecipes} />
        <CategoryBoard />
        <MiniBoard posts={hotPosts} name="Hot 게시판" />
        <MiniBoard posts={eventPosts} name="이벤트 / 공지사항" />
      </>
    </AppLayout>
  );
};

export default Main;
