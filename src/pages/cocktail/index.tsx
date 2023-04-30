import { useRouter } from 'next/router';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { getCocktailFilter } from '@/\butils/useCocktailFilter';
import useInfiniteScroll from '@/\butils/useInfiniteScroll';
import CocktailCard from '@/components/cocktail/CocktailCard';
import CocktailGrid from '@/components/cocktail/CocktailGrid';
import SearchBar from '@/components/cocktail/SearchBar';
import SearchFilterBar from '@/components/cocktail/SearchFilterBar';
import AppLayout from '@/components/layout/AppLayout';
import { CocktailBaseAlcoholType } from '@/interfaces/inquiry/CocktailBaseAlcohol.type';
import { CocktailSeasonalType } from '@/interfaces/inquiry/CocktailSeasonal.type';
import { CocktailSortType } from '@/interfaces/inquiry/CocktailSort.type';
import { CocktailStyleType } from '@/interfaces/inquiry/CocktailStyle.type';

const Cocktail = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [sortBy, setSortBy] = useState<CocktailSortType>('viewCount');
  const [minVolume, setMinVolume] = useState<number>();
  const [maxVolume, setMaxVolume] = useState<number>();
  const [cocktailStyle, setCocktailStyle] = useState<CocktailStyleType>();
  const [baseAlcohol, setBaseAlcohol] = useState<CocktailBaseAlcoholType>();
  const [seasonalStyle, setSeasonalStyle] = useState<CocktailSeasonalType>();

  const router = useRouter();

  useEffect(() => {
    const { sortBy, baseAlcohol, cocktailStyle, seasonalStyle, minVolume, maxVolume } = getCocktailFilter(router.query);
    setSortBy(sortBy);
    setBaseAlcohol(baseAlcohol);
    setCocktailStyle(cocktailStyle);
    setSeasonalStyle(seasonalStyle);
    setMinVolume(minVolume);
    setMaxVolume(maxVolume);
  }, [router.query]);

  const { items, hasMore } = useInfiniteScroll({ containerRef });

  return (
    <AppLayout>
      <>
        <SearchBar
          sort={sortBy}
          minVolume={minVolume}
          maxVolume={maxVolume}
          base={baseAlcohol?.toString()}
          style={cocktailStyle}
          season={seasonalStyle}
        />
        <SearchFilterBar
          setSort={setSortBy}
          filter={{
            sortBy,
            minVolume,
            maxVolume,
            baseAlcohol,
            cocktailStyle,
            seasonalStyle,
          }}
        />
        <CocktailGrid>
          {items.map((cocktail, idx) => (
            <CocktailCard key={idx} cocktail={cocktail} />
          ))}
        </CocktailGrid>
        {hasMore && <div ref={containerRef}>Loading ... </div>}
      </>
    </AppLayout>
  );
};

export default Cocktail;
