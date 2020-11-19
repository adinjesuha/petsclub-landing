import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Products from "../components/products"
import Brands from "../components/brands"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
    <Brands />
  </Layout>
)

export default IndexPage
