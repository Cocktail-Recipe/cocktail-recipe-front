import styled from 'styled-components';

export const StyledCocktailCategoryButton = styled.div`
  .ant-btn,
  .ant-btn-affix-wrapper {
    .ant-typography {
      color: #ffffff;
    }
    width: 100%;
    background-color: #1f1f1f !important;
    color: white;
    border: none !important;
    ::placeholder {
      color: #ffffff;
      opacity: 0.45;
    }
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
