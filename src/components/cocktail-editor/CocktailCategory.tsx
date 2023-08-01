import { Button, Space, Typography } from 'antd';
import { ReactElement, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { RightOutlined } from '@ant-design/icons';

import {
  cocktailBaseAlcoholState,
  cocktailSeasonalState,
  cocktailStyleState,
  cocktailVolumeState,
} from '@/states/cocktail/cocktailCreate.state';
import { getCocktailHashTags } from '@/utils/cocktail';

import { StyledCocktailCategoryButton } from './CocktailCategory.styled';
import { StyledCocktailEditorInput, StyledCocktailEditorInputTitle } from './CocktailEditor.styled';

interface CocktailCategoryProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CocktailCategory = ({ setVisible }: CocktailCategoryProps): ReactElement => {
  const seasonalStyle = useRecoilValue(cocktailSeasonalState);
  const baseAlcohol = useRecoilValue(cocktailBaseAlcoholState);
  const cocktailStyle = useRecoilValue(cocktailStyleState);
  const volume = useRecoilValue(cocktailVolumeState);

  return (
    <Space direction="vertical">
      <StyledCocktailEditorInputTitle>
        <Typography.Text>칵테일 카테고리</Typography.Text>
      </StyledCocktailEditorInputTitle>
      <StyledCocktailEditorInput>
        <StyledCocktailCategoryButton>
          <Button onClick={() => setVisible(true)}>
            {baseAlcohol ? (
              getCocktailHashTags({
                baseAlcohol,
                cocktailStyle,
                seasonalStyle,
                volume,
              })
            ) : (
              <>
                <Typography.Text>카테고리 설정</Typography.Text> <RightOutlined />
              </>
            )}
          </Button>
        </StyledCocktailCategoryButton>
      </StyledCocktailEditorInput>
    </Space>
  );
};

export default CocktailCategory;
