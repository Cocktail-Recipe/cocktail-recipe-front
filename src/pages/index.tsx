import { Container, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Title = styled(Typography)`
  text-align: center;
  margin: 32px 0;
`;

// export const getServerSideProps = async () => {
// const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
// return {
//   props: {
//     cocktails: result.data.drinks,
//   },
// };
// };

interface Props {
  cocktails: any[];
}

const Home: React.FC<Props> = () => {
  return <Container maxWidth="md">Hello</Container>;
};

export default Home;
