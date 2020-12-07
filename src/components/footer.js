import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/breakpoints'
import { Container, FlexContainer } from './globals'
import Logo from './logo'

const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: #222649;
  @media ${device.tablet}{
    padding: 3rem 0;
  }
`

const FooterItem = styled.div`
  width: 100%;
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:first-child{
    order: 2;
    margin-bottom: 2rem;
  }
  &:nth-child(2){
    order: 1;
    margin-bottom: .8rem;
  }
  &:last-child{
    order: 3;
  }
  @media ${device.tablet}{
    width: 33.3333%;
    flex: 0 1 33.3333%;
    margin: 0 !important;
    &:first-child{
      order: 1;
      justify-content: flex-start;
    }
    &:nth-child(2){
      order: 2;
    }
    &:last-child{
      order: 3;
      
    }
  }
`

const LogoContainer = styled.div`
  width: 100px;
`

const ContactChannels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border-top: 1px solid #353a61;
  padding-top: 1rem;

  span{
    font-weight: 500;
    color: #f53e5b;
  }
  @media ${device.tablet}{
    justify-content: flex-end;
    border-top: 0px none transparent;
    padding-top: 0rem;
    span{
      margin-right: .8rem;
    }
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .icon{
    border: 2px solid #f53e5b;
    border-radius: 50%;
    display: block;
    font-size: 0;
    height: 2.8rem;
    width: 2.8rem;
    transition: all 300ms ease-in-out;
    &--fb{
      background-image: url(${require('../images/fb.svg')});
      background-size: 20px auto;
      background-position: 10px;
      background-repeat: no-repeat;
      margin-right: .8rem;
      &:hover{
        background-image: url(${require('../images/fb-white.svg')}) ;
        background-size: 20px auto;
        background-position: 10px;
        background-repeat: no-repeat;
      }
    }
    &--insta{
      background-image: url(${require('../images/instagram.svg')});
      background-size: 30px auto;
      background-position: 6px;
      background-repeat: no-repeat;
      &:hover{
        background-image: url(${require('../images/instagram-white.svg')});
        background-size: 30px auto;
        background-position: 6px;
        background-repeat: no-repeat;
      }
    }
    &:hover{
      background-color: #f53e5b;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FlexContainer spaceBetween flexWrap>
          <FooterItem>
            © {new Date().getFullYear()}, Pet’s Club Honduras
          </FooterItem>
          <FooterItem>
            <LogoContainer>
              <Logo white/>
            </LogoContainer>
          </FooterItem>
          <FooterItem>
            <ContactChannels>
              <span>Síguenos</span>
              <Social>
                <a href="https://www.facebook.com/petsclubHonduras/" target="_blank" rel="noopener noreferrer" className="icon icon--fb">facebook</a> 
                <a href="https://www.instagram.com/petsclub_store/" target="_blank" rel="noopener noreferrer" className="icon icon--insta">instagram</a> 
              </Social>
            </ContactChannels>
          </FooterItem>
        </FlexContainer>
      </Container>
    </FooterContainer>
  )
}

export default Footer;