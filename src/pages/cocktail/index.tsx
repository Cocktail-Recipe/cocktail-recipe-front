import useInfiniteScroll from '@/\butils/useInfiniteScroll';
import CocktailCard from '@/components/cocktail/CocktailCard';
import CocktailGrid from '@/components/cocktail/CocktailGrid';
import SearchBar from '@/components/cocktail/SearchBar';
import SearchFilter from '@/components/cocktail/SearchFilter';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navi';
import { CocktailSortType, isCocktailSortType } from '@/interfaces/inquiry/CocktailInquiry';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Cocktail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sortBy, setSortBy] = useState<CocktailSortType>('viewCount');
  const [volume, setVolume] = useState<{ min: number | undefined; max: number | undefined }>({
    min: undefined,
    max: undefined,
  });
  const [cocktailStyle, setCocktailStyle] = useState<string | undefined>();
  const [baseAlcohol, setBaseAlcohol] = useState<string | undefined>();
  const [seasonalStyle, setSeasonalStyle] = useState<string | undefined>();
  const [ready, setReady] = useState(false);

  const { items, hasMore } = useInfiniteScroll({
    containerRef,
    ready,
    filter: {
      sortBy,
      baseAlcohol,
      maxVolume: volume.max,
      minVolume: volume.min,
      cocktailStyle,
      seasonalStyle,
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (isCocktailSortType(router.query?.sort)) {
      setSortBy(router.query.sort);
    }

    if (typeof router.query?.style === 'string') {
      setCocktailStyle(router.query.style);
    }

    if (typeof router.query?.minVolumn === 'string') {
      setVolume((v) => ({ max: v.max, min: Number.parseInt(router.query.minVolumn as string) }));
    }

    if (typeof router.query?.maxVolumn === 'string') {
      setVolume((v) => ({ min: v.min, max: Number.parseInt(router.query.maxVolumn as string) }));
    }

    if (typeof router.query?.base === 'string') {
      setBaseAlcohol(router.query.base);
    }

    if (typeof router.query?.season === 'string') {
      setSeasonalStyle(router.query.season);
    }
  }, [router.query]);

  return (
    <>
      <Navbar user={undefined} />
      <SearchBar
        sort={sortBy}
        minVolume={volume.min}
        maxVolume={volume.max}
        base={baseAlcohol}
        style={cocktailStyle}
        season={seasonalStyle}
      />
      <SearchFilter sort={sortBy} setSort={setSortBy} />
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
