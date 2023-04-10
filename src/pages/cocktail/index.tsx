import useInfiniteScroll from '@/\butils/useInfiniteScroll';
import CocktailCard from '@/components/cocktail/CocktailCard';
import CocktailGrid from '@/components/cocktail/CocktailGrid';
import SearchBar from '@/components/cocktail/SearchBar';
import SearchFilter from '@/components/cocktail/SearchFilter';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navi';
import { useRef, useState } from 'react';

const Cocktail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { items, hasMore } = useInfiniteScroll({ containerRef });

  
  const [sortBy, setSortBy] = useState('');
  const [baseAlcohol, setBaseAlcohol] = useState('');
  const [volume, setVolume] = useState({ min: 0, max: 0 });
  const [style, setStyle] = useState(null);
  const [seasonal, setSeasonal] = useState('');

  return (
    <>
      <Navbar user={undefined} />
      <SearchBar />
      <SearchFilter />
      <CocktailGrid>
        {items.map((cocktail, idx) => (
          <CocktailCard key={idx} cocktail={cocktail} />
        ))}
      </CocktailGrid>
      {hasMore && <div ref={containerRef}>Loading ... </div>}
      <Footer />
    </>
  );
};

export default Cocktail;
