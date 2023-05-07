import React, { ReactElement } from 'react';
import { Drawer, Typography } from 'antd';
import { ContactSupportOutlined, SettingsOutlined, ArrowForwardIos } from '@material-ui/icons';
import TextIcon from '@/components/common/TextIcon/TextIcon';

import { StyledNavDrawer } from './NavDrawer.styled';

const { Text, Title } = Typography;

interface NavDrawerProps {
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
}

const NavDrawer = ({ isDrawerOpen, onCloseDrawer }: NavDrawerProps): ReactElement => {
  return (
    <StyledNavDrawer>
      <Drawer
        title={
          <Title level={5} style={{ margin: 0 }}>
            <Text>로그인 해주세요</Text>
            <ArrowForwardIos fontSize="small" />
          </Title>
        }
        width="60%"
        placement="left"
        closable={false}
        onClose={onCloseDrawer}
        open={isDrawerOpen}
        getContainer={false}
        footer={
          <>
            <Text>어플리케이션 버전 v 1.00</Text>
            <Text>팀명</Text>
          </>
        }
      >
        <div className="navigation-links-wrapper">
          {/* TODO: 설정, 문의하기 구현  */}
          <TextIcon url="" name="설정" icon={<SettingsOutlined />} isColumnAligned={true} />
          <TextIcon url="" name="문의하기" icon={<ContactSupportOutlined />} isColumnAligned={true} />
        </div>
      </Drawer>
    </StyledNavDrawer>
  );
};

export default React.memo(NavDrawer);
