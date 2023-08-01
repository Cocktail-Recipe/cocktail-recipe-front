import styled from 'styled-components';

export const StyledCocktailImage = styled.div`
  height: 250px;
  width: 100vw !important;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
  margin-right: -40px;

  .cocktail-image-input {
    display: none;
  }

  .cocktail-image-input-label {
    width: 104px;
    height: 104px;
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 40px 8px;
    border-radius: 8px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .cocktail-image-label {
    width: 104px;
    height: 104px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 40px 8px;
    border-radius: 8px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }
  .edit-cocktail-image {
    height: 250px !important;
    width: 100vw !important;
  }
  .anticon-close-circle {
    color: red;
    background: white;
    border-radius: 100%;
  }
`;
