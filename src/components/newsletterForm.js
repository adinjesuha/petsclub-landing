import React, { useState } from 'react'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'

const Form = styled.form`
  margin: .5rem 0;
  .form__input--group{
    display: flex;
    flex-direction: column; 
  }
  .form__input{
    display: block;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: .2px;
    margin-bottom: .5rem;
    width: 100%;
    cursor: text;
    position: relative;
    transition: border-color .3s,margin-bottom .3s;
    &--el{
      font-size: 0.925rem;
      line-height: 1.5rem;
      padding: 1.325rem 1rem .175rem;
      width: 100%;
      border: none;
      background: transparent;
      background-color: transparent;
      outline: none;
      z-index: 1;
      color: #fff;
      position: relative;
    }
    &--border{
      border: 1px solid #fff;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: border-color .3s;
    }
  }
  .form__input--el.has-value ~ .form__label,
  .form__input--el:focus ~ .form__label{
    transform: translate3d(-2px,-10px,0);
    font-size: .5975rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  .form__label{
    letter-spacing: 1px;
    line-height: 2rem;
    padding: 0.525rem 1.125rem .175rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: transform .3s,font-size .3s,color .3s;
  }
  .btn__wrap{
    display: inline-block;
    border-radius: 4px;
    width: auto;
    position: relative;
    overflow: hidden;
  }
  .btn{
    color: #fff;
    cursor: pointer;
  }
  .btn--submit{
    display: inline-block;
    background-color: #f53e5b;
    border: 2px solid transparent;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    padding: 16px 0 12px;
    width: 100%;
    transition: background-color .3s,color .3s,border-color .3s;
  }
  @media ${device.laptop} {
    .form__input--group{
      flex-direction: row;
    }
    .form__input{
      margin: 0;
      max-width: 360px;
      &--el{
        font-size: 1.125rem;
        line-height: 2rem;
        padding: 1.625rem 1rem .375rem;
      }
      &--border{
        border-radius: 4px 0 0 4px;
        border-right: none;
      } 
      .form__label{
        letter-spacing: 1.7px;
        line-height: 2rem;
        padding: 1.125rem 1.625rem .875rem;
      }
      .form__input--el.has-value ~ .form__label,
      .form__input--el:focus ~ .form__label{
        transform: translate3d(-10px, -13px, 0);
        font-size: .6875rem;
      }
    }
    .btn__wrap{
      border-radius: 0 4px 4px 0;
    }
    .btn--submit{
      padding: 24px 0 20px;
      width: 160px;
    }
  }
`


const NewsLetterForm = () => {
  const [ email, setEmail ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form__input--group">
        <label className="form__input">
          <input 
            className={`form__input--el ${email.length ? 'has-value' : ''}`}
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form__input--border"/>
          <div className="form__label">Ingresa tu correo</div>
        </label>
        <div className="btn__wrap">
          <button className="btn btn--submit">Suscribirse</button>
        </div>
      </div>
    </Form>
  )
}

export default NewsLetterForm