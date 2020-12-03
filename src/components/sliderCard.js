import React from 'react'
import styled from 'styled-components'
// Styles
import { device } from '../styles/breakpoints'

const ProductCardWrapper = styled.article`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding-right: 8px;
  width: 100%;
  position: relative;
  .card{
    display: block;
    color: #333;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.25);
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 0;
    padding: 1rem 1rem 1rem .5rem;
    padding-left: 1rem;
    height: 100%;
    position: relative;
    &__image{
      margin-bottom: 6px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        display: block;
        margin: 0;
        max-width: 100%;
        height: 125px;
        height: 90px;
      }
    }
    &__content{
      padding: 0 0 2rem;
      padding-bottom: 3rem;
      max-width: 100%;
      position: relative;
      flex-basis: 100%;
      word-wrap: break-word;
      p{
        margin: 0;
        color: #555;
        font-size: 14px;
        font-size: 13px;
      }
      .title{
        height: 5rem;
      }
      .item-info{
        position: absolute;
        bottom: -.55rem;
        width: 100%;
        .price{
          color: #b32605;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: .25rem;
        }
      }
    }
  }
  @media ${device.tablet}{
    padding-right: 12px;
    .card{
      &__image img{
        height: 125px;
      }
    }
  }
`

const sliderCard = ({ product }) => {
  const {title, images, variants, vendor } = product
  return (
    <ProductCardWrapper>
      <div className="card">
        <div className="card__image">
          <img 
            src={`${images[0].originalSrc}`} 
            alt={title}
          />
        </div>
        <div className="card__content">
          <p className="title"><strong>{vendor} </strong>{title}, {variants[0].title}</p>  
          <div className="item-info">
            <p className="price">L.{variants[0].price}</p>
          </div>
        </div> 
      </div>
    </ProductCardWrapper>
  )
}

export default sliderCard