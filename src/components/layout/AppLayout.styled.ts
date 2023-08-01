import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  background-color: #141414;

  .ant-layout.cocktail-detail-page {
    .ant-layout-content {
      padding: 0px !important;
    }
  }

  .ant-layout.cocktail-editor-page {
    .ant-typography {
      color: white !important;
    }
    height: 100vh !important;

    .ant-layout-header {
      font-family: AppleSDGothicNeo;
      font-size: 20px;
      font-weight: 600;
      position: fixed;
      z-index: 100;
    }
    .ant-layout-content {
      padding: 40px !important;
      padding-top: 70px !important;
    }
    .ant-drawer {
      position: fixed !important;
    }
    .ant-space {
      width: 100%;
    }
    .filter-apply-btn {
      width: 100%;
      position: fixed;
      bottom: 0;
      border: none;
      border-radius: 0px;
      color: #fff;
      height: 48px;
      background-color: #ff4e16;
      margin-left: -40px;
      margin-right: -40px;
    }
    .ant-avatar {
      border: 1px solid white;
    }
    .ant-list-item div {
      color: white;
    }
    .ant-list-item-meta-title {
      color: white;
    }
    .auto-sizer {
      height: 800px !important;
    }
  }

  .cocktail-list-page .ant-layout-content {
    height: calc(100vh) !important;
  }

  .main-page {
    .ant-layout-content {
      height: 100%;
      padding-bottom: 70px;
    }

    .auto-sizer {
      height: 300px !important;
    }
  }

  .ant-layout-content {
    padding: 0px 20px;
    background-color: #141414;
    height: calc(100vh - 210px);
  }
`;
