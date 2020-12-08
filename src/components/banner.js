import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container } from './globals'

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
`

const Banner = ({img}) => {
  const data = useStaticQuery(graphql`
    query {
      bannerSmall: file(relativePath: { eq: "banner-example-small.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      banner: file(relativePath: { eq: "banner-example.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bannerLarge: file(relativePath: { eq: "banner-example-large.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    data.bannerSmall.childImageSharp.fluid,
    {
      ...data.banner.childImageSharp.fluid,
      media: "(min-width: 521px)",
    },
    {
      ...data.bannerLarge.childImageSharp.fluid,
      media: "(min-width: 768px)",
    },
  ]
  return(
    <Container borderBottom paddingBottom marginTop>
      <BannerContainer>
        <Img fluid={sources} alt="Banner example" />
      </BannerContainer>
    </Container>
  )
}

export default Banner