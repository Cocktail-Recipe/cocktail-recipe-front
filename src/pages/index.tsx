import { Container, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Title = styled(Typography)`
  text-align: center;
  margin: 32px 0;
`;

interface Props {
  cocktails: any[];
}

const Home: React.FC<Props> = () => {
  return <Container maxWidth="md">Hello</Container>;
};

export default Home;
