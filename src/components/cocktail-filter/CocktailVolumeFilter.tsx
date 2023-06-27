import { Slider, Space } from 'antd';
import { SliderMarks } from 'antd/es/slider';
import React, { ReactElement } from 'react';
import { StyledCocktailFilterText } from '../common/CocktailFilterText.styled';
import { StyledCocktailVolumeFilter } from './CocktailVolumeFilter.styled';

const markStyle = {
  color: 'rgba(255, 255, 255, 0.45)',
};

const marks: SliderMarks = {
  0: {
    style: markStyle,
    label: '최소',
  },
  10: {
    style: markStyle,
    label: '10도',
  },
  20: {
    style: markStyle,
    label: '20도',
  },
  30: {
    style: markStyle,
    label: '30도',
  },
  40: {
    style: markStyle,
    label: '최대',
  },
};

interface CocktailVolumeFilterProps {
  onChangeCocktailVolume: (values: [number, number]) => void;
}

const CocktailVolumeFilter = ({ onChangeCocktailVolume }: CocktailVolumeFilterProps): ReactElement => {
  return (
    <StyledCocktailVolumeFilter>
      <Space direction="vertical">
        <StyledCocktailFilterText>도수</StyledCocktailFilterText>
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
    </StyledCocktailVolumeFilter>
  );
};

export default React.memo(CocktailVolumeFilter);
