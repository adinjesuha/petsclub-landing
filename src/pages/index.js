import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Catalog from "../components/catalog"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Catalog />
  </>
)

export default IndexPage
