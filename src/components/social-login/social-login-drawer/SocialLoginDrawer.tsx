'use client';
import { Button, Drawer, Typography } from 'antd';
import { ReactElement } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { CloseOutlined, LeftOutlined } from '@ant-design/icons';

import { StyledSocialLoginDrawer } from './SocialLoginDrawer.styled';
import { useRecoilValue } from 'recoil';
import { isSocialLoginDrawerOpen } from '@/states/drawer/drawer.state';
import React from 'react';

const { Text } = Typography;

interface SocialLoginDrawerProps {
  onCloseDrawer: () => void;
}

const SocialLoginDrawer = ({ onCloseDrawer }: SocialLoginDrawerProps): ReactElement => {
  const isDrawerOpen = useRecoilValue(isSocialLoginDrawerOpen);

  return (
    <StyledSocialLoginDrawer>
      <Drawer
        open={isDrawerOpen}
        width="100%"
        title={
          <div className="social-login-header">
            <div className="social-login-header-">
              <Button icon={<LeftOutlined />} onClick={onCloseDrawer} />
              <Text>로그인</Text>
            </div>
            <Button icon={<CloseOutlined />} onClick={onCloseDrawer} />
          </div>
        }
        placement="left"
        closable={false}
        onClose={onCloseDrawer}
        getContainer={false}
      >
        <div className="application-logo-wrapper">
          <Text>Cocktial Recipe</Text>
        </div>
        <div className="social-login-button-wrapper">
          <Button onClick={() => signIn('kakao')}>카카오로 로그인</Button>
          <Button onClick={() => signIn('naver')}>네이버로 로그인</Button>
        </div>
      </Drawer>
    </StyledSocialLoginDrawer>
  );
};

export default React.memo(SocialLoginDrawer);
