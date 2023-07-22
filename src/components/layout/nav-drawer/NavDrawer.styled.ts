import styled from 'styled-components';

export const StyledNavDrawer = styled.div`
  .ant-typography {
    color: #ffffff;
  }
  .drawer-title {
    display: flex;
    justify-content: space-between;

    .ant-btn {
      border: none;
      box-shadow: none;
      border: none;
      background: transparent;
      color: #ffffff !important;
    }
    .ant-typography {
      align-self: center;
      margin: 0;
    }
  }
  .ant-drawer {
    position: fixed !important;
  }
  .ant-drawer-content {
    background-color: #141414 !important;
    color: #ffffff !important;
  }

  .ant-drawer-title {
    > {
      display: inline-block;
    }
  }
  .ant-drawer-body {
    .login-info {
      display: flex;
      flex-direction: column;

      .ant-btn {
        border: none;
        background: transparent;
        color: #ffffff;
        padding-left: 0;
        font-size: larger;
        width: 120px;
        text-align: left;
      }
      .login-welcome-text {
        font-family: AppleSDGothicNeo;
        font-size: 14px;
        padding-top: 20px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .navigation-links-wrapper {
    margin-top: 60px;
    button {
      margin-bottom: 40px;
      color: rgba(255, 255, 255, 0.85);

      div {
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        margin-left: 8px;
      }
      .anticon {
        font-size: 20px;
      }
    }
  }
  .application-info-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px 0 0;

    .ant-typography {
      font-family: AppleSDGothicNeo;
      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
