import styled from 'styled-components';

export const StyledCocktailFilterDetailDropdown = styled.div`
  .cocktail-filter-detail-dropdown {
    .ant-drawer-body {
      background-color: #141414;
    }
    .ant-drawer-title {
      color: #fff;
      text-align: center;
    }
    .ant-drawer-header {
      background-color: #141414;
    }
    .ant-drawer-extra .ant-space-item button {
      border: none;
      background: transparent;
      color: #fff;
    }
    .filter-apply-btn {
      width: 100%;
      height: 48px;
      align-items: center;
      border: none;
      gap: 10px;
      border-radius: 8px;
      background-color: #ff4e16;

      span {
        color: #fff;
      }
    }
  }
`;
