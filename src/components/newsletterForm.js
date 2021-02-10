import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { device } from '../utils/breakpoints'

const spin =  keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

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
  .spinner{
    position: relative;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    .dbl-spinner {
      position: absolute;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: transparent;
      border: 4px solid transparent;
      border-top: 4px solid rgba(255,255,255,.5);
      border-left: 4px solid rgba(255,255,255,.5);
      animation: 2s ${spin} linear infinite;
    }
    .dbl-spinner--2 {
      border: 4px solid transparent;
      border-right: 4px solid #fff;
      border-bottom: 4px solid #fff;
      animation: 1s ${spin} linear infinite;
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4000;
  background: #fff;
  overflow: auto;
  padding: 0;
  align-items: stretch;
  display: flex;
  justify-content: center;
  visibility: ${props => props.modalOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.modalOpen ? 1 : 0};;
  transition: opacity .3s ease;
  .dialog{
    background: #fff;
    padding: 80px 20px 20px;
    margin: auto;
    max-width: 620px;
    position: relative;
  }
  .btn__wrap{
    display: inline-block;
    border-radius: 2px;
    width: 240px;
    overflow: hidden;
    position: relative;
  }
  .btn{
    background: #f53e5b;
    display: block;
    color: #fff;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-align: center;
    padding: 16px 0 15px;
    width: 100%;
    transition: background-color .3s,color .3s,border-color .3s;
  }
  .btn--close{
    background: transparent;
    border: 0;
    width: 64px;
    height: 48px;
    position: absolute;
    top: 16px;
    right: 14px;
    transform: rotate(0deg);
    span{
      background: #111517;
      display: block;
      opacity: 1;
      height: 3px;
      width: 32px;
      position: absolute;
      top: 21px;
      left: 16px;
      transition: .25s ease-in-out,background-color .3s ease-out;
      &:first-child{
        transform: rotate(45deg);
      }
      &:last-child{
        transform: rotate(-45deg);
      }
    }
    &:hover span{
      background: #f53e5b;
    }
  }
  .container{
    margin-right: auto;
    margin-left: auto;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    p{
      font-size: 1.125rem;
      line-height: 2rem;
      font-family: Playfair Display,sans-serif;
      font-weight: 500;
      margin: 1.875rem auto;
      max-width: 580px;
    }
  }
  @media ${device.tablet}{
    background: rgba(0,0,0,.7);
    padding: 40px 0;
    .btn--close{
      top: 0;
      right: -66px;
      span{
        background: #fff;
      }
    }
    .dialog{
      padding: 40px;
      border-radius: 4px;
    }
  }
`

const NewsLetterForm = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const result = await addToMailchimp(email)
    setLoading(false)
    setResult(result)
    setModalOpen(true)
    setEmail('')
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="form__input--group">
          <label className="form__input">
            <input 
              type="email"
              name="email"
              required
              className={`form__input--el ${email.length ? 'has-value' : ''}`}
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <div className="form__input--border"/>
            <div className="form__label">Ingresa tu correo</div>
          </label>
          <div className="btn__wrap">
            <button className="btn btn--submit" disabled={loading}>
            {loading ? (
              <div className="spinner">
                <div className="dbl-spinner" />
                <div className="dbl-spinner dbl-spinner--2" />
              </div>
            ) : (
              <span>Suscribete ya!</span>  
            )}
            </button>
          </div>
        </div>
      </Form>
      <Modal modalOpen={modalOpen}>
        <div className="dialog">
          <button onClick={() => setModalOpen(false)} className="btn btn--close">
            <span />
            <span />
          </button>
          <div className="container">
            {result.result === 'success' && (
              <>
                <p>¡Gracias por suscribirte!</p>
                <div className="btn__wrap">
                  <button onClick={() => setModalOpen(false)} className="btn">Bien!</button>
                </div>
              </>
            )}
            {result.result === 'error' && (
              <>
                <p>Encontramos un problema... es probable que ya estes suscrit@ o hayas ingresado una dirección de correo no válida </p>
                <div className="btn__wrap">
                  <button onClick={() => setModalOpen(false)} className="btn">Intentalo de nuevo</button>
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default NewsLetterForm