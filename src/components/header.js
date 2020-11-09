import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

import { Container } from './globals'
import Hero from "./hero"
import Nav from "./nav"

const HeaderWrap = styled.header`
  background: #2a2725;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const Header = ({ siteTitle, description }) => {
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
      mobileLogo: file(relativePath: { eq: "logo-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 120, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    {
      ...data.mobileLogo.childImageSharp.fluid,
      media: "(max-width: 767px)",
    },
    {
      ...data.desktopLogo.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return(
    <HeaderWrap>
      <Container>
        <Nav fluid={sources}/>
        <Hero siteTitle={siteTitle} description={description}/>
      </Container>
    </HeaderWrap>
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
