import React, { ReactElement, useCallback, useState } from 'react';
import { Drawer, Space, Button } from 'antd';
import { useSetRecoilState } from 'recoil';
import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle } from '@/enum/cocktail';
import { cocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';
import CocktailBaseAlcoholFilter from './CocktailBaseAlcoholFilter';
import CocktailVolumeFilter from './CocktailVolumeFilter';
import CocktailStyleFilter from './CocktailStyleFilter';
import CocktailSeasonalStyleFilter from './CocktailSeasonalStyleFilter';

interface CocktailFilterDetailDropdownProps {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CocktailFilterDetailDropdown = ({ isVisible, setVisible }: CocktailFilterDetailDropdownProps): ReactElement => {
  const [baseAlcohol, setBaseAlcohol] = useState<CocktailBaseAlcohol>();
  const [minVolume, setMinVolume] = useState(0);
  const [maxVolume, setMaxVolume] = useState(40);
  const [cocktailStyle, setCocktailStyle] = useState<CocktailFlavor>();
  const [seasonalStyle, setSeasonalStyle] = useState<CocktailSeasonalStyle>();

  const setCocktailSearchRequestFilters = useSetRecoilState(cocktailSearchRequestState);

  const onClickCocktailSeasonalStyle = useCallback((value: CocktailSeasonalStyle) => {
    setSeasonalStyle((prev) => (prev === value ? undefined : value));
  }, []);

  const onClickBaseAlcohol = useCallback((value: CocktailBaseAlcohol) => {
    setBaseAlcohol((prev) => (prev === value ? undefined : value));
  }, []);

  const onClickCocktailStyle = useCallback((value: CocktailFlavor) => {
    setCocktailStyle((prev) => (prev === value ? undefined : value));
  }, []);

  const onChangeCocktailVolume = useCallback((values: [number, number]) => {
    setMinVolume(values[0]);
    setMaxVolume(values[1]);
  }, []);

  const onClickFilterChangeButton = useCallback(() => {
    setCocktailSearchRequestFilters({ baseAlcohol, cocktailStyle, seasonalStyle, minVolume, maxVolume });
    setVisible(false);
  }, [baseAlcohol, cocktailStyle, maxVolume, minVolume, seasonalStyle, setCocktailSearchRequestFilters, setVisible]);

  return (
    <Drawer
      placement={'bottom'}
      height="80vh"
      onClose={() => setVisible(false)}
      open={isVisible}
      extra={
        <Space>
          <Button onClick={onClickFilterChangeButton}>필터 적용</Button>
        </Space>
      }
    >
      <Space direction="vertical">
        <CocktailBaseAlcoholFilter baseAlcohol={baseAlcohol} onClickBaseAlcohol={onClickBaseAlcohol} />
        <CocktailVolumeFilter onChangeCocktailVolume={onChangeCocktailVolume} />
        <CocktailStyleFilter cocktailStyle={cocktailStyle} onClickCocktailStyle={onClickCocktailStyle} />
        <CocktailSeasonalStyleFilter
          seasonalStyle={seasonalStyle}
          onClickCocktailSeasonalStyle={onClickCocktailSeasonalStyle}
        />
      </Space>
    </Drawer>
  );
};

export default React.memo(CocktailFilterDetailDropdown);
