import styled from 'styled-components';

export const StyledSocialLoginDrawer = styled.div`
  .ant-drawer {
    position: fixed;
  }
  .social-login-header,
  .ant-drawer-content,
  .ant-drawer-title .ant-typography {
    color: #ffffff !important;
    background-color: #141414 !important;
  }

  .social-login-header {
    display: flex;
    justify-content: space-between;

    .ant-btn {
      font-size: 20px;
      border: none;
      background: transparent;
      color: #ffffff;
    }
    .ant-typography {
      font-size: 20px;
    }
  }
  .application-logo-wrapper {
    height: 80%;
    align-items: center;
    display: flex;
    justify-content: center;

    //TODO: logo 이미지로 교체
    .ant-typography {
      color: #ffffff;
      font-size: large;
      text-align: -webkit-center;
    }
  }
  .social-login-button-wrapper {
    height: 20%;
    display: flex;
    flex-direction: column;

    .ant-btn {
      height: 50px;
      margin-bottom: 15px;
      border-radius: 8px;
    }
  }
`;
