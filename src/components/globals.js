import styled, { css } from 'styled-components'
import { device } from '../utils/breakpoints'

export const Container = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  height: 100%;
  width: auto;
  @media ${device.laptop}{
    max-width: 1280px;
    padding: 0 2rem;
  }
  @media ${device.laptopL}{
    max-width: 1380px;
    padding: 0 3rem;
  }
  ${props => props.fluid && css`
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  `}
  ${props => props.fluidResponsive && css`
    padding: 0;
    margin: 0;
    max-width: 100%;
    @media ${device.mobileL}{
      margin: 0 auto;
      padding: 0 0.5rem;
    }
    @media ${device.laptop}{  
      max-width: 1280px;
      padding: 0 1.5rem;
    }
    @media ${device.laptopL}{
      max-width: 1380px;
      padding: 0 2.5rem;
    }
  `}
  ${props => props.marginTop && css`
    margin-top: 10px !important;
    @media ${device.laptop}{
      margin-top: 20px !important;
    }
  `}
  ${props => props.paddingBottom && css`
    padding-bottom: 2.5rem !important;
  `}
  ${props => props.borderBottom && css`
    &:after{
      content: "";
      display: block;
      border-bottom: 1px solid #ddd;
      width: 100%;
      margin-top: 2.5rem;
    }
  `}
`

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `}
  ${props => props.flexEnd && css`
    justify-content: flex-end;
  `}
  ${props => props.alignTop && css`
    align-items: flex-start;
  `}
  ${props => props.noHeight && css`
    height: 0;
  `}
  ${props => props.flexWrap && css`
    flex-wrap: wrap;
  `}
  ${props => props.isRow && css`
    margin-left: -.5rem;
    margin-right: -.5rem;
    margin-top: 1rem;
  `}
`

export const Heading = styled.h2`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: normal;
  padding: .4rem 0 0;
  margin-bottom: 1rem;
  width: 62%;
  min-height: 42px;
  position: relative;
  @media ${device.mobileL}{
    font-size: 1.6rem;
  }
  @media ${device.tablet}{
    max-width: 55rem;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
  }
`
