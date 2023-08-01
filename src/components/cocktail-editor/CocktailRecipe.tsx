import { ReactElement } from 'react';
import { StyledCocktailEditorInput, StyledCocktailEditorInputTitle } from './CocktailEditor.styled';
import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const CocktailRecipe = (): ReactElement => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <StyledCocktailEditorInputTitle>
        <Typography.Text>레시피 설명</Typography.Text>
      </StyledCocktailEditorInputTitle>
      <StyledCocktailEditorInput>
        <TextArea rows={10} placeholder="예시" maxLength={150} required />
      </StyledCocktailEditorInput>
    </div>
  );
};

export default CocktailRecipe;
