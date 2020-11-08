import  React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import CatalogListing from './catalogListing'

const Section = styled.section`
  padding: 3rem 0;
  width: 100%;
  background: #FCFCFC;
  h2{
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .container{
    margin: -6.25rem auto 0;
    position: relative;
    width: 73.75rem;
    max-width: 100%;
    padding-top: 6.25rem;
  }
`

const CatalogHeader = styled.div`
  position: relative;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  margin-bottom: 2.5rem;
  .catalog__header{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 1;
    h2{
      color: #fff;
      font-weight: 700;
      text-align: left;
      margin: 0;
    }
  }
  .catalog__img{
    width: 100%;
    > div {
      width: 100%;
    }
  }
  .catalog__menu{
    background-color:#fff;
    border-radius: 0 0 4px 4px;
    border: 1px solid #DDDBD9;
    border-top: 0px none;
    padding: 1rem;
  }
`

const Catalog = () => {
  const data = useStaticQuery(graphql`
  query {
    catalogHeader: file(relativePath: { eq: "catalog-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)
  return (
    <Section>
      <div className="container">
        <CatalogHeader>
          <div className="catalog__header">
            <h2>Catálogo de<br/>productos</h2>
          </div>
          <div className="catalog__img">
            <Img fluid={data.catalogHeader.childImageSharp.fluid}/>
          </div>
          <div className="catalog__menu">
            <p>I'm baby brooklyn taxidermy truffaut flexitarian keffiyeh, irony etsy whatever hot chicken humblebrag tattooed.</p>
          </div>
        </CatalogHeader>
        <CatalogListing />
      </div>
    </Section>
)
}

export default Catalog