import { cocktailVolumeState } from '@/states/cocktail/cocktailCreate.state';
import { Button, InputNumber, Space, Typography } from 'antd';
import { ReactElement, useCallback } from 'react';
import { useRecoilState } from 'recoil';

const CocktailVolume = (): ReactElement => {
  const [volume, setVolume] = useRecoilState(cocktailVolumeState);

  const onChangeVolume = useCallback(
    (value: number | null) => {
      value === null ? setVolume(undefined) : setVolume(value);
    },
    [setVolume],
  );

  return (
    <Space direction="vertical" style={{ width: '90%' }}>
      <Typography.Text>도수</Typography.Text>
      <Space direction="horizontal">
        <Button onClick={() => onChangeVolume(0)} style={{ width: '70px' }}>
          <div>무알콜</div>
        </Button>
        <InputNumber
          style={{ width: '200px' }}
          min={0}
          max={40}
          placeholder="도수를 입력해 주세요."
          value={volume}
          onChange={onChangeVolume}
        />
      </Space>
    </Space>
  );
};

export default CocktailVolume;
