import React, { ReactElement, useCallback } from 'react';
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { StyledCocktailFilterOptionButton } from './CocktailFilterOptionButton.styled';

interface CocktailFilterOptionButtonProps {
  setFilterDetailDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CocktailFilterOptionButton = ({
  setFilterDetailDropdownVisible,
}: CocktailFilterOptionButtonProps): ReactElement => {
  const onClickFilterOption = useCallback(() => {
    setFilterDetailDropdownVisible(true);
  }, [setFilterDetailDropdownVisible]);

  return (
    <StyledCocktailFilterOptionButton>
      <Button onClick={onClickFilterOption}>
        필터 <FilterOutlined />
      </Button>
    </StyledCocktailFilterOptionButton>
  );
};

export default React.memo(CocktailFilterOptionButton);
