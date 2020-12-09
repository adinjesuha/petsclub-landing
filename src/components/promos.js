import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { Container, FlexContainer } from './globals'

const PromosHeader = styled.div`
  margin-top: 2rem;
`

const BannerContainer = styled.article`
  width: 100%;
  height: auto;
  ${props => props.column && css`
    padding: 0 .5rem;
    height: 250px;
    overflow: hidden;
  `}
`

const Promos = () => {
  const data = useStaticQuery(graphql`
    query {
      bigBanner: file(relativePath: { eq: "big-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1624, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fleaBanner: file(relativePath: { eq: "flea-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Container borderBottom>
      <PromosHeader>
        <BannerContainer>
          <Img fluid={data.bigBanner.childImageSharp.fluid}/>
        </BannerContainer>
        <FlexContainer isRow>
          <BannerContainer column>
            <Img fluid={data.fleaBanner.childImageSharp.fluid}/>
          </BannerContainer>
          <BannerContainer column>
            <Img fluid={data.fleaBanner.childImageSharp.fluid}/>
          </BannerContainer>
        </FlexContainer>
      </PromosHeader>
    </Container>
  )
}

export default Promos