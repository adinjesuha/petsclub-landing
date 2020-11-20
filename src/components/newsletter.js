import React from 'react'
import styled from 'styled-components'

import { Container } from './globals'
import { device } from '../utils/breakpoints'
import NewsLetterForm from './newsletterForm'

const NewsLetterSection = styled.section`
  background-color: #fbfbfb;
  padding: 6rem 0;
  margin: 6rem 0;
  .news-instructions{
    color: rgba(39,43,55,.5);
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
`

const HeadLine = styled.div`
  text-align: center;
  max-width: 430px;
  margin: auto;
  margin-bottom: 3rem;
  h2{
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h3{
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
  }
  @media ${device.tablet}{
    h2{
      font-size: 1.6rem;
    }
  }
`

const NewsLetter = () => (
  <NewsLetterSection>
    <Container stretch>
      <HeadLine>
        <h2>abriremos muy pronto</h2>
        <h3>20% de descuento en nuestra gran apertura</h3>
      </HeadLine>
      <NewsLetterForm />
      <p className="news-instructions">Una vez que te has suscrito, recibirá un email con un <strong>promocode</strong> para tu primera compra en <strong>PETS CLUB</strong>.</p>
    </Container>
  </NewsLetterSection>
)

export default NewsLetter