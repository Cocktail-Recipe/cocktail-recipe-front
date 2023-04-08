import CocktailCard from '@/components/cocktail/CocktailCard';
import CocktailGrid from '@/components/cocktail/CocktailGrid';
import SearchBar from '@/components/cocktail/SearchBar';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navi';
import { CocktailListType } from '@/interfaces/cocktail/CocktailObject.interface';
import axios from 'axios';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

const PAGE_LIMIT = 10;

const useInfiniteScroll = ({ containerRef }: { containerRef: MutableRefObject<HTMLDivElement | null> }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Array<CocktailListType>>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const router = useRouter();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore && !loading) {
        setPage((p) => p + 1);
      }
    }, options);
    if (containerRef.current) observer.observe(containerRef.current);
    if (containerRef.current && !hasMore) {
      observer.unobserve(containerRef?.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, page, loading]);

  useEffect(() => {
    setQuery((router?.query?.query as string) ?? '');
    setItems([]);
    setLoading(false);
    setPage(1);
  }, [router.query.query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = { size: PAGE_LIMIT, page, nameOrIngredient: '' };
        if (query !== '') params['nameOrIngredient'] = query;

        const response = await axios(`http://localhost:8080/app/cocktails`, { params });
        const resut = response.data.result;

        const nextItem = [...items, ...resut.content];
        setItems(nextItem);
        setHasMore(resut.content.length >= PAGE_LIMIT);
      } catch (error) {
        // ! Error Handling
      } finally {
        setLoading(false);
      }
    };

    if (!loading) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return { items, hasMore };
};

const Cocktail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { items, hasMore } = useInfiniteScroll({ containerRef });

  return (
    <>
      <Navbar user={undefined} />
      <SearchBar />
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
