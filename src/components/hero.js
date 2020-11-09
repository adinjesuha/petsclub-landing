import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import NewsLetterForm from "./newsletterForm"
import { FlexContainer } from "./globals"

const HeroContent = styled.div`
  flex: 0 0 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .copy{
    color: #fff;
    padding-right: 2.5rem;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.8rem;
    }
  }
  .newsletter-form{
    margin-top: 3rem;
    span{
      color: #fff;
      font-size: .9rem;
    }
  }
`

const HeroImage = styled.div`
  width: 50%;
  max-width: 520px;
  position: absolute;
  right: 0;
  bottom: 0;
  .gatsby-image-wrapper{
    width: 100%;
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