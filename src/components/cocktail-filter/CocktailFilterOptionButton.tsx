import React, { ReactElement, useCallback } from 'react';
import { Button } from 'antd';
import { ControlOutlined } from '@ant-design/icons';

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
    <Button onClick={onClickFilterOption}>
      필터 <ControlOutlined />
    </Button>
  );
};

export default React.memo(CocktailFilterOptionButton);
