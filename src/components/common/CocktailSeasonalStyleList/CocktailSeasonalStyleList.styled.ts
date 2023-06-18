import styled from 'styled-components';

export const StyledCocktailSeasonalStyleList = styled.div`
  width: 100%;
  .ant-radio-group {
    width: 100%;
  }
  .ant-space {
    width: 100%;
  }
  .ant-space-item {
    width: 25%;
  }

  .seasonal-style-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30px;
  }

  .ant-radio-button-wrapper {
    border: 1px solid #fff;
    border-radius: 8px;
    :hover {
      color: black;
    }
    .seasonal-style-label {
      text-align: center;
      font-size: 12px;
      font-family: AppleSDGothicNeo;
      font-weight: 600;
    }
  }
  .ant-radio-button-wrapper-checked {
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.85);

    .seasonal-style-label {
      color: #ff4e16;
    }
  }
`;
