import { ReactElement, useState } from 'react';

import CocktailListSortDropdown from './CocktailSortDropdown';
import CocktailFilterOptionButton from './CocktailFilterOptionButton';
import CocktailLike from './CocktailLike';
import CocktailFilterDetailDropdown from './CocktailFilterDetailDropdown';

import { StyledSearchFilterContainer } from './CocktailSearchFilterContainer.styled';

const CocktailSearchFilterContainer = (): ReactElement => {
  const [isFilterDetailDropdownVisible, setFilterDetailDropdownVisible] = useState(false);

  return (
    <StyledSearchFilterContainer>
      <CocktailListSortDropdown />
      <div className="right-buttons">
        <CocktailFilterOptionButton setFilterDetailDropdownVisible={setFilterDetailDropdownVisible} />
        <CocktailFilterDetailDropdown
          isVisible={isFilterDetailDropdownVisible}
          setVisible={setFilterDetailDropdownVisible}
        />
        <CocktailLike />
      </div>
    </StyledSearchFilterContainer>
  );
};

export default CocktailSearchFilterContainer;
