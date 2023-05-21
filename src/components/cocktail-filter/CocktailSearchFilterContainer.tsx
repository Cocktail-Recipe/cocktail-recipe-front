import { ReactElement, useState } from 'react';
import { Space } from 'antd';

import CocktailListSortDropdown from './CocktailSortDropdown';
import CocktailFilterOptionButton from './CocktailFilterOptionButton';
import CocktailLike from './CocktailLike';
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
      <CocktailLike />
    </Space>
  );
};

export default CocktailSearchFilterContainer;
