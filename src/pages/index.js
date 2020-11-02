import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import SEO from "../components/seo"
import NewsLetterForm from "../components/newsletterForm"
import Catalog from "../components/catalog"


const Hero = styled.div`
  background-color: #2A2725;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .hero-content, .hero-image{
    flex: 0 0 50%;
    width: 50%;
  }
  .hero-content{
    .logo-container{
      width: 150px;
      height: 70px;
      margin-bottom: 2.5rem;
      > div {
        width: 100%;
        max-width: 150px;
        height: 100%;
        max-height: 68px;
      }
    }
    .copy{
      padding-right: 2.5rem;
      h1{
        color: #fff;
        font-size: 3.5rem;
        margin-bottom: 2rem;
      }
      p{
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }
    }
    .newsletter-form{
      margin-top: 3rem;
      span{
        color: #fff;
        font-size: .9rem;
      }
    }
  }
  .hero-image{
    display: flex;
    align-items: flex-end;
    max-width: 520px;
    position: absolute;
    right: 0;
    overflow: hidden;
    > div {
      width: 100%;
    }
  }
  .container{
    margin: -6.25rem auto 0;
    position: relative;
    display: flex;
    align-items: center;
    width: 73.75rem;
    max-width: 100%;
    padding-top: 6.25rem;
  }
`


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <Hero>
        <div className="container">
          <div className="hero-content">
            <div className="logo-container">
              <Img fluid={data.logoImage.childImageSharp.fluid}/>
            </div>
            <div className="copy">
              <h1>Loving sitters take care of your pet</h1>
              <p>Our facility provides professional care-giving in a clean, safe and home-like enviroment for your pet.</p>
            </div>
            <div className="newsletter-form">
              <NewsLetterForm />
              <span>Suscribete a nuestro <strong>Newsletter</strong> para recibe noticias y promociones especiales</span>
            </div>
          </div>
          <div className="hero-image">
            <Img fluid={data.heroImage.childImageSharp.fluid} />
          </div>
        </div>
      </Hero>
      <Catalog />
    </>
  )
}

export default IndexPage
