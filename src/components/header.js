import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { keyframes, css } from 'styled-components'

import { Container, FlexContainer } from './globals'
import { device } from '../utils/breakpoints'
import Logo from './logo'
import DropDownItem from "./dropDownItem";
import Nav from './nav'
import NavMobile from './navMobile'
import HelpDropDownItem from './helpDropDownItem'

const headerSlideDown = keyframes`
  0%  { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`

const HeaderWrapper = styled.header`
  width: 100%;
  height: 3.6rem;
  position: relative;
  z-index: 3999;
  @media ${device.tablet}{
    height: 4rem;
  }
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
  width: 90px;
  @media ${device.tablet}{
    width: 120px;
  }
`

const NavButton = styled.button`
  display: inline-block;
  background-color: #222649;
  color: inherit;
  outline: 0;
  padding: 0;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: 0;
  border-radius: 4px;
  color: inherit;
  vertical-align: middle;
  cursor: pointer;
  &:before, &:after, .nav-button__line{
    content: "";
    width: 1.875rem;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateZ(0);
    margin-left: -.9375rem;
    transition: opacity .1s ease-in,transform .3s ease-out;
  }
  .nav-button__line{
    margin-top: -.125rem;
  }
  &:before{
    margin-top: -.75rem;
    transform-origin: top left;
  }
  &:after{
    margin-top: .5rem;
    transform-origin: bottom left;
  }
  @media ${device.tablet}{
    display: none;
  }
  ${props => props.isActive && css`
    .nav-button__line{
      opacity: 0;
    }
    &:before{
      transform: translate(.4rem) rotate(45deg);
    }
    &:after{
      transform: translate(.4rem) rotate(-45deg);
    }
  `}
`

const PlaceHolerDiv = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  @media  ${device.tablet}{
    display: none;
  }
`

const Header = ({ setShowPopper }) => {
  const [ activeButton, setActiveButton ] = useState(false)
  const [ showOnScroll, setShowOnScroll ] = useState(false)
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
            <NavButton
              onClick={() => setActiveButton(!activeButton)}
              isActive={activeButton}
            >
              <span className="nav-button__line"></span>
            </NavButton>
            <LogoContainer to="/">
              Pet's Club
              <Logo white/>
            </LogoContainer>
            <Nav setShowPopper={setShowPopper}/>
            <NavMobile showNav={activeButton}/>
            <PlaceHolerDiv/>
            <DropDownItem title="Contáctanos" setShowPopper={setShowPopper}>
              <HelpDropDownItem />
            </DropDownItem>
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