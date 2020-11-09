import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

const NavWrapper = styled.nav`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: -92px;
  a{
    display: inline-block;
    width: 120px;
    .gatsby-image-wrapper{
      width: 100%;
    }
    span{
      font-size: 0;
      color: #fff;
      width: 0;
      height: 0;
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