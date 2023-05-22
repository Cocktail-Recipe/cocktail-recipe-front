import { Input, Typography } from 'antd';
import { ReactElement } from 'react';

const { TextArea } = Input;

const CocktailInfo = (): ReactElement => {
  return (
    <>
      <Typography.Text>칵테일 정보</Typography.Text>
      <TextArea rows={3} placeholder="칵테일 정보를 입력하세요." maxLength={150} required />
    </>
  );
};

export default CocktailInfo;
