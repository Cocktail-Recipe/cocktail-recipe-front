import { Ingredient } from '@/models/ingredient.model';
import React, { ReactElement, useCallback, useMemo } from 'react';
import { Image, Card, List } from 'antd';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

import { FixedSizeGrid as Grid } from 'react-window';
import { Spin } from 'antd';

import useCocktailList from '@/hook/useCocktailList';
import { useRecoilState } from 'recoil';
import useIngredientList from '@/hook/useIngredientList';
import { ingredientListState } from '@/states/ingredient/ingredientList.state';
import { selectedIngredientsState } from '@/states/ingredient/ingredient.state';
import ingredientAPI from '@/api/ingredient';
import { StyledCocktailCard } from '../cocktail-list/CocktailCard.styled';

interface CocktailIngredientListProps {
  ingredients: Ingredient[];
}

const CocktailIngredientList = ({ ingredients }: CocktailIngredientListProps): ReactElement => {
  const [ingredientList, setIngredientList] = useRecoilState(ingredientListState);
  const [selectedIngredients, setSelectedIngredients] = useRecoilState(selectedIngredientsState);
  const { loadMoreIngredients, hasNextPage, isLoading } = useIngredientList();

  const onClickSearch = useCallback(() => {
    ingredientAPI
      .getAllIngredients({ page: 1 })
      .then(({ data }) => {
        console.log(data);
        setIngredientList(data.result.content);
      })
      .catch(() => setIngredientList([]));
  }, [setIngredientList]);

  const CocktailItem = useCallback(
    ({ columnIndex, rowIndex, style }: any) => {
      const index = rowIndex * 2 + columnIndex;
      const ingredient = ingredientList[index];
      if (!ingredient) return <></>;

      const { name, thumbnail, category, unit } = ingredient;
      if (!name || !thumbnail || !category || !unit) return <></>;
      return (
        <StyledCocktailCard style={{ ...style, width: '50%', padding: '5px' }}>
          <List.Item>
            <Card
              cover={
                <Image
                  src={thumbnail}
                  alt={name}
                  width={10}
                  height={150}
                  fallback="data:image/png;base64,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"
                />
              }
            >
              <Card.Meta title={name} description={category} />
            </Card>
          </List.Item>
        </StyledCocktailCard>
      );
    },
    [ingredientList],
  );

  const itemCount = useMemo(
    () => (hasNextPage ? ingredientList.length + 1 : ingredientList.length),
    [hasNextPage, ingredientList.length],
  );

  const isItemLoaded = useCallback(
    (index: number) => !hasNextPage || index < ingredientList.length,
    [hasNextPage, ingredientList.length],
  );

  return (
    // <List
    //   style={{ color: 'white' }}
    //   dataSource={ingredients}
    //   renderItem={(ingredient) => (
    //     <List.Item key={ingredient.name}>
    //       <List.Item.Meta
    //         avatar={<Avatar src={ingredient.thumbnail} />}
    //         title={ingredient.name}
    //         description={ingredient.category}
    //       />
    //       <div>
    //         {ingredient.amount} {ingredient.unit}
    //       </div>
    //     </List.Item>
    //   )}
    // />
    <AutoSizer className="auto-sizer">
      {({ height, width }) => (
        <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreIngredients}>
          {({ onItemsRendered, ref }: any) =>
            isLoading ? (
              <Spin />
            ) : (
              <>
                <Grid
                  columnCount={10}
                  columnWidth={(width as number) / 2}
                  height={height as number}
                  width={width as number}
                  rowCount={ingredients.length / 2}
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
              </>
            )
          }
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default React.memo(CocktailIngredientList);
