import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'
import Brands from "../components/brands"
import NewsLetter from "../components/newsletter"
import Promos from "../components/promos"
import FeaturedCollection from "../components/featuredCollection"
import PuppyCollection from "../components/puppyCollection"
import SpecificNeedsCollection from '../components/specificNeedsCollection'
import FleaAndTickCollection from '../components/fleaAndTickCollection'
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Promos />
    <FeaturedCollection />
    <Brands />
    <PuppyCollection />
    <Banner />
    <SpecificNeedsCollection />
    <FleaAndTickCollection />
    <NewsLetter />
  </Layout>
)

export default IndexPage
