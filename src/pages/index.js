import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Catalog from "../components/catalog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Catalog />
  </Layout>
)

export default IndexPage
