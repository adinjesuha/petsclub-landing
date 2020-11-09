import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import { device } from '../utils/breakpoints'

const NavWrapper = styled.nav`
  width: 100%;
  padding: 2.5rem 0 1rem;
  text-align: center;
  margin-bottom: .75rem;
  position: relative;
  z-index: 2;
  a{
    display: inline-block;
    width: 80px;
    .gatsby-image-wrapper{
      width: 100%;
    }
  }
  @media ${device.tablet}{
    padding: 1rem 0;
    text-align: left;
    margin-bottom: -92px;
    a{
      width: 120px;
    }
  }
`

const Nav =  ({fluid}) => {
  return (
    <NavWrapper>
      <Link to="/">
        <Img 
          fluid={fluid} 
          alt="Pets Club Honduras"
        />
      </Link>
    </NavWrapper>
  )
}

export default Nav