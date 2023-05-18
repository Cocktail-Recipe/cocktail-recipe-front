import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { ReactElement, useCallback, useState } from 'react';

// TODO: 단위변경 api 유무 확인
const CocktailIngredientUnitSelector = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Dropdown
      menu={{
        items: [],
        onClick: () => {},
      }}
      onOpenChange={onOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          단위변경
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default CocktailIngredientUnitSelector;
