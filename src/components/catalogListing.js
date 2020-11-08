import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
// Components
import CatalogItem from './catalogItem';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -.5rem;
  margin-right: -.5rem;
`

const CatalogListing = () => {
  const data = useStaticQuery(graphql`
    query {
      products: allShopifyProduct(sort: {fields: publishedAt, order: ASC}) {
        edges {
          node {
            shopifyId
            title
            variants {
              shopifyId
              title
              price
              availableForSale
            }
            images {
              id
              localFile{
                childImageSharp {
                  fluid(maxWidth: 190, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <List>
      {data.products.edges.map(({node: product}) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default CatalogListing;