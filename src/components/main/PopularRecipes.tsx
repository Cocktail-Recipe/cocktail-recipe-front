import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Typography } from 'antd';
import { COCKTAIL_URL } from '@/consts/routeUrl';
import { RightOutlined } from '@ant-design/icons';
import CocktailList from '../cocktail-list/CocktailList';

import { StyledPopularRecipes } from './PopularRecipes.styled';

const PopularRecipes = (): ReactElement => {
  return (
    <StyledPopularRecipes>
      <Typography.Text>인기 레시피</Typography.Text>
      <Link href={COCKTAIL_URL}>
        <RightOutlined />
      </Link>
      <CocktailList rowCount={1} />
    </StyledPopularRecipes>
  );
};

export default React.memo(PopularRecipes);
