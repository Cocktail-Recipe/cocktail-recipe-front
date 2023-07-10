import React, { ReactElement, useMemo } from 'react';
import { Button, Drawer, Typography } from 'antd';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { CloseOutlined, CommentOutlined, RightOutlined, SettingOutlined } from '@ant-design/icons';
import TextIcon from '@/components/common/TextIcon/TextIcon';
import MenuImage from '@/public/assets/images/home/Group 2608184@2x.png';
import { isNavDrawerOpen } from '@/states/drawer/drawer.state';

import { StyledNavDrawer } from './NavDrawer.styled';

const { Text, Title } = Typography;

interface NavDrawerProps {
  onCloseDrawer: () => void;
  onOpenSocialLoginDrawer: () => void;
}

const NavDrawer = ({ onCloseDrawer, onOpenSocialLoginDrawer }: NavDrawerProps): ReactElement => {
  const { data: session, status } = useSession();
  const isDrawerOpen = useRecoilValue(isNavDrawerOpen);

  const DrawerTitle = useMemo(
    () => (
      <div className="drawer-title">
        <Title level={5}>메뉴</Title>
        <Button icon={<CloseOutlined />} onClick={onCloseDrawer}></Button>
      </div>
    ),
    [onCloseDrawer],
  );

  return (
    <StyledNavDrawer>
      <Drawer
        title={DrawerTitle}
        width="100%"
        placement="left"
        closable={false}
        onClose={onCloseDrawer}
        open={isDrawerOpen}
        getContainer={false}
      >
        <div className="login-info">
          <Image width={55} height={39} src={MenuImage} alt="nav-drawer-image" />
          <Text className="login-welcome-text">반가워요!</Text>
          {session ? (
            <>
              {session.user?.name}
              <Button onClick={() => signOut({ redirect: false })}>
                로그아웃 하기 <RightOutlined />
              </Button>
            </>
          ) : (
            <Button onClick={onOpenSocialLoginDrawer}>
              로그인 해주세요 <RightOutlined />
            </Button>
          )}
        </div>
        <div className="navigation-links-wrapper">
          {/* TODO: 설정, 문의하기 구현  */}
          <TextIcon name="설정" icon={<SettingOutlined />} isColumnAligned={true} />
          <TextIcon name="문의하기" icon={<CommentOutlined />} isColumnAligned={true} />
        </div>
        <div className="application-info-wrapper">
          <Text>앱 버전 v 1.0.0</Text>
          <Text>팀이름</Text>
        </div>
      </Drawer>
    </StyledNavDrawer>
  );
};

export default React.memo(NavDrawer);
