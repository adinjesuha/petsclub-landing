import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Logo from './logo'
import { Container, FlexContainer } from './globals'
import { device } from '../utils/breakpoints'

const HeaderWrapper = styled.header`
  width: 100%;
`

const HeaderTop = styled.div`
  left: 0;
  right: 0;
  top: 0;
`

const HeaderBottom = styled.div`
  background-color: #F04359;
  width: 100%;
  height: 60px;
`

const LogoContainer = styled.div`
  width: 130px;
`

const MainMenu = styled.div`
  display: none;
  .primary-menu{
    &__links{
      display: flex;
      width: auto;
      margin: 0;
      &--li{
        margin: 0;
        padding: 0 .5rem;
        display: flex;
        align-items: center;
        a{
          color: #222649;
          font-size: .9rem;
          font-weight: 700;
          text-transform: uppercase;  
          padding: 1.85em 0;
          text-decoration: none;
        }
      }
      .promo a{
        color: #F04359;
      }
    }
  }
  @media ${device.tablet}{
    display: block;
  }
`

const ContactUs = styled.div`
  font-size: .7rem;
  a{
    color: #222649;
    text-decoration: none;
    font-weight: 700;
    transition: all .2s ease-in-out;
    &:hover{
      color: #F04359;
    }
  }
`

const Header = () => {
  return(
    <HeaderWrapper>
      <HeaderTop>
        <Container>
          <FlexContainer spaceBetween>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <MainMenu>
              <nav className="primary-menu">
                <ul className="primary-menu__links">
                  <li className="primary-menu__links--li promo">
                    <Link to="/">Promociones</Link>
                  </li>
                  <li className="primary-menu__links--li">
                    <Link to="/">Productos</Link>
                  </li>
                  <li className="primary-menu__links--li">
                    <Link to="/">Alimento</Link>
                  </li>
                  <li className="primary-menu__links--li">
                    <Link to="/">Salud y belleza</Link>
                  </li>
                </ul>
              </nav>
            </MainMenu>
            <ContactUs>
              <span>Whatsapp: </span>
              <a href="https://api.whatsapp.com/send?phone=50495798520&text=%F0%9F%91%8B%F0%9F%8F%BB%20%C2%A1Hola!%20%F0%9F%98%89%20Pet's%20Club%20Honduras" target="_blank" rel="noopener noreferrer">+504 9579-8520</a>
              <br />
              <span>Consulta despachos: </span>
              <a href="tel: +504 3175-6905" target="_blank" rel="noopener noreferrer">+504 3175-6905</a>
            </ContactUs>
          </FlexContainer>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        
      </HeaderBottom>
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
