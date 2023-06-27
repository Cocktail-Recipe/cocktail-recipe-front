import { ReactElement } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CategoryBoard from '@/components/main/CategoryBoard';
import PopularRecipes from '@/components/main/PopularRecipes';
import { popularRecipes, hotPosts, images } from '@/__mocks__/main';
import MiniBoard from '@/components/main/MiniBoard';
import CocktailSlides from '@/components/main/CocktailSlides';
import Header from '@/components/layout/header/Header';

const MainPage = (): ReactElement => {
  return (
    <AppLayout header={<Header />}>
      <>
        <CocktailSlides images={images} />
        <PopularRecipes recipes={popularRecipes} />
        <CategoryBoard />
        <MiniBoard posts={hotPosts} name="Hot 게시판" />
      </>
    </AppLayout>
  );
};

export default MainPage;
