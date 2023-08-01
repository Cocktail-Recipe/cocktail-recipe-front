import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Drawer, Space, Button } from 'antd';
import { useSetRecoilState } from 'recoil';
import { CloseOutlined } from '@ant-design/icons';
import { CocktailBaseAlcohol, CocktailFlavor, CocktailSeasonalStyle } from '@/enum/cocktail';
import { cocktailSearchRequestState } from '@/states/cocktail/cocktailSearchRequest.state';
import CocktailBaseAlcoholFilter from './CocktailBaseAlcoholFilter';
import CocktailVolumeFilter from './CocktailVolumeFilter';
import CocktailStyleFilter from './CocktailStyleFilter';
import CocktailSeasonalStyleFilter from './CocktailSeasonalStyleFilter';
import { StyledCocktailFilterDetailDropdown } from './CocktailFilterDetailDropdown.styled';
import { cocktailEditInputState } from '@/states/cocktail/cocktailCreate.state';

interface CocktailFilterDetailDropdownProps {
  title: string;
  isVisible: boolean;
  isSingleRangeVolume?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CocktailFilterDetailDropdown = ({
  title,
  isVisible,
  isSingleRangeVolume = false,
  setVisible,
}: CocktailFilterDetailDropdownProps): ReactElement => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const [baseAlcohol, setBaseAlcohol] = useState<CocktailBaseAlcohol>();
  const [minVolume, setMinVolume] = useState(0);
  const [maxVolume, setMaxVolume] = useState(40);
  const [cocktailStyle, setCocktailStyle] = useState<CocktailFlavor>();
  const [seasonalStyle, setSeasonalStyle] = useState<CocktailSeasonalStyle>();

  const setCocktailSearchRequestFilters = useSetRecoilState(cocktailSearchRequestState);
  const setCocktailEditInputFilters = useSetRecoilState(cocktailEditInputState);

  const onClickCocktailSeasonalStyle = useCallback((value: CocktailSeasonalStyle) => {
    setSeasonalStyle((prev) => (prev === value ? undefined : value));
  }, []);

  const onClickBaseAlcohol = useCallback((value: CocktailBaseAlcohol) => {
    setBaseAlcohol((prev) => (prev === value ? undefined : value));
  }, []);

  const onClickCocktailStyle = useCallback((value: CocktailFlavor) => {
    setCocktailStyle((prev) => (prev === value ? undefined : value));
  }, []);

  const onChangeCocktailVolume = useCallback(
    (value: [number, number] | number) => {
      if (isSingleRangeVolume) {
        setMinVolume(value as number);
      } else {
        const volumes = value as [number, number];
        setMinVolume(volumes[0]);
        setMaxVolume(volumes[1]);
      }
    },
    [isSingleRangeVolume],
  );

  const onClickFilterChangeButton = useCallback(() => {
    if (isSingleRangeVolume) {
      setCocktailEditInputFilters({ baseAlcohol, cocktailStyle, seasonalStyle, volume: minVolume, ingredientList: [] });
    } else {
      setCocktailSearchRequestFilters({ baseAlcohol, cocktailStyle, seasonalStyle, minVolume, maxVolume });
    }
    setVisible(false);
  }, [
    baseAlcohol,
    cocktailStyle,
    isSingleRangeVolume,
    maxVolume,
    minVolume,
    seasonalStyle,
    setCocktailEditInputFilters,
    setCocktailSearchRequestFilters,
    setVisible,
  ]);

  const onCloseFilterDetailDropdown = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <StyledCocktailFilterDetailDropdown>
      <Drawer
        title={title}
        className="cocktail-filter-detail-dropdown"
        placement="bottom"
        height="80vh"
        onClose={() => setVisible(false)}
        closable={false}
        open={isVisible}
        getContainer={false}
        extra={
          <Space>
            <Button onClick={onCloseFilterDetailDropdown}>
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <Space direction="vertical" size="large">
          <CocktailBaseAlcoholFilter baseAlcohol={baseAlcohol} onClickBaseAlcohol={onClickBaseAlcohol} />
          <CocktailVolumeFilter onChangeCocktailVolume={onChangeCocktailVolume} isSingleRange={isSingleRangeVolume} />
          <CocktailStyleFilter cocktailStyle={cocktailStyle} onClickCocktailStyle={onClickCocktailStyle} />
          <CocktailSeasonalStyleFilter
            seasonalStyle={seasonalStyle}
            onClickCocktailSeasonalStyle={onClickCocktailSeasonalStyle}
          />
          <Button className="filter-apply-btn" onClick={onClickFilterChangeButton}>
            적용
          </Button>
        </Space>
      </Drawer>
    </StyledCocktailFilterDetailDropdown>
  );
};

export default React.memo(CocktailFilterDetailDropdown);
