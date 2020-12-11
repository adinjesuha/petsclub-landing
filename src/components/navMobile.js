import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

import { device } from '../utils/breakpoints'

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 3.59rem;
  bottom: 0;
  width: 100%;
  overflow-y: auto;
  background-color: #f9f9f9;
  .mobile-content{
    padding-bottom: 4.8rem;
    &__menu{
      margin: 0;
      margin-top: 0;
      margin-bottom: .5rem;
      padding: 0;
      color: #333;
      list-style: none;
      > li {
        border-bottom: 1px solid #ccc;
        position: relative;
        margin-bottom: 0;
        > a {
          background-color: #fff;
          display: block;
          font-size: 1rem;
          color: inherit;
          padding: 1.4rem;
          text-decoration: none;
          &:after{
            content: "";
            position: absolute;
            top: 18px;
            right: 0;
            width: 30px;
            height: 30px;
            margin-right: 16px;
            background: url(${require('../images/arrow-right.svg')}) no-repeat 100%;
            background-size: 22px 14px;
          }
        }
      }
    }
  }
  .mobile-link{
    background-color: #f53e5b;
    display: block;
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-decoration: none;
    transform: translateZ(0);
    z-index: 1;
  }
  @media ${device.tablet}{
    display: none;
  }
`

const NavMobile = ({showNav}) => {
  return(
    <CSSTransition
      in={showNav}
      timeout={300}
      unmountOnExit
      classNames='nav-animation'
    >
      <Nav>
        <div className="mobile-content">
          <ul className="mobile-content__menu">
            <li>
              <Link to="/alimento-para-perros">Alimento para Perros</Link>
            </li>
            <li>
              <Link to="/alimento-para-gatos">Alimento para Gatos</Link>
            </li>
            <li>
              <Link to="/necesidades-especificas">Necesidades Especificas</Link>
            </li>
            <li>
              <Link to="/enlatados">Enlatados</Link>
            </li>
            <li>
              <Link to="/treats">Treats</Link>
            </li>
            <li>
              <Link to="/farmacia">Farmacia</Link>
            </li>
            <li>
              <Link to="/salud-y-belleza">Salud y Belleza</Link>
            </li>
          </ul>
        </div>
        <a  
          href="tel: +504 9676-1158" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mobile-link"
        >
          <strong>Contáctanos</strong>{" "}504 9676-1158
        </a>
      </Nav>
    </CSSTransition>
  )
}

export default NavMobile