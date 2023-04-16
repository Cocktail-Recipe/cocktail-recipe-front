import { CocktailFilterInterface } from '@/\butils/useCocktailFilter';
import {
  CocktailBaseAlcoholType,
  baseAlcoholKeys,
  getBaseAlcoholValue,
} from '@/interfaces/inquiry/CocktailBaseAlcohol.type';
import { CocktailSeasonalType, getSeasonalValue, seasonalKeys } from '@/interfaces/inquiry/CocktailSeasonal.type';
import { CocktailStyleType, getStyleValue, styleKeys } from '@/interfaces/inquiry/CocktailStyle.type';
import { Drawer } from '@material-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const FilterDrawer = styled(Drawer)`
  && .MuiDrawer-paper {
    height: 85%;
    background-color: #efefef;
    display: flex;
    justify-content: space-between;
  }
`;

const FilterCloseContainer = styled.div`
  height: 32px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  font-weight: 600;
  font-size: 12px;
`;

const FilterCloseButton = styled.div`
  cursor: pointer;
`;

const FilterContentContainer = styled.div`
  margin: 24px 24px;
`;

const FilterTitle = styled.div`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 12px;
`;

const FilterContentGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 32px;
`;

const FilterContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 48px;
`;

const FilterContent = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 65px;
  height: 65px;
  margin: 2px;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const FilterContentSelected = styled.div`
  background: rgba(255, 153, 0, 0.25);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FilterContentImage = styled(Image)`
  object-fit: cover;
  position: relative;
`;

const FilterContentName = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  color: #6a6868;
`;

const FilterContentSliderWrapper = styled.div`
  color: #ff9900;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  box-sizing: content-box;
  touch-action: none;
  height: 20px;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
`;

const FiltercontentSliderRail = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  border-radius: 10px;
`;

const FiltercontentSliderTrack = styled.span`
  height: 100%;
  display: block;
  position: absolute;
  border-radius: 10px;
  background-color: currentColor;
`;

const FilterContentSliderIcon = styled.div`
  background: #ffffff;
  border: 1px solid #ff9900;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  top: -2px;
  outline: 0;
  position: absolute;
  cursor: move;
  font-weight: 600;
  font-size: 8px;
  color: black;
  justify-content: center;
  align-items: center;
`;

const FilterSeasonal = styled.div`
  width: 58px;
  height: 18px;
  cursor: pointer;
  background: #ffffff;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SearchFilterDetailProps {
  isOpen: boolean;
  setClose: () => void;
  onSubmit: () => void;
  filter: CocktailFilterInterface;
}

const STATIC_URL = process.env['NEXT_PUBLIC_STATIC_URL'];

const SearchFilterDetail: React.FC<SearchFilterDetailProps> = ({ isOpen, setClose, onSubmit, filter }) => {
  const router = useRouter();
  const [minVolume, setMinVolume] = useState<number>(filter.minVolume ?? 0);
  const [maxVolume, setMaxVolume] = useState<number>(filter.maxVolume ?? 40);
  const [cocktailStyle, setCocktailStyle] = useState<CocktailStyleType | undefined>();
  const [baseAlcohol, setBaseAlcohol] = useState<CocktailBaseAlcoholType | undefined>();
  const [seasonalStyle, setSeasonalStyle] = useState<CocktailSeasonalType | undefined>();

  useEffect(() => {
    setMinVolume(filter.minVolume ?? 0);
    setMaxVolume(filter.maxVolume ?? 40);
    setCocktailStyle(filter.cocktailStyle);
    setBaseAlcohol(filter.baseAlcohol);
    setSeasonalStyle(filter.seasonalStyle);
  }, [filter]);

  function submitFilter(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    e.preventDefault();
    onSubmit();

    let param = '';
    const query = (router.query?.query as string) ?? '';
    if (query !== '') {
      param += `query=${query}&`;
    }

    param += `min=${minVolume}&max=${maxVolume}&`;
    if (baseAlcohol !== undefined) param += `base=${baseAlcohol}&`;
    if (cocktailStyle !== undefined) param += `style=${cocktailStyle}&`;
    if (seasonalStyle !== undefined) param += `season=${seasonalStyle}&`;
    router.push('/cocktail?' + param.substring(0, param.length - 1));
  }

  return (
    <FilterDrawer anchor="bottom" open={isOpen} onClose={setClose}>
      <FilterCloseContainer>
        <FilterCloseButton onClick={setClose}>취소</FilterCloseButton>
        <FilterCloseButton onClick={submitFilter}>적용</FilterCloseButton>
      </FilterCloseContainer>
      <FilterContentContainer>
        <FilterTitle>베이스주</FilterTitle>
        <FilterContentGridWrapper>
          {baseAlcoholKeys.map((key, index) => {
            const { name, src } = getBaseAlcoholValue(key);
            return (
              <FilterContent
                key={index}
                onClick={(_) => setBaseAlcohol((baseAlcohol) => (key === baseAlcohol ? undefined : key))}
              >
                <FilterContentImage src={src(STATIC_URL!!)} alt={name} width={42} height={42} />
                <FilterContentName>{name}</FilterContentName>
                {key === baseAlcohol ? <FilterContentSelected /> : null}
              </FilterContent>
            );
          })}
        </FilterContentGridWrapper>
      </FilterContentContainer>
      <FilterContentContainer>
        <FilterTitle>도수</FilterTitle>
        <FilterContentSliderWrapper>
          <FiltercontentSliderRail />
          <FiltercontentSliderTrack
            style={{ left: `${(minVolume / 40) * 100}%`, width: `${(maxVolume / 40 - minVolume / 40) * 100}%` }}
          />
          <Draggable axis="x" bounds="parent" disabled={minVolume === maxVolume}>
            <FilterContentSliderIcon style={{ left: `calc(${(minVolume / 40) * 100}%)` }}>
              {minVolume}
            </FilterContentSliderIcon>
          </Draggable>
          <Draggable axis="x" bounds="parent" disabled={minVolume === maxVolume}>
            <FilterContentSliderIcon style={{ left: `calc(${(maxVolume / 40) * 100}% - 24px)` }}>
              {maxVolume}
            </FilterContentSliderIcon>
          </Draggable>
        </FilterContentSliderWrapper>
      </FilterContentContainer>
      <FilterContentContainer>
        <FilterTitle>칵테일 스타일</FilterTitle>
        <FilterContentGridWrapper>
          {styleKeys.map((key, index) => {
            const { name, src } = getStyleValue(key);
            return (
              <FilterContent
                key={index}
                onClick={(_) => setCocktailStyle((cocktailStyle) => (key === cocktailStyle ? undefined : key))}
              >
                <FilterContentImage src={src(STATIC_URL!!)} alt={name} width={42} height={42} />
                <FilterContentName>{name}</FilterContentName>
                {key === cocktailStyle ? <FilterContentSelected /> : null}
              </FilterContent>
            );
          })}
        </FilterContentGridWrapper>
      </FilterContentContainer>
      <FilterContentContainer>
        <FilterTitle>시즈널</FilterTitle>
        <FilterContentWrapper>
          {seasonalKeys.map((key, index) => {
            const { name } = getSeasonalValue(key);
            return (
              <FilterSeasonal
                key={index}
                onClick={(_) => setSeasonalStyle((style) => (key === style ? undefined : key))}
                style={{ backgroundColor: key === seasonalStyle ? 'rgba(255, 153, 0, 0.25)' : 'white' }}
              >
                {name}
              </FilterSeasonal>
            );
          })}
        </FilterContentWrapper>
      </FilterContentContainer>
    </FilterDrawer>
  );
};

export default SearchFilterDetail;
