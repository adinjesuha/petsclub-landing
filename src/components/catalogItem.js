import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"

const Card = styled.div`
  flex: 0 0 auto;
  width: 25%;
  padding-left: .5rem;
  padding-right: .5rem;
  margin-bottom: 1rem;
  .card__content{
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #DDDBD9;
    box-shadow: 0 1px 0 #ccc;
  }
`

const ImagePreview = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  line-height: 1.2;
  margin: 0;
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  span {
  }
`;


const CatalogItem = ({product}) => {
  const { 
    title, 
    variants: [firstVariant],
    images: [firstImage], 
  } = product

  const { title: variantDescription } = firstVariant;
  const { price } = firstVariant;
  const fluid = firstImage?.localFile?.childImageSharp?.fluid;

  return (
    <Card>
      <div className="card__content">
        <ImagePreview>
          <Img fluid={fluid} />
          <span className="product-choices">Más Opciones Disponibles</span>
        </ImagePreview>
        <div className="content">
        <Title>{title}, {variantDescription}</Title>
        <Price>
          <span>Lps. </span>{price}
        </Price>
        </div> 
      </div>
    </Card>
  )
}

export default CatalogItem