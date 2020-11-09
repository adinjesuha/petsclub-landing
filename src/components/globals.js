import styled, { css } from 'styled-components'
import { device } from '../utils/breakpoints'

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 1rem;
  width: auto;
  height: 100%;
  @media ${device.tablet}{
    padding: 0 2rem;
    max-width: 764px;
  }
  @media ${device.laptop}{
    max-width: 960px; 
  }
  @media ${device.laptopL}{
    max-width: 1250px; 
  }
  ${props => props.fluid && css`
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  `}
`

export const FlexContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop}{
    flex-direction: row;
  }
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
`

export const H2 = styled.h2`
  text-align: center;
  color: #3A8537;
  font-size: 2rem;
  @media ${device.tablet}{
    font-size: 2.5rem;
  }
`