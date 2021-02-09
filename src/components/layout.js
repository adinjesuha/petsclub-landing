import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'

import "./layout.css"
import "./fonts.css"
import Header from "./header"
import Footer from "./footer"

const Poppermask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  background-color: rgba(0,0,0,.5);
`

const Layout = ({ children }) => {
  const [ showPopper, setShowPopper ] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        description={data.site.siteMetadata?.description || `Description`}
        setShowPopper={setShowPopper}
        showPopper={showPopper}
      />
      <main>{children}</main>
      <CSSTransition
        unmountOnExit
        in={showPopper}
        timeout={{ appear: 0, enter: 0, exit: 300 }}
        classNames='popper-mask'
        appear
      >
        <Poppermask />
      </CSSTransition>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
