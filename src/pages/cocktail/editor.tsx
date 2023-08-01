import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Space } from 'antd';
import { useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { CloseOutlined } from '@ant-design/icons';

import AppLayout from '@/components/layout/AppLayout';
import HeaderWithLinks from '@/components/layout/header/HeaderWithLinks';
import CocktailInfo from '@/components/cocktail-editor/CocktailInfo';
import CocktailCategory from '@/components/cocktail-editor/CocktailCategory';
import CocktailImage from '@/components/cocktail-editor/CocktailImage';
import CocktailName from '@/components/cocktail-editor/CocktailName';
import { cocktailEditInputState } from '@/states/cocktail/cocktailCreate.state';
import CocktailFilterDetailDropdown from '@/components/cocktail-filter/CocktailFilterDetailDropdown';
import CocktailIngredientListContainer from '@/components/cocktail-editor/CocktailIngredientListContainer';
import ingredientAPI from '@/api/ingredient';
import CocktailSearchInput from '@/components/cocktail-filter/CocktailSearchInput';
import IngredientCategoryFilterContainer from '@/components/cocktail-editor/IngredientCategoryFilterContainer';
import CocktailIngredientList from '@/components/cocktail-ingredient/CocktailIngredientList';
import CocktailRegister from '@/components/cocktail-editor/CocktailRegister';

const CocktailEditorPage = (): ReactElement => {
  const resetCocktailCreateState = useResetRecoilState(cocktailEditInputState);
  const [isVisible, setVisible] = useState(false);
  const [isIngredientAddMode, setIngredientAddMode] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    return () => {
      resetCocktailCreateState();
    };
  }, [resetCocktailCreateState]);

  // useEffect(() => {
  //   ingredientAPI
  //     .getAllIngredients()
  //     .then(({ data }) => {
  //       console.log(data);
  //       setIngredientList(data.result.content);
  //     })
  //     .catch(() => setIngredientList([]));
  // });

  const onClickBackLink = useCallback(() => {
    router.back();
  }, [router]);

  const onClickNextlink = useCallback(() => {
    setVisible(false);
    setIngredientAddMode(true);
  }, []);

  const onClickSearch = useCallback(() => {
    ingredientAPI
      .getAllIngredients({ page: 1 })
      .then(({ data }) => {
        console.log(data);
        setIngredientList(data.result.content);
      })
      .catch(() => setIngredientList([]));
  }, []);

  useEffect(() => {
    return () => setIngredientAddMode(false);
  }, []);

  return (
    <AppLayout
      className="cocktail-editor-page"
      hasFooter={false}
      header={
        <HeaderWithLinks
          title={isIngredientAddMode ? '재료 추가하기' : '나만의 칵테일 공유하기'}
          nextLink={<CloseOutlined onClick={onClickBackLink} />}
        />
      }
    >
      <>
        <Space direction="vertical" size="large">
          {isIngredientAddMode ? (
            <CocktailRegister />
          ) : (
            <>
              <CocktailImage />
              <CocktailName />
              <CocktailCategory setVisible={setVisible} />
              <CocktailInfo />
              <Button className="filter-apply-btn" onClick={onClickNextlink}>
                다음
              </Button>
            </>
          )}
        </Space>
        <CocktailFilterDetailDropdown
          title="카테고리 선택"
          isVisible={isVisible}
          isSingleRangeVolume={true}
          setVisible={setVisible}
        />
      </>
    </AppLayout>
  );
};

export default CocktailEditorPage;
