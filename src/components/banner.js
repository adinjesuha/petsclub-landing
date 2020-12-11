import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container } from './globals'

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerSmall: file(relativePath: { eq: "nutrisource-banner-small.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bannerMedium: file(relativePath: { eq: "nutrisource-banner-medium.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bannerLarge: file(relativePath: { eq: "nutrisource-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    {
      ...data.bannerSmall.childImageSharp.fluid,
      media: "(max-width: 520px)"
    },
    {
      ...data.bannerMedium.childImageSharp.fluid,
      media: "(max-width: 768px)",
    },
    {
      ...data.bannerLarge.childImageSharp.fluid,
      media: "(min-width: 769px)",
    },
  ]

  return(
    <Container>
      <BannerContainer>
        <Img fluid={sources} alt="Banner example" />
      </BannerContainer>
    </Container>
  )
}

export default Banner