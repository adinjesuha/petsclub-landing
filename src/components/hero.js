import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import { FlexContainer } from "./globals"
import { device } from '../utils/breakpoints'
import NewsLetterForm from "./newsletterForm"

const HeroContent = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index:2;
  .copy{
    color: #fff;
    text-align: center;
    h1{
      font-size: 3.5rem;
      line-height: 3rem;
      text-transform: uppercase;
    }
    p{
      font-size: 1.2rem;
    }
  }
  .newsletter-form{
    span{
      color: #fff;
      font-size: .9rem;
    }
  }
  @media ${device.tablet}{
    max-width: 520px;
    padding-top: 12.5rem;
    .copy{
      h1{
        font-size: 4.5rem;
      }
      p{
        font-size: 2rem;
      }
    }
  }
  @media ${device.laptop}{
    flex: 0 0 50%;
    width: 50%;
    justify-content: flex-start;
    .copy{
      padding-right: 2.5rem;
      text-align: left;
    }
    .newsletter-form{
      margin-top: 3rem;
    }
  }
`

const HeroImage = styled.div`
  width: 100%;
  position: absolute;
  top: -10%;
  right: -20%;
  .gatsby-image-wrapper{
    width: 120%;
  }
  @media ${device.laptop}{
    top: 0;
    right: 0;
    max-width: 520px;
  }
`

const Hero = ({siteTitle, description}) => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return(
    <FlexContainer>
      <HeroContent>
        <div className="copy">
          <h1>{siteTitle}</h1>
          <p>{description}</p>
        </div>
        <div className="newsletter-form">
          <NewsLetterForm />
          <span>Suscribete a nuestro <strong>Newsletter</strong> para recibe noticias y promociones especiales</span>
        </div>
      </HeroContent>
      <HeroImage>
        <Img fluid={data.heroImage.childImageSharp.fluid} />
      </HeroImage>
    </FlexContainer>
  )
}

export default Hero