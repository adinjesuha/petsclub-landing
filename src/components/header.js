import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import styled from 'styled-components'

import { Container, FlexContainer } from './globals'
import NewsLetterForm from "./newsletterForm"

const Hero = styled.header`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const HeadLine = styled.div`
  h1{
    font-size: 3.8rem;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 3rem;
  }
  h2{
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`

const FormWrap = styled.div`
  max-width: 520px;
  p{
    font-weight: 400;
    font-size: 1rem;
  }
`

const Content = styled.div`
  padding-right: 1rem;
  width: 50%;
  z-index: 1;
`

const Logo = styled.div`
  width: 160px;
`

const ImageWrap = styled.div`
  width: 84vw;
  position: absolute;
  right: -220px;
  &:before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80%;
    background-image: url(${require('../images/confetti.svg')});
    z-index: 1;
    background-size: 783px 585px;
  }
  .gatsby-image-wrapper{
    width: 100%;  
  }
`


const Header = ({ description }) => {
  const [showOnScroll, setShowOnScroll] = useState(false)

  useEffect(() => {
    const elementHeight = 500
    const hanldeScroll = () => {
      const currentScrollY = window.scrollY;
      if(elementHeight < currentScrollY && !showOnScroll){
        setShowOnScroll(true)
      }
      if(elementHeight > currentScrollY && showOnScroll){
        setShowOnScroll(false) 
      }
    }
    window.addEventListener('scroll', hanldeScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', hanldeScroll)
  }, [showOnScroll])

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
              <h1>I heard ther's a pet shop to be launched pretty soon...</h1>
              <h2>get 20% off at grand openning</h2>
            </HeadLine>
            <FormWrap>
              <NewsLetterForm />
              <p>Once you've subscribed you get an email with a <strong>promocode</strong> on your first purchase of any product in Pets Club</p>
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
