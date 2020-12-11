import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(0,0,0,.25);
  border: 1px solid #ddd;
  border-radius: 4px;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: block;
  text-align: left;
  padding: 1rem;
  margin-top: 0;
  color: #333;
  margin-bottom: 0;
  position: absolute;  
  top: 48px;
  right: 0px;
  will-change: transform;
  z-index: 3001;
  width: 100vw;
  max-height: calc(100vh - 15rem);
  max-width: 20.5rem;
  .header{
    text-align: center;
    &__text{
      color: rgba(34, 38, 73, .5);
      margin-top: 1rem;
      margin-bottom: .5rem;
      font-size: 1rem;
    }
    &__number{
      font-size: 2rem;
      line-height: 1.2;
      margin-top: -.3px;
      margin-bottom: 1rem;
      display: block;
      font-weight: 500;
      text-decoration: none;
      color: #F04359;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .help-tiles{
    margin-bottom: 1.2rem;
    display: flex;
    margin-left: -1rem;
    margin-right: -1rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .tile{
      color: #222649;
      display: block;
      background-color: #f9f9f9;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      text-align: center;
      text-decoration: none;
      line-height: 1.6;
      flex: 1;
      .icon{
        margin-right: .6rem;
        display: inline-block;
        align-items: baseline;
        &__image{
          display: inline-block;
          vertical-align: middle;
          width: 1.5rem;
          height: 1.5rem;
          fill: currentColor;
        }
      }
      &:last-child{
        border-left: 1px solid #ddd;
      }
      &:hover{
        background-color: #fff;
        text-decoration: underline;
      }
    }
  }
  .footer{
    color: rgba(34, 38, 73, .5);
    text-align: center;
    margin: 0;
  }
`

const HelpDropDownItem = () => (
  <Item>
    <div className="header">
      <p className="header__text">Obten ayuda Inmediata</p>
      <a 
        href="tel: +504 9676-1158" 
        target="_blank" 
        rel="noopener noreferrer"
        className="header__number"
      >+504 9676-1158</a> 
    </div>
    <div className="help-tiles">
      <a href="https://api.whatsapp.com/send?phone=50496761158&text=%F0%9F%91%8B%F0%9F%8F%BB%20%C2%A1Hola!%20%F0%9F%98%89%20Pet's%20Club%20Honduras" target="_blank" rel="noopener noreferrer" className="tile">
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 418.135 418.135" className="icon__image">
            <g><path d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536 L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631 c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197 c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607 l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819 c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817 C371.446,250.361,354.281,291.803,323.886,322.197z"/>
            <path d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008 c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218 l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356 c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057 c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"/></g>
          </svg>
        </span>
        Whatsapp
      </a>
      <a href="mailto:ventas@petsclubhn.com" target="_blank" rel="noopener noreferrer" className="tile">
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.117 382.117" className="icon__image">
            <g>
            <path d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41 c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354 c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001 c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987 L62.87,84.397h256.378L191.059,192.987z"/>
            </g>
          </svg>
        </span>
        Contáctanos
      </a>
    </div>
    <p className="footer">Nuestros canales de ayuda</p>
  </Item>
)

export default HelpDropDownItem