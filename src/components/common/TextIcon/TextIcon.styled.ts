import styled from 'styled-components';

export const StyledTextIcon = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: #595959;
  font-size: 0.7rem;
  margin-top: 3px;
  font-family: AppleSDGothicNeo;
  margin: 0px;
  margin-top: 10px;
  padding: 0px;

  :focus {
    color: #fff;
  }

  &.column-aligned-nav-links {
    display: flex;
    font-size: 10px;
    width: 100%;
    align-items: center;

    .MuiSvgIcon-root {
      margin-right: 1px;
      width: 13px;
      height: 13px;
    }
  }

  &.row-aligned-nav-links {
    width: 20%;
    .anticon {
      font-size: 20px;
      margin-bottom: 7px;
    }
  }
`;
