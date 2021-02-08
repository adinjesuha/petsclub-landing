import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import NewsLetterForm from './newsletterForm'

const NewsLetterSection = styled.section`
  background-color: #353a61;
  padding: 3rem 1rem;
  margin-top: 3rem;
  @media ${device.tablet}{
    padding: 6rem 1rem;
    margin-top: 6rem;
  }
`

const NewsLetterContainer = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  .news-instructions{
    color: rgba(255,255,255,.7);
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
`

const HeadLine = styled.div`
  text-align: center;
  max-width: 530px;
  margin: auto;
  margin-bottom: 3rem;
  color: #fff;
  h2{
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h3{
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.4;
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
    <NewsLetterContainer>
      <HeadLine>
        <h2>Suscribete a nuestro newsletter</h2>
        <h3>Recibe promociones especiales y notificaciones de nuevos productos.</h3>
      </HeadLine>
      <NewsLetterForm />
    </NewsLetterContainer>
  </NewsLetterSection>
)

export default NewsLetter