import styled from 'styled-components';

export const StyledNavDrawer = styled.div`
  .ant-drawer-title {
    > {
      display: inline-block;
    }
    .MuiSvgIcon-fontSizeSmall {
      font-size: 14px;
      vertical-align: middle;
    }
  }
  .navigation-links-wrapper {
    button {
      margin-bottom: 16px;

      div {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        margin-left: 8px;
      }
    }
  }
  .ant-drawer-footer {
    display: flex;
    flex-direction: column;
    .ant-typography {
      font-size: 10px !important;
    }
  }
`;
