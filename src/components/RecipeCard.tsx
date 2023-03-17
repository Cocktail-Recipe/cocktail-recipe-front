import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

interface Props {
  cocktail: {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
  }
}

const Card = styled(Paper)`
  padding: 16px;
`

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
`

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`

const Title = styled(Typography)`
  text-align: center;
`

const RecipeCard: React.FC<Props> = ({ cocktail }) => {
  return (
    <Card elevation={2}>
      <ImageWrapper>
        <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </ImageWrapper>
      <Title variant="h6">{cocktail.strDrink}</Title>
    </Card>
  )
}

export default RecipeCard
