import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
// Styles
import { device } from '../utils/breakpoints'

const ProductCardWrapper = styled.article`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding: 0 .3rem;
  width: 100%;
  position: relative;
  .card{
    display: block;
    color: #333;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 0 #ccc;
    border-radius: 4px;
    margin-bottom: 0;
    padding: 1rem 1rem 1rem .5rem;
    padding-left: 1rem;
    height: 100%;
    position: relative;
    &__image{
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 1rem;
      width: 80px;
      height: auto;
      min-height: 154px;
      .gatsby-image-wrapper{
        display: block;
        margin: 0;
        width: 100%;
        height: 100%;
      }
    }
    &__content{
      padding-bottom: 3.5rem;
      max-width: 100%;
      position: relative;
      flex-basis: 100%;
      p{
        margin: 0;
        color: #555;
        font-size: 13px;
      }
      .title{
        height: 3.2rem;
      }
      .item-info{
        position: absolute;
        bottom: 0;
        width: 100%;
        .price{
          color: #d0021b;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: .25rem;
        }
      }
    }
  }
  @media ${device.mobileM}{
    .card{
      &__content{
        padding-bottom: 3rem;
        p{
          font-size: 14px;
        }
      }
    }
  }
  @media ${device.mobileL}{
    padding: 0 .5rem;
    .card{
      &__image{
        width: 90px;
        min-height: 154px;
      }
      &__content{
        p{
          font-size: 14px;
        }
      }
    }
  }
  @media ${device.tablet}{
    padding-right: 12px;
    .card{
      &__image{
        height: 162px;
      }
    }
  }
`

const sliderCard = ({ product }) => {
  const {name, image, variants, vendor } = product
  return (
    <ProductCardWrapper>
      <div className="card">
        <div className="card__image">
          <Img 
            fluid={image.fluid} 
            alt={`${vendor.searchSummary} - ${name}`}
          />
        </div>
        <div className="card__content">
          <p className="title"><strong>{vendor.searchSummary} </strong>{name}, {variants[0].name}</p>  
          <div className="item-info">
            <p className="price">L. {variants[0].price}.00</p>
          </div>
        </div> 
      </div>
    </ProductCardWrapper>
  )
}

export default sliderCard