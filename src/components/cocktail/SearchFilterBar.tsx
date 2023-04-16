import { CocktailFilterInterface } from '@/\butils/useCocktailFilter';
import { CocktailSortType, getSortKeys, getSortValue } from '@/interfaces/inquiry/CocktailSort.type';
import { ArrowDropDown, FavoriteBorderOutlined, FavoriteRounded, Tune } from '@material-ui/icons';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SearchFilterDetail from './SearchFilterDetail';

const FilterContainer = styled.div`
  margin: 4px 20px 8px 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Spliter = styled.hr`
  border: 0.5px solid #52525c;
  margin-top: 4px;
`;

const SortButton = styled.div`
  font-size: 7px;
  color: #52525c;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropDownWrapper = styled.div`
  position: fixed;
  z-index: 999;
`;

const DropDownContent = styled.div`
  background-color: #efefef;
  width: 100px;
  height: 25px;
  border: 0.5px solid #9c9c9c;
  border-bottom: ${(props) => (props['aria-label'] === 'last' ? '0.5px solid #9c9c9c;' : '0px;')}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6px;
  color: #52525C;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  font-size: 7px;
  margin-left: auto;
`;

const SearchFilterIconWrapper = styled.div`
  cursor: pointer;
  border: 0.5px solid #52525c;
  border-radius: 20px;
  display: flex;
  margin-left: 4px;
  height: 16px;
  justify-content: space-evenly;
  align-items: center;
`;

interface SearchFilterProps {
  setSort: (s: CocktailSortType) => void;
  filter: CocktailFilterInterface;
}

const SearchFilterBar: React.FC<SearchFilterProps> = ({ filter, setSort }) => {
  const sortRef = useRef<HTMLDivElement>(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (sortOpen && sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [sortOpen, sortRef]);

  return (
    <FilterContainer>
      <FilterWrapper>
        <SortButton onClick={() => setSortOpen((open) => !open)}>
          {getSortValue(filter.sortBy)}
          <ArrowDropDown style={{ width: '0.8rem', height: '0.8rem' }} />
        </SortButton>
        <SearchFilterContainer>
          <SearchFilterIconWrapper style={{ width: '32px' }} onClick={() => setLike((like) => !like)}>
            {like ? (
              <FavoriteRounded style={{ color: '#FF0000', width: '8px', height: '8px' }} />
            ) : (
              <FavoriteBorderOutlined style={{ color: '#52525C', width: '8px', height: '8px' }} />
            )}
            찜
          </SearchFilterIconWrapper>
          <SearchFilterIconWrapper style={{ width: '40px' }} onClick={() => setFilterOpen((open) => !open)}>
            <Tune style={{ color: '#52525C', width: '8px', height: '8px' }} />
            필터
          </SearchFilterIconWrapper>
        </SearchFilterContainer>
      </FilterWrapper>
      <Spliter />
      <DropDownWrapper ref={sortRef} style={{ display: sortOpen ? 'block' : 'none' }}>
        {getSortKeys().map((text, index) => (
          <DropDownContent
            key={text}
            onClick={() => {
              setSortOpen(false);
              setSort(text);
            }}
            aria-label={index === getSortKeys().length - 1 ? 'last' : undefined}
          >
            {getSortValue(text)}
          </DropDownContent>
        ))}
      </DropDownWrapper>
      <SearchFilterDetail
        isOpen={filterOpen}
        setClose={() => setFilterOpen(false)}
        onSubmit={() => setFilterOpen(false)}
        filter={filter}
      />
    </FilterContainer>
  );
};

export default SearchFilterBar;
