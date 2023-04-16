import { CocktailFilterInterface } from '@/\butils/useCocktailFilter';
import { CocktailBaseAlcoholType } from '@/interfaces/inquiry/CocktailBaseAlcohol.type';
import { CocktailSeasonalType } from '@/interfaces/inquiry/CocktailSeasonal.type';
import { CocktailStyleType } from '@/interfaces/inquiry/CocktailStyle.type';
import { Drawer } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
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

interface SearchFilterDetailProps {
  isOpen: boolean;
  setClose: () => void;
  onSubmit: () => void;
  filter: CocktailFilterInterface;
}

const SearchFilterDetail: React.FC<SearchFilterDetailProps> = ({ isOpen, setClose, onSubmit, filter }) => {
  const router = useRouter();
  const [minVolume, setMinVolume] = useState<number>(filter.minVolume ?? 0);
  const [maxVolume, setMaxVolume] = useState<number>(filter.minVolume ?? 41);
  const [cocktailStyle, setCocktailStyle] = useState<CocktailStyleType | undefined>(filter.cocktailStyle);
  const [baseAlcohol, setBaseAlcohol] = useState<CocktailBaseAlcoholType | undefined>(filter.baseAlcohol);
  const [seasonalStyle, setSeasonalStyle] = useState<CocktailSeasonalType | undefined>(filter.seasonalStyle);

  function submit() {
    onSubmit();

    const query = (router.query?.query as string) ?? '';
  }

  return (
    <FilterDrawer anchor="bottom" open={isOpen} onClose={setClose}>
      <FilterCloseContainer>
        <FilterCloseButton onClick={setClose}>취소</FilterCloseButton>
        <FilterCloseButton onClick={(_) => onSubmit()}>적용</FilterCloseButton>
      </FilterCloseContainer>
    </FilterDrawer>
  );
};

export default SearchFilterDetail;
