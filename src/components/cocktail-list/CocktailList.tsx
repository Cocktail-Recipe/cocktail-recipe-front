import React, { ReactElement, useCallback, useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import useCocktailList from '@/hook/useCocktailList';
import { cocktailListState } from '@/states/cocktail/cocktailList.state';
import { selectedCocktailState } from '@/states/cocktail/cocktail.state';
import { Cocktail } from '@/models/cocktail.model';
import { COCKTAIL_URL } from '@/consts/routeUrl';

import CocktailCard from './CocktailCard';

const CockTailList = (): ReactElement => {
  const router = useRouter();
  const cocktails = useRecoilValue(cocktailListState);
  const setSelectedCocktail = useSetRecoilState(selectedCocktailState);
  const { loadMoreCocktails, hasNextPage, isLoading } = useCocktailList();

  const onClickCocktailItem = useCallback(
    async (cocktail: Cocktail) => {
      setSelectedCocktail(cocktail);
      await router.push(`${COCKTAIL_URL}/${cocktail.cocktailId}`);
    },
    [router, setSelectedCocktail],
  );

  const CocktailItem = useCallback(
    ({ index, style }: any) => (
      <CocktailCard
        cocktail={cocktails[index]}
        key={cocktails[index]?.cocktailId}
        style={style}
        onClick={() => onClickCocktailItem(cocktails[index])}
      />
    ),
    [cocktails, onClickCocktailItem],
  );

  const itemCount = useMemo(
    () => (hasNextPage ? cocktails.length + 1 : cocktails.length),
    [cocktails.length, hasNextPage],
  );

  const isItemLoaded = useCallback(
    (index: number) => !hasNextPage || index < cocktails.length,
    [cocktails.length, hasNextPage],
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreCocktails}>
          {({ onItemsRendered, ref }) =>
            isLoading ? (
              <Spin />
            ) : (
              <List
                height={height as number}
                width={width as number}
                itemSize={170}
                onItemsRendered={onItemsRendered}
                ref={ref}
                itemCount={itemCount}
              >
                {CocktailItem}
              </List>
            )
          }
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default React.memo(CockTailList);
