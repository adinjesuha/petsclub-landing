import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { Container } from './globals'
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
    height: 250px;
    overflow: hidden;
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
    </Container>
  )
}

export default Promos