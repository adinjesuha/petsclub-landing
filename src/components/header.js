import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { keyframes, css } from 'styled-components'

import { Container, FlexContainer } from './globals'
import { device } from '../utils/breakpoints'
import Logo from './logo'
import DropDownItem from "./dropDownItem";
import Nav from './nav'

const headerSlideDown = keyframes`
  0%  { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  position: relative;
  z-index: 3999;
`

const HeaderTop = styled.div`
  /* background-color: #F04359; */
  background-color: #353a61;
  width: 100%;
  padding: .5rem 0;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,.25);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  @media ${device.laptop}{
    position: ${props => props.show ? 'fixed' : 'absolute'};
    box-shadow: ${props => props.show ? '0 3px 5px 0 rgba(0,0,0,.25)' : 'none'};
    ${props => props.show && css`
      animation: ${headerSlideDown} .3s;
    `}
  }
`

const LogoContainer = styled(Link)`
  font-size: 0;
  display: inline-block;
  width: 120px;
`

const Header = ({ setShowPopper, showPopper }) => {
  const [showOnScroll, setShowOnScroll] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const elementHeight = headerRef.current.offsetHeight
    const hanldeScroll = () => {
      const currentScrollY = window.scrollY;
      if(500 < currentScrollY && !showOnScroll){
        setShowOnScroll(true)
      }
      if(elementHeight > currentScrollY && showOnScroll){
        setShowOnScroll(false) 
      }
    }
    window.addEventListener('scroll', hanldeScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', hanldeScroll)
  }, [showOnScroll])


  return(
    <HeaderWrapper ref={headerRef}>
      <HeaderTop show={showOnScroll}>
        <Container>
          <FlexContainer spaceBetween>
            <LogoContainer to="/">
              Pet's Club
              <Logo white/>
            </LogoContainer>
            <Nav />
            <DropDownItem
              setShowPopper={setShowPopper}
              showPopper={showPopper}
            />
          </FlexContainer>
        </Container>
      </HeaderTop>
    </HeaderWrapper>
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

// Secciones Pagina Inicio
// -Los mas vendidos
// -Exclusivos para cachorros
// -- Necesidades
// -Esculisivos para adultos
// -Necesidades especificas
// -Pulgas y Garrapatas