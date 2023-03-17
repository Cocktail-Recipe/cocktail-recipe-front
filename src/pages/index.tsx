import RecipeCard from '@/\bcomponents/RecipeCard'
import { Container, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Title = styled(Typography)`
  text-align: center;
  margin: 32px 0;
`

export const getServerSideProps = async () => {
  const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')

  return {
    props: {
      cocktails: result.data.drinks,
    },
  }
}

interface Props {
  cocktails: any[]
}

const Home: React.FC<Props> = ({ cocktails }) => {
  return (
    <Container maxWidth="md">
      <Title variant="h2">Cocktail Recipes</Title>
      <Grid container spacing={2}>
        {cocktails.map((cocktail) => (
          <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
            <RecipeCard cocktail={cocktail} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
