import { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import cocktailAPI from '@/api/cocktail';
import CocktailInfo from '@/components/cocktail-info/CocktailInfo';
import CocktailIngredientContainer from '@/components/cocktail-ingredient/CocktailIngredientContainer';
import CocktailRecipe from '@/components/cocktail-recipe/CocktailRecipe';
import AppLayout from '@/components/layout/AppLayout';
import HeaderWithLinks from '@/components/layout/header/HeaderWithLinks';
import { Cocktail } from '@/models/cocktail.model';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface CocktailDetailPageProps {
  cocktail: Cocktail | null;
}

const CocktailDetailPage = ({ cocktail }: CocktailDetailPageProps): ReactElement => {
  const router = useRouter();
  const onClickBacklink = useCallback(() => {
    router.back();
  }, [router]);

  if (!cocktail) return <></>;

  return (
    <AppLayout
      header={<HeaderWithLinks backLink={<ArrowLeftOutlined onClick={onClickBacklink} />} />}
      className="cocktail-detail-page"
      hasFooter={false}
    >
      <>
        <CocktailInfo cocktail={cocktail} />
        <CocktailIngredientContainer ingredients={cocktail.ingredientList} />
        <CocktailRecipe recipe={cocktail.recipe} />
      </>
    </AppLayout>
  );
};

const getCocktailInfo = async (cocktailId: number) => {
  try {
    const { data } = await cocktailAPI.getCocktail(cocktailId);
    return data.result;
  } catch (e: unknown) {
    return null;
  }
};

export const getServerSideProps = async ({ params }: { params: { cocktailId: number } }) => {
  const { cocktailId } = params;
  const cocktail = await getCocktailInfo(cocktailId);

  return {
    props: {
      cocktail,
    },
  };
};

export default CocktailDetailPage;
