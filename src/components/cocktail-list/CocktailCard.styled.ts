import styled from 'styled-components';

export const StyledCocktailCard = styled.div`
  .ant-list-item {
    &::marker {
      font-size: 0 !important;
    }
  }
  .ant-list-item-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
  }
  .ant-list-item-meta-content {
    padding-left: 15px;
    margin-top: -20px;
  }

  .ant-card {
    border: solid 1px #1b1b1b;
  }

  .ant-card-body {
    padding: 12px;
    background-color: #1b1b1b;

    .ant-card-meta-title {
      font-family: AppleSDGothicNeo;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      color: rgba(255, 255, 255, 0.85);
    }

    .ant-card-meta-description {
      font-family: AppleSDGothicNeo;
      font-size: 12px;
      height: 60px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
