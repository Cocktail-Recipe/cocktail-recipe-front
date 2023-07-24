import styled from 'styled-components';

export const StyledMiniBoard = styled.div`
  padding-top: 30px;
  .ant-typography {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-bottom: 50px;
  }
  .post-content-list {
    padding-top: 10px;
  }
  .post-content-wrapper {
    display: flex;
    flex-direction: row;
    align-items: self-end;
    justify-content: space-between;
    button {
      margin-right: 5px;
    }
  }
`;
