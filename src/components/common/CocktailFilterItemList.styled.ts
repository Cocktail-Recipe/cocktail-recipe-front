import styled from 'styled-components';

export const StyledCocktailFilterItemList = styled.div`
  width: 100%;
  box-sizing: content-box;

  .ant-radio-group {
    width: 100%;
  }
  .ant-space {
    width: 100%;
    justify-content: flex-start;
  }
  .ant-space-item {
    width: 18%;
  }

  .cocktail-filter-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
    border: none;
    background-color: transparent;
  }
  .cocktail-filter-item-image {
    background-color: #fff;
    padding: 5px;
    border-radius: 8px;
  }
  .cocktail-filter-item-label {
    color: #fff;
    text-align: center;
    font-size: 12px;
  }
  .ant-radio-button-wrapper {
    border: none;
    background-color: transparent;
    line-height: inherit;
    padding-inline: 1px;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-radio-button-wrapper-checked {
    .cocktail-filter-item-label {
      color: #ff4e16;
    }
  }
`;
