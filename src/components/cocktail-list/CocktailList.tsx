import React, { ReactElement, useCallback, useMemo } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { PlusOutlined } from '@ant-design/icons';

import useCocktailList from '@/hook/useCocktailList';
import { cocktailListState } from '@/states/cocktail/cocktailList.state';
import { selectedCocktailState } from '@/states/cocktail/cocktail.state';
import { Cocktail } from '@/models/cocktail.model';
import { COCKTAIL_URL } from '@/consts/routeUrl';
import CocktailCard from './CocktailCard';

import { StyledCocktailCreateBtn } from './CocktailList.styled';

const CocktailList = (): ReactElement => {
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
    ({ columnIndex, rowIndex, style }: any) => {
      const index = rowIndex * 2 + columnIndex;

      return (
        <CocktailCard
          cocktail={cocktails[index]}
          key={cocktails[index]?.cocktailId}
          style={style}
          onClick={() => onClickCocktailItem(cocktails[index])}
        />
      );
    },
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

  const onClickCreateCocktailRecipe = useCallback(async () => {
    await router.push(`${COCKTAIL_URL}/editor`);
  }, [router]);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreCocktails}>
          {({ onItemsRendered, ref }: any) =>
            isLoading ? (
              <Spin />
            ) : (
              <>
                <Grid
                  columnCount={2}
                  columnWidth={(width as number) / 2}
                  height={height as number}
                  width={width as number}
                  rowCount={cocktails.length / 2}
                  rowHeight={300}
                  ref={ref}
                  onItemsRendered={(gridProps) => {
                    onItemsRendered({
                      overscanStartIndex: gridProps.overscanRowStartIndex * 2,
                      overscanStopIndex: gridProps.overscanRowStopIndex * 2,
                      visibleStartIndex: gridProps.visibleRowStartIndex * 2,
                      visibleStopIndex: gridProps.visibleRowStopIndex * 2,
                    });
                  }}
                >
                  {CocktailItem}
                </Grid>
                <StyledCocktailCreateBtn>
                  <PlusOutlined
                    style={{
                      position: 'fixed',
                      fontSize: '30px',
                      bottom: '80px',
                      right: '20px',
                      color: 'green',
                      borderRadius: '100%',
                      backgroundColor: 'white',
                    }}
                    onClick={onClickCreateCocktailRecipe}
                  />
                </StyledCocktailCreateBtn>
              </>
            )
          }
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default React.memo(CocktailList);
