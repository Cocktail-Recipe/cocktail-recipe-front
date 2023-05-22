import { ReactElement } from 'react';
import { Space } from 'antd';

import AppLayout from '@/components/layout/AppLayout';
import HeaderWithLinks from '@/components/layout/header/HeaderWithLinks';
import TextIcon from '@/components/common/TextIcon/TextIcon';
import CocktailInfo from '@/components/cocktail-editor/CocktailInfo';
import CocktailCategory from '@/components/cocktail-editor/CocktailCategory';
import CocktailImage from '@/components/cocktail-editor/CocktailImage';
import CocktailName from '@/components/cocktail-editor/CocktailName';

const CocktailEditorPage = (): ReactElement => {
  return (
    <AppLayout
      style={{ padding: '20px', height: 'calc(100vh - 130px)' }}
      header={<HeaderWithLinks title="나만의 칵테일 공유하기" nextLink={<TextIcon name="다음" />} />}
    >
      <Space direction="vertical" size="large">
        <CocktailName />
        <CocktailInfo />
        <CocktailCategory />
        <CocktailImage />
      </Space>
    </AppLayout>
  );
};

export default CocktailEditorPage;
