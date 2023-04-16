import { ReactNode } from 'react';
import styled from 'styled-components';

const CardGrid = styled.div`
  margin: 24px;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin: 0px 24px 12px 24px;
`;

const CocktailGrid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <CardGrid>{children}</CardGrid>
    </Container>
  );
};

export default CocktailGrid;
