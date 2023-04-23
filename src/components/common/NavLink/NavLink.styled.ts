import styled from 'styled-components';

export const StyledNavLink = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: #555;
  font-size: 0.7rem;
  margin-top: 3px;

  .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
  }

  &.column-aligned-nav-links {
    display: flex;
    width: 100%;
    align-items: center;
  }

  &.row-aligned-nav-links {
    width: 20%;
  }
`;
