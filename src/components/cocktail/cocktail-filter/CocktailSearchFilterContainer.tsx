import { ReactElement, useState } from 'react';
import { Space } from 'antd';

import CocktailListSortDropdown from './CocktailSortDropdown';
import CocktailFilterOptionButton from './CocktailFilterOptionButton';
import CocktailLikeFilter from './CocktailLikeFilter';
import CocktailFilterDetailDropdown from './CocktailFilterDetailDropdown';

const CocktailSearchFilterContainer = (): ReactElement => {
  const [isFilterDetailDropdownVisible, setFilterDetailDropdownVisible] = useState(false);

  return (
    <Space wrap>
      <CocktailListSortDropdown />
      <CocktailFilterOptionButton setFilterDetailDropdownVisible={setFilterDetailDropdownVisible} />
      <CocktailFilterDetailDropdown
        isVisible={isFilterDetailDropdownVisible}
        setVisible={setFilterDetailDropdownVisible}
      />
      <CocktailLikeFilter />
    </Space>
  );
};

export default CocktailSearchFilterContainer;
