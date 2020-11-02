import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  flex: 0 0 auto;
  width: 25%;
  padding-left: .5rem;
  padding-right: .5rem;
  margin-bottom: 1rem;
  .card__content{
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #DDDBD9;
    box-shadow: 0 1px 0 #ccc;
  }
`


const CatalogItem = () => {
  return (
    <Card>
      <div className="card__content">
        <div className="item-image">
          <div className="image-holder"></div>
            <span className="product-choices">Más Opciones Disponibles</span>
        </div>
        <div className="content">
          <h3>Product title</h3>  
          <div className="product-info">
            <p className="price">
              <span><strong>L.1200.00</strong></span>
            </p>
          </div>
        </div> 
      </div>
    </Card>
  )
}

export default CatalogItem