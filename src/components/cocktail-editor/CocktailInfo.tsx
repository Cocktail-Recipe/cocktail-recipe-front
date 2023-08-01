import { Input, Typography } from 'antd';
import { ReactElement } from 'react';
import { StyledCocktailEditorInput, StyledCocktailEditorInputTitle } from './CocktailEditor.styled';

const { TextArea } = Input;

const CocktailInfo = (): ReactElement => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <StyledCocktailEditorInputTitle>
        <Typography.Text>칵테일 정보</Typography.Text>
      </StyledCocktailEditorInputTitle>
      <StyledCocktailEditorInput>
        <TextArea rows={3} placeholder="칵테일 정보를 입력해 주세요." maxLength={150} required />
      </StyledCocktailEditorInput>
    </div>
  );
};

export default CocktailInfo;
