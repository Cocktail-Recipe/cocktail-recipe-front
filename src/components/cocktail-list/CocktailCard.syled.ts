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
`;
