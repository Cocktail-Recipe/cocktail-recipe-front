import { CocktailListType } from '@/interfaces/cocktail/CocktailObject.interface';
import axios from 'axios';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useState } from 'react';
import { CocktailFilterInterface, getCocktailFilter } from './useCocktailFilter';

interface InfiniteScrollInterface {
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const API_URL = process.env['NEXT_PUBLIC_API_URL'];

const useInfiniteScroll = ({ containerRef }: InfiniteScrollInterface) => {
  const PAGE_LIMIT = 10;
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<Array<CocktailListType>>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

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
    setPage(0);
    setItems([]);
    setLoading(false);
    setHasMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query?.query]);

  useEffect(() => {
    const fetchData = async (query: string, page: number, filterParams: CocktailFilterInterface) => {
      try {
        if (page === 0) return setPage(1);
        setLoading(true);
        const params = { size: PAGE_LIMIT, page, nameOrIngredient: query, isAsc: false, ...filterParams };
        // ! URL 수정
        const response = await axios(`${API_URL}/app/cocktails`, { params });
        const result = response.data.result;

        setItems([...items, ...result.content]);
        setHasMore(result.numberOfElements === PAGE_LIMIT);
      } catch (error) {
        // ! Error Handling
      } finally {
        setLoading(false);
      }
    };

    if (!loading) fetchData((router.query?.query as string) ?? '', page, getCocktailFilter(router.query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { items, hasMore };
};

export default useInfiniteScroll;
