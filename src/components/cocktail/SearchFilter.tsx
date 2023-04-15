import { CocktailSortType, getSortKeys, getSortValue } from '@/interfaces/inquiry/CocktailInquiry';
import { ArrowDropDown } from '@material-ui/icons';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 4px 20px 8px 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Spliter = styled.hr`
  border: 0.5px solid #52525c;
  margin-top: 0px;
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

interface SearchFilterProps {
  sort: CocktailSortType;
  setSort: (s: CocktailSortType) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ sort, setSort }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [open, ref]);

  function clickSort(text: CocktailSortType) {
    setOpen(false);
    setSort(text);
  }

  return (
    <FilterContainer>
      <FilterWrapper>
        <SortButton onClick={(_) => setOpen(!open)}>
          {getSortValue(sort)}
          <ArrowDropDown style={{ width: '0.8rem', height: '0.8rem' }} />
        </SortButton>
        <div>찜, 필터</div>
      </FilterWrapper>
      <Spliter />

      {open ? (
        <DropDownWrapper ref={ref}>
          {getSortKeys().map((sort, index) => (
            <DropDownContent
              key={sort}
              onClick={(_) => clickSort(sort)}
              aria-label={index === getSortKeys().length - 1 ? 'last' : undefined}
            >
              {getSortValue(sort)}
            </DropDownContent>
          ))}
        </DropDownWrapper>
      ) : null}
    </FilterContainer>
  );
};

export default SearchFilter;
