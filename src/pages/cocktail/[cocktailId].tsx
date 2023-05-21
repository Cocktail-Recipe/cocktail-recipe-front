import { ReactElement } from 'react';
import cocktailAPI from '@/api/cocktail';
import CocktailInfo from '@/components/cocktail-info/CocktailInfo';
import CocktailIngredientContainer from '@/components/cocktail-ingredient/CocktailIngredientContainer';
import CocktailRecipe from '@/components/cocktail-recipe/CocktailRecipe';
import AppLayout from '@/components/layout/AppLayout';
import HeaderWithBacklink from '@/components/layout/header/HeaderWithBacklink';
import { Cocktail } from '@/models/cocktail.model';

interface CocktailDetailPageProps {
  cocktail: Cocktail | null;
}

const CocktailDetailPage = ({ cocktail }: CocktailDetailPageProps): ReactElement => {
  if (!cocktail) return <></>;

  return (
    <AppLayout header={<HeaderWithBacklink />} style={{ height: '100%' }}>
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
