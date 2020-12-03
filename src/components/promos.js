import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container, FlexContainer } from './globals'

const LeftSide = styled.div`
  width: calc(60% - 1rem);
  margin: 0 .5rem;
  .gatsby-image-wrapper{
    width: 100%;
    height: auto;
  }
`

const RightSide = styled.div`
  width: calc(40% - 1rem);
  margin: 0 .5rem;
  .img-wrapper{
    position: relative;
    overflow: hidden;
    margin-bottom: 9.5px;
    width: 100%;
    height: 131px;
    .gatsby-image-wrapper{
      width: 100%;
      height: 100%;
    }
  }
`

const Promos = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      bravecto: file(relativePath: { eq: "Bravecto_Banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 390) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      canin: file(relativePath: { eq: "Canin_Banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 390) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hills: file(relativePath: { eq: "Hills_Cience.png" }) {
        childImageSharp {
          fluid(maxWidth: 390) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Container borderBottom>
      <FlexContainer isRow>
        <LeftSide>
          <Img fluid={data.banner.childImageSharp.fluid}/>
        </LeftSide>
        <RightSide>
          <div className="img-wrapper">
            <Img fluid={data.bravecto.childImageSharp.fluid}/>
          </div>
          <div className="img-wrapper">
            <Img fluid={data.canin.childImageSharp.fluid}/>
          </div>
          <div className="img-wrapper">
            <Img fluid={data.hills.childImageSharp.fluid}/>
          </div>
        </RightSide>
      </FlexContainer>
    </Container>
  )
}

export default Promos