import { Slider, Space, Typography } from 'antd';
import { SliderMarks } from 'antd/es/slider';
import React, { ReactElement } from 'react';

const marks: SliderMarks = {
  0: '0도',
  40: '40도',
};

interface CocktailVolumeFilterProps {
  onChangeCocktailVolume: (values: [number, number]) => void;
}

const CocktailVolumeFilter = ({ onChangeCocktailVolume }: CocktailVolumeFilterProps): ReactElement => {
  return (
    <Space direction="vertical" style={{ width: '90%' }}>
      <Typography.Text>도수</Typography.Text>
      <Slider
        marks={marks}
        range
        min={0}
        max={40}
        defaultValue={[0, 40]}
        onChange={onChangeCocktailVolume}
        onAfterChange={onChangeCocktailVolume}
      />
    </Space>
  );
};

export default React.memo(CocktailVolumeFilter);
