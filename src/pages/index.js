import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
  </Layout>
)

export default IndexPage
