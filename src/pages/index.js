import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Products from "../components/products"
import Brands from "../components/brands"
import NewsLetter from "../components/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
    <Brands />
    <NewsLetter />
  </Layout>
)

export default IndexPage
