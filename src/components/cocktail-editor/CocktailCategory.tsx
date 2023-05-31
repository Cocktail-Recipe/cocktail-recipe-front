import { Button, Drawer, Space, Typography } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  cocktailBaseAlcoholState,
  cocktailSeasonalState,
  cocktailStyleState,
  cocktailVolumeState,
} from '@/states/cocktail/cocktailCreate.state';
import { getCocktailHashTags } from '@/utils/cocktail';
import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle } from '@/enum/cocktail';
import CocktailBaseAlcoholFilter from '../cocktail-filter/CocktailBaseAlcoholFilter';
import CocktailStyleFilter from '../cocktail-filter/CocktailStyleFilter';
import CocktailSeasonalStyleFilter from '../cocktail-filter/CocktailSeasonalStyleFilter';
import CocktailVolume from './CocktailVolume';

const CocktailCategory = (): ReactElement => {
  const [isVisible, setVisible] = useState(false);
  const [seasonalStyle, setSeasonalStyle] = useRecoilState(cocktailSeasonalState);
  const [baseAlcohol, setBaseAlcohol] = useRecoilState(cocktailBaseAlcoholState);
  const [cocktailStyle, setCocktailStyle] = useRecoilState(cocktailStyleState);
  const volume = useRecoilValue(cocktailVolumeState);

  const onClickCocktailSeasonalStyle = useCallback(
    (value: CocktailSeasonalStyle) => {
      setSeasonalStyle((prev) => (prev === value ? undefined : value));
    },
    [setSeasonalStyle],
  );

  const onClickBaseAlcohol = useCallback(
    (value: CocktailBaseAlcohol) => {
      setBaseAlcohol((prev) => (prev === value ? undefined : value));
    },
    [setBaseAlcohol],
  );

  const onClickCocktailStyle = useCallback(
    (value: CocktailFlavor) => {
      setCocktailStyle((prev) => (prev === value ? undefined : value));
    },
    [setCocktailStyle],
  );

  const onClickFilterChangeButton = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Space direction="vertical">
        <Typography.Text>칵테일 카테고리 설정</Typography.Text>
        <Button onClick={() => setVisible(true)}>
          {baseAlcohol && Number.isInteger(volume)
            ? getCocktailHashTags({
                baseAlcohol,
                cocktailStyle,
                seasonalStyle,
                volume,
              })
            : ' 카테고리 설정'}
        </Button>
      </Space>
      <Drawer
        placement={'bottom'}
        height="80vh"
        onClose={() => setVisible(false)}
        open={isVisible}
        extra={
          <Space>
            <Button onClick={onClickFilterChangeButton}>확인</Button>
          </Space>
        }
      >
        <Space direction="vertical">
          <CocktailBaseAlcoholFilter baseAlcohol={baseAlcohol} onClickBaseAlcohol={onClickBaseAlcohol} />
          <CocktailVolume />
          <CocktailStyleFilter cocktailStyle={cocktailStyle} onClickCocktailStyle={onClickCocktailStyle} />
          <CocktailSeasonalStyleFilter
            seasonalStyle={seasonalStyle}
            onClickCocktailSeasonalStyle={onClickCocktailSeasonalStyle}
          />
        </Space>
      </Drawer>
    </>
  );
};

export default CocktailCategory;
