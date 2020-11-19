import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container, FlexContainer } from './globals'
import NewsLetterForm from "./newsletterForm"

const Hero = styled.header`
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
`

const Content = styled.div`
  width: 100%;
  max-width: 520px;
  height: 100%;
  padding: 1rem 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet}{
    padding-right: 1rem;
    width: 50%;
    display: block;
    height: auto;
  }
  @media ${device.laptop}{
    padding: 0 1rem 0 0;
  }
`

const Logo = styled.div`
  width: 90px;
  margin: 0 auto;
  padding-bottom: 1rem;
  img{
    margin-bottom: 0;
  }
  @media ${device.mobileL}{
    width: 120px;
  }
  @media ${device.tablet}{
    width: 140px;
    margin: 0;
  }
`

const HeadLine = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h2{
    font-size: 1.8rem;
    line-height: 1.1;
    font-weight: 300;
    letter-spacing: -1px;
    margin: 0;
    padding: 0;
  }
  @media ${device.mobileL}{
    font-size: 2rem;
  }
  @media ${device.tablet}{
    text-align: left;
    h2{
      font-size: 2.4rem;
    }
  }
  @media ${device.laptop}{
    h2{
      font-size: 3.2rem;
    }
  }
`

const FormWrap = styled.div`
  max-width: 520px;
  h4{
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }
  p{
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  @media ${device.tablet}{
    margin-top: 4rem;
    h4, p{
      text-align: left;
    }
    h4{
      margin-bottom: 1rem;
    }
  }
  @media ${device.laptop}{
    margin-top: 6rem;
    h4{
      font-size: 1.3rem;
    }
    p{
      font-size: 1rem;
    }
  }
`

const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 180px;
  &:before{
    content: '';
    display: block;
    position: absolute;
    top: -200px;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${require('../images/confetti.svg')});
    z-index: 1;
    background-size: 783px 585px;
    @media ${device.tablet}{
      top: 0;
      width: 90vw;
      right: 0;
    }
  }
  .gatsby-image-wrapper{
    width: 100%;  
  }
  @media ${device.mobileL}{
    margin-top: 150px;
  }
  @media ${device.tablet}{
    margin: 0;
    width: 100vw;
    right: -320px;
  }
  @media ${device.laptopL}{
    width: 84vw;
    height: 100%;
    right: -220px;
  }
`


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
       heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return(
    <Hero>
      <Container>
        <FlexContainer>
          <Content>
            <HeadLine>
              <Logo>
                <img src={require('../images/logo.svg')} width="100%"/>
              </Logo>
              <h2>Escuché que hay una pet shop que se abrirá muy pronto ...</h2>
            </HeadLine>
            <FormWrap>
              <h4>Obten un 20% de descuento en la apertura</h4>
              <NewsLetterForm />
              <p>Una vez que te has suscrito, recibirá un email con un <strong>promocode</strong> para tu primera compra en <strong>PETS CLUB</strong>.</p>
            </FormWrap>
          </Content>
          <ImageWrap>
            <Img 
              fluid={data.heroImage.childImageSharp.fluid} 
              alt="Pets Club Catálogo"
            />
          </ImageWrap>
        </FlexContainer>
      </Container>
    </Hero>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``
}

export default Header
