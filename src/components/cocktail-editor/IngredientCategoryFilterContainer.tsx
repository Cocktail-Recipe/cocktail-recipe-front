import { ingredientCategoryLabelMap } from '@/consts/ingredient';
import { IngredientCategory } from '@/enum/ingredient';
import { Radio, Space } from 'antd';
import { ReactElement, useCallback, useState } from 'react';

const IngredientCategoryFilterContainer = (): ReactElement => {
  const [category, setCategory] = useState(IngredientCategory.ALCOHOL);

  const onClickIngedientCategory = useCallback((value: IngredientCategory) => {
    setCategory(value);
  }, []);

  return (
    <Radio.Group value={category}>
      <Space wrap>
        {Object.entries(ingredientCategoryLabelMap).map(([name, label]) => (
          <Radio.Button
            className="ingredient-filter-item"
            key={name}
            value={name}
            onClick={() => onClickIngedientCategory(name as IngredientCategory)}
          >
            {label}
          </Radio.Button>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default IngredientCategoryFilterContainer;
