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
  font-weight: ${props => props.medium ? "medium" : "normal"};;
  padding: .4rem 0 0;
  margin-bottom: 1rem;
  width: 62%;
  min-height: 42px;
  position: relative;
  text-transform: ${props => props.capitalize ? "capitalize" : "uppercase"};
  @media ${device.mobileL}{
    font-size: 1.6rem;
  }
  @media ${device.tablet}{
    max-width: 55rem;
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }
`

// Templates Styles
export const PageWrapper = styled.div`
  background-color: ${props => props.withBg ? "#fcfcfc" : "transparent"};
  @media ${device.tablet}{
    padding-top: 1rem;
  }
  @media ${device.laptop}{
    padding-top: 3rem;
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
`

export const Filters = styled.aside`
  width: 232px;
  padding: 0 25px 0 0;
  display: none;
  .filters-container{
    padding: 0;
    margin: 0;
    &__header{
      position: relative;
      h3{
        font-size: 1.3rem;
        line-height: 1.33333;
        margin-top: -.3px;
        margin-bottom: 1rem;
        font-weight: 400;
      }
    }
    &__content{
      padding: 25px 0 20px;
      border-bottom: 1px solid #ddd;
      h4{
        font-size: 1.1rem;
        line-height: 1.33333;
        margin-top: -.3px;
        margin-bottom: 1rem;
        font-weight: 400;
      }
      .categories{
        margin-top: 1rem;
        &__item{
          font-size: .875rem;
          padding: 0;
          margin-bottom: .8125rem;
          display: flex;
          a{
            flex: 1;
            color: #F04359;
            text-decoration: none;
          }
          &:hover a {
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media ${device.laptop}{
    display: block;
  }
`

export const Results = styled.div`
  width: 100%;
  .results-content{
    margin: 2rem 0;
  }
`