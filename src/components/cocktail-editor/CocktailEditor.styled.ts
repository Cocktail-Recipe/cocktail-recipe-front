import styled from 'styled-components';

export const StyledCocktailEditorInput = styled.div`
  padding-bottom: 8px;
  .ant-input-affix-wrapper,
  .ant-input {
    background-color: #1f1f1f !important;
    color: white;
    border: none !important;
  }
  .ant-input::placeholder {
    color: #ffffff;
    opacity: 0.45;
  }
`;

export const StyledCocktailEditorInputTitle = styled.div`
  padding-bottom: 12px;

  .ant-typography {
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    color: rgba(255, 255, 255, 0.85) !important;
  }
`;
