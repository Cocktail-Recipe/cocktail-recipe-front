import React, { ReactElement, useCallback, useRef, useState } from 'react';
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

  const onCloseFilterDetailDropdown = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <StyledCocktailFilterDetailDropdown>
      <Drawer
        title="필터 적용"
        className="cocktail-filter-detail-dropdown"
        placement={'bottom'}
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
          <CocktailVolumeFilter onChangeCocktailVolume={onChangeCocktailVolume} />
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
