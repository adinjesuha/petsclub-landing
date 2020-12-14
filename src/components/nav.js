import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import DropDownItem from './dropDownItem'
import FoodDropDownItem from './foodDropDownItem'

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
        > a{
          background: transparent;
          display: inline-block;
          color: #fff;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;  
          line-height: 40px;
          padding: 4px 8px;
          margin: 0;
          text-decoration: none;
          position: relative;
          border: 0;
          transition: background-color .2s, box-shadow .2s;
          vertical-align: middle;
          white-space: nowrap;
        }
        &:hover > a{
          background-color: #222649;
        }
      }
      .li--active a{
        color: #F04359;
      }
    }
  }
  @media ${device.tablet}{
    display: block;
  }
`

const Nav = ({setShowPopper}) => (
  <MainMenu>
    <nav className="primary-menu">
      <ul className="primary-menu__links">
        <li className="primary-menu__links--li li--active">
          <Link to="/">Promociones</Link>
        </li>
        <li className="primary-menu__links--li">
          {/* <Link to="/">Alimento</Link> */}
          <DropDownItem title="Alimento" setShowPopper={setShowPopper}>
            <FoodDropDownItem />
          </DropDownItem>
        </li>
        <li className="primary-menu__links--li">
          <Link to="/">Farmacia</Link>
        </li>
        <li className="primary-menu__links--li">
          <Link to="/">Higiene y Belleza</Link>
        </li>
      </ul>
    </nav>
  </MainMenu>
)

export default Nav