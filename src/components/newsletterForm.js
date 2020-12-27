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
    background-color: #fff;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: .2px;
    margin-bottom: .5rem;
    width: 100%;
    cursor: text;
    position: relative;
    transition: border-color .3s,margin-bottom .3s;
    border-radius: 4px;
    &--el{
      font-size: 0.925rem;
      line-height: 1.5rem;
      padding: 1.325rem 1rem .175rem;
      width: 100%;
      border: none;
      background: #fff;
      background-color: transparent;
      outline: none;
      z-index: 1;
      color: #000;
      position: relative;
      &:-webkit-autofill {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px;
      }
    }
    &--border{
      border: 1px solid #ddd;
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
    font-weight: medium;
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
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
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
      max-width: auto;
      border-radius: 4px 0 0 4px;
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
      width: 240px;
    }
    .btn--submit{
      padding: 24px 0 20px;
    }
  }
`


const NewsLetterForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState('');

  const FORM_URL = `https://app.convertkit.com/forms/1910142/subscriptions`

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(
        FORM_URL,
        {
          method: 'post',
          body: data,
          headers: {
            accept: 'application/json',
          },
        }
      );
      setEmail('');
      const json = await response.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
      console.log(err);
    }
  };

  const handleInputChange = event => {
    const {value} = event.target;
    setEmail(value);
  }

  return (
    <Form 
      action={FORM_URL}
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="form__input--group">
        <label className="form__input">
          <input 
            type="email"
            name="email" 
            autoComplete="off"
            className={`form__input--el ${email.length ? 'has-value' : ''}`}
            onChange={handleInputChange}
            value={email}
          />
          <div className="form__input--border"/>
          <div className="form__label">Ingresa tu correo</div>
        </label>
        <div className="btn__wrap">
          <button className="btn btn--submit">Suscribete ya!</button>
        </div>
      </div>
      {status === 'SUCCESS' && <p>Please go confirm your subscription!</p>}
      {status === 'ERROR' && <p>Oops, Something went wrong! try again.</p>}
    </Form>
  )
}

export default NewsLetterForm