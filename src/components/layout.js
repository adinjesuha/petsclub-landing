import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
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
      />
      <main>{children}</main>
      <footer style={{
        marginTop: `2rem`
      }}>
        © {new Date().getFullYear()}, Built with
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
