import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Brands from "../components/brands"
import NewsLetter from "../components/newsletter"
import Promos from "../components/promos"
import Products from "../components/products"
import FeaturedCollection from "../components/featuredCollection"
import PuppyCollection from "../components/puppyCollection"
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Promos />
    <Brands />
    <FeaturedCollection />
    <PuppyCollection />
    <Banner />
    <Products />
    <NewsLetter />
  </Layout>
)

export default IndexPage
