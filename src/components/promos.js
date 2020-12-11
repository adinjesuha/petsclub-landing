import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { Container, FlexContainer } from './globals'
import { device } from '../utils/breakpoints'

const PromosHeader = styled.div`
  margin-top: 1rem;
  @media ${device.mobileL}{
    margin-top: 2rem;
  }
`

const BannerContainer = styled.article`
  width: 100%;
  height: auto;
  ${props => props.column && css`
    padding: 0 .5rem;
    overflow: hidden;
    @media ${device.mobileL}{
      width: 50%;
    }
  `}
`

const Promos = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopBanner: file(relativePath: { eq: "big-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1624, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      tabletBanner: file(relativePath: { eq: "big-banner-medium.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      mobileBanner: file(relativePath: { eq: "big-banner-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fleaBanner: file(relativePath: { eq: "flea-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 624, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  const sources = [
    {
      ...data.mobileBanner.childImageSharp.fluid,
      media: "(max-width: 520px)"
    },
    {
      ...data.tabletBanner.childImageSharp.fluid,
      media: "(max-width: 768px)",
    },
    {
      ...data.desktopBanner.childImageSharp.fluid,
      media: "(min-width: 769px)",
    },
  ]

  return (
    <Container borderBottom>
      <PromosHeader>
        <BannerContainer>
          <Img fluid={sources}/>
        </BannerContainer>
      </PromosHeader>
      <FlexContainer isRow>
        <BannerContainer column>
          <Img fluid={data.fleaBanner.childImageSharp.fluid}/>
        </BannerContainer>
        <BannerContainer column>
          <Img fluid={data.fleaBanner.childImageSharp.fluid}/>
        </BannerContainer>
      </FlexContainer>
    </Container>
  )
}

export default Promos