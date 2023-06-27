import styled from 'styled-components';

export const StyledHeader = styled.header`
  .ant-layout-header {
    padding: 10px 20px 8px 22px;
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    color: #fff;
    background-color: #141414;
    align-items: center;

    .ant-typography {
      color: #fff;
      width: 100%;
      margin-left: 10px;
      height: 24px;
      font-family: AppleSDGothicNeo;
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
    }
    .anticon-bell {
      font-size: 19px;
      margin-right: 10px;
    }
  }
`;
