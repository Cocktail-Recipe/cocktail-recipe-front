import { Dropdown, MenuProps, Space } from 'antd';
import { ReactElement, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cocktailSearchSortByState } from '@/states/cocktail/cocktailSearchRequest.state';
import { DownOutlined } from '@ant-design/icons';
import { cocktailSortLabelMap } from '@/consts/cocktail';
import { CocktailSort } from '@/enum/cocktail';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

const SORT_BY_DROPDOWN_ITEMS: MenuProps['items'] = [
  {
    key: CocktailSort.VIEW_COUNT,
    label: cocktailSortLabelMap[CocktailSort.VIEW_COUNT],
  },
  {
    key: CocktailSort.LIKE_COUNT,
    label: cocktailSortLabelMap[CocktailSort.LIKE_COUNT],
  },
  {
    key: CocktailSort.COMMENT_COUNT,
    label: cocktailSortLabelMap[CocktailSort.COMMENT_COUNT],
  },
];

const CocktailListSortDropdown = (): ReactElement => {
  const [cocktailsSortBy, setCocktailsSortBy] = useRecoilState(cocktailSearchSortByState);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onChangeOpen = useCallback(() => {
    setIsDropdownOpen((isOpen) => !isOpen);
  }, []);

  const onChangeSortBy: MenuClickEventHandler = useCallback(
    (e) => {
      e?.key && setCocktailsSortBy(e.key as CocktailSort);
    },
    [setCocktailsSortBy],
  );

  return (
    <Dropdown
      menu={{
        items: SORT_BY_DROPDOWN_ITEMS,
        onClick: onChangeSortBy,
      }}
      onOpenChange={onChangeOpen}
      open={isDropdownOpen}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {cocktailSortLabelMap[cocktailsSortBy]} <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default CocktailListSortDropdown;
