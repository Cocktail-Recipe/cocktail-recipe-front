import CocktailCard from '@/components/cocktail/CocktailCard';
import CocktailGrid from '@/components/cocktail/CocktailGrid';
import SearchBar from '@/components/cocktail/SearchBar';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navi';
import { CocktailList } from '@/interfaces/CocktailList';
import axios from 'axios';

const Cocktail = ({ cocktails }: { cocktails: CocktailList }) => {
  return (
    <>
      <Navbar user={undefined} />
      <SearchBar />
      <CocktailGrid>
        {cocktails.map((cocktail, idx) => (
          <CocktailCard key={idx} cocktail={cocktail} />
        ))}
      </CocktailGrid>
      <Footer />
    </>
  );
};

interface QueryParam {
  query: { query: string };
}

export async function getServerSideProps({ query }: QueryParam) {
  const value = query['query'];
  const response = await axios.get('http://localhost:8080/app/cocktails', { params: { nameOrIngredient: value } });

  return { props: { cocktails: response.data.result.content } };
}

export default Cocktail;
