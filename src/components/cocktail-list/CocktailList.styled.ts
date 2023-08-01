import styled from 'styled-components';

export const StyledCocktailCreateBtn = styled.div`
  height: 300px !important;

  .anticon-plus {
    position: fixed;
    font-size: 30px;
    bottom: 80px;
    right: 20px;
    color: 'green';
    border-radius: 100%;
    background-color: white;
    z-index: 1 !important;

    svg {
      width: 44px;
      height: 44px;
      padding: 10px;
      color: #fff;
      border: none;
      border-radius: 100px;
      background-color: #ff3d00;
    }
  }
`;
