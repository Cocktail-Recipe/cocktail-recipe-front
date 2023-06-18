import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  background-color: #141414;

  .ant-layout.cocktail-detail-page {
    .ant-layout-content {
      padding: 0px !important;
    }
  }

  .ant-layout.cocktail-editor-page {
    .ant-layout-content {
      padding: 0px !important;
      height: calc(100vh - 130px) !important;
    }
  }

  .ant-layout-content {
    padding: 0px 20px;
    background-color: #141414;
    height: calc(100vh - 210px);
  }
`;
