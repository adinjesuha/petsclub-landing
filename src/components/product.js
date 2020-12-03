import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'

export const ProductCardWrapper = styled.article`
  position: relative;
  display: inline-block;
  border-top: 1px solid #ddd;
  background: #fff;
  @media ${device.mobileL}{
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 0 #ccc;
    border-radius: 5px;
    flex: 0 0 auto;
    width: calc(50% - 16px);
    margin: 8px;
  }
  @media ${device.tablet}{
    width: calc(33.33% - 16px);
  }
  @media ${device.laptop}{
    width: calc(25% - 16px);
  }
  @media ${device.laptopL}{
    width: calc(20% - 16px);
  }
  .product{
    padding: 30px 10px 17px;
    width: 100%;
    display: flex;
    align-items: center;
    .item-image{
      width: 31.25%;
      color: #9b9b9b;
      padding: 0 15px 0 5px;
      margin-bottom: 10px;
      .image-holder{
        display: inline-block;
        margin: 0 auto;
        position: relative;
        width: 100%;
        .gatsby-image-wrapper{
          width: 100%;
          margin: 0 auto 8px;
        }
      }
      .product-choices{
        display: block;
        font-size: .7em;
        font-weight: 300;
        text-align: center;
        line-height: 1.4em;
      }
      .blank-badge{
        display: block;
        height: 23px;
      }
    }
    .content{
      width: 68.75%;
      h2{
        padding: 0 30px 0 0;
        font-size: .9rem;
        font-weight: 400;
        text-align: left;
        line-height: 1.22em;
        margin: 0 0 5px;
        strong{
          font-weight: 700;
        }
      }
      .product-info{
        padding: 0 30px 0 0;
        p{
          margin: 0;
        }
        .price{
          color: #666;
          font-size: 1.2em;
          font-weight: 400;
          text-align: left;
          line-height: 1.11em;
          padding: 8px 0;
          strong{
            color: #d0021b;
            font-weight: 700;
            margin-right: 5px;
          }
          .price-old{
            text-decoration: line-through;
            vertical-align: middle;
            font-size: .7em;
          }
        }
        .shipping{
          font-size: .7em;
          font-weight: 400;
          text-align: left;
          padding: 8px 0;

          line-height: 1.11em;
          border-top: 1px solid #ddd;
        }
      }
    }
    @media ${device.mobileL}{
      background: #fff;
      padding: 15px;
      border-radius: 5px;
      flex-direction: column;
      padding-bottom: 116px;
      .item-image{
        padding: 0;
        margin: 0;
        width: 100%;
        .image-holder{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          width: 100%;
          .gatsby-image-wrapper{
            margin: 0;
            width: 100%;
            max-width: 120px;
            min-height: 222px;
          }
        }
        .product-choices{
          display: block;
          font-weight: 400;
          line-height: 1em;
          color: #666;
          background: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 3px;
          padding: 5px 10px;
        }
      }
      .content{
        width: 100%;
        h2{
          font-weight: 400;
          text-align: left;
          line-height: 1.4em;
          padding: 0;
          margin: 10px 0;
          min-height: 60px;
          /* white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; */
        }
        .product-info{
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          padding: 10px 15px;
          .price .price-old{
            font-size: .778em;
          }
          .shipping{
            border: none;
          }
        }
      }
    }
  }
`

const VariantOption = styled.div`
  display: inline-block;
  width: auto;
  margin: 0rem;
  padding: 0rem;
  position: relative;
  min-height: 1.4rem;
  .button-toggle__control{
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    display: inline-block;
    min-height: 0;
  }
  .button-toggle__label{
    font-weight: 700;
    display: block;
    padding: .4rem .6rem;
    border-radius: 4px;
    margin-right: 4px;
    margin-bottom: .2rem;
    touch-action: manipulation;
    background: #fff;
    border: 0.1rem solid #ddd;
    cursor: pointer;
    &--value{
      color: #333;
      font-size: .9rem;
    }
  }
  .label--selected{
    background-color: #fbf3e6;
    color: #333;
    cursor: default;
    border-color: #f5a623;
    box-shadow: 0 1px 0 0 #f5a623;
  }
`

const RadioSelect = ({handleOption, variant, variantSelected }) => {
  return (
    <VariantOption>
      <input 
        id={variant.sku}
        type="radio" 
        name="title"
        className="button-toggle__control"
        value={variant.sku}
        onChange={handleOption}
      />
      <label
        htmlFor={variant.sku}
        className={`button-toggle__label ${variantSelected === variant.sku ? "label--selected" : ""}`}
        aria-checked={variantSelected === variant.sku ? 'true' : 'false'}
      >
        <span className="button-toggle__label--value">{variant.name}</span>
      </label>
    </VariantOption>
  )
}

const Product = (props) => {
  const product = props
  const [ variant, setVariant ] = useState(product.variants[0])

   const handleOption = event => {
    const { value } = event.target
    const variantResult = product.variants.filter(variantItem => variantItem.sku === value)
    setVariant(variantResult[0])
  }

  return (
    <ProductCardWrapper>
      <div className="product">
        <div className="item-image">
          <div className="image-holder">
            <Img fluid={product.image.fluid} alt={`${product.vendor.searchSummary} - ${product.name}`}/>
          </div>
          {product.variants.length > 1 ? (
            <span className="product-choices">Más Opciones Disponibles</span>
          ) : (<span className="blank-badge"></span>) }
        </div>
        <div className="content">
          <h2>
            <strong>{product.vendor.searchSummary}</strong>{" "}
            {product.name}, {variant.name}
          </h2>  
          <div className="product-info">
            {product.variants.length > 1 ? (
              <div className="product-info__variants">
              {product.variants.map((variantOption) => (
                <RadioSelect
                  key={variantOption.sku}
                  handleOption={handleOption}
                  variant={variantOption}
                  variantSelected={variant.sku}
                />
              ))}
              </div>
            ) : null}
            <p className="price">
              <span><strong>L. {variant.price}.00</strong></span>
            </p>
            <p className="shipping">
              <strong>ENVÍO GRATIS</strong>
            {variant.price > 1285 ?  ' en este item' : ' arriba de L.1,285.00'}
            </p> 
          </div>
        </div> 
      </div>
    </ProductCardWrapper>
  )
}

export default Product