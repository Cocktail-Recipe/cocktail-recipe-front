import styled from 'styled-components';

export const StyledSearchInput = styled.div`
  .ant-input-search {
    width: 100% !important;
    height: 40px;
    border-radius: 8px;
    margin: 4px 0px;

    input,
    input::placeholder {
      font-weight: normal;
      color: #ffffff !important;
      font-family: AppleSDGothicNeo;
      font-size: 14px;
    }

    input {
      background-color: #1f1f1f;
      border: 1px solid #1f1f1f;
    }

    input::placeholder {
      opacity: 0.6;
    }

    .ant-input-search-button {
      background-color: #1f1f1f;
      border: none;
      color: #fff !important;
    }
  }
`;
