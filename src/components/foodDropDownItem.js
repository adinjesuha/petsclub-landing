import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Content = styled.div`
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(0,0,0,.25);
  border: 1px solid #ddd;
  border-radius: 4px;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  text-align: left;
  padding: 1rem;
  margin-top: 0;
  color: #333;
  margin-bottom: 0;
  position: absolute;  
  top: 48px;
  left: 0px;
  will-change: transform;
  z-index: 3001;
  width: 100vw;
  max-width: 15rem;
  max-height: calc(100vh - 15rem);

  .content__list{
    padding: 0;
    list-style: none;
    margin: -.5rem 0;
    li > a {
      color: #555;
      padding-top: .5rem;
      padding-bottom: .5rem;
      display: block;
      text-decoration: none;
    }
    li:hover a{
      color: #F04359;
      text-decoration: underline;
    }
  }
  
`

const FoodDropDownItem = () => (
  <Content>
    <ul className="content__list">
      <li>
        <Link to="/">Alimento para Perros</Link>
      </li>
      <li>
        <Link to="/">Alimento para Gatos</Link>
      </li>
      <li>
        <Link to="/">Necesidades Especificas</Link>
      </li>
      <li>
        <Link to="/">Enlatados</Link>
      </li>
      <li>
        <Link to="/">Treats</Link>
      </li>
    </ul>
  </Content>
)

export default FoodDropDownItem