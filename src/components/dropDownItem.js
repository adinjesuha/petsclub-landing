import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'

import { device } from '../utils/breakpoints'

const Item = styled.div`
  display: none;
  vertical-align: middle;
  position: relative;
  @media ${device.tablet}{
    display: inline-block;
  }
  .popper{
    white-space: nowrap;
    .popper-animation-enter-done{
      opacity:1;
      transition: opacity .4s;
    }
    .popper-animation-exit{
      opacity:1;
    }
    .popper-animation-exit-active{
      opacity: 0;
      transition: opacity .4s;
    }
    &__title{
      margin: 0;
      padding: 4px 8px;
      position: relative;
      display: inline-block;
      background: transparent;
      border: 0;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      line-height: 40px;
      text-align: left;
      transition: color .2s, background-color .2s, box-shadow .2s;
      vertical-align: middle;
      white-space: nowrap;
      text-transform: uppercase;

      padding-right: 0;
      border-radius: 4px 0 0 4px;
      color: #fff;
    }
    &__button{
      margin: 0;
      padding: 4px 8px;
      position: relative;
      display: inline-block;
      background: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 700;
      line-height: 40px;
      text-align: left;
      transition: background-color .3s, box-shadow .3s;
      vertical-align: middle;
      white-space: nowrap;

      padding-left: .4rem;
      border-radius: 0 4px 4px 0;
      &--arrow{
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 0;
        height: 0;
        content: " ";
        border: 10px solid transparent;
        border-bottom-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: opacity .4s;
      }
      &:after{
        margin-left: 4px;
        position: relative;
        top: -1px;
        display: inline-block;
        width: 12px;
        height: 12px;
        background: no-repeat 50% url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 7'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' stroke='%23F04359' stroke-width='2' d='M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z'/%3E%3C/svg%3E");
        background-size: 12px auto;
        content: "";
        vertical-align: middle;
      }
    }
    &:hover{
      .popper__title, .popper__button{
        color: #F04359;
        background-color: #222649;
      }
      .popper__button{
        &--arrow{
          opacity: 1;
        }
      }
    }
  }
`

const DropDownItem = ({setShowPopper, children, title}) => {
  const [showItem, setShowItem] = useState(false)
  
  const handleMouseEnter = () => {
    setShowPopper(true)
    setShowItem(true)
  }
  const handleMouseLeave = () => {
    setShowPopper(false)
    setShowItem(false)
  }

  return(
    <Item 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="popper">
        <span className="popper__title">{title}</span>
        <button className="popper__button">
          <span className="popper__button--arrow" />
        </button>
        <CSSTransition
          unmountOnExit
          in={showItem}
          timeout={{ appear: 0, enter: 0, exit: 300 }}
          classNames='popper-animation'
          appear
        >{children}</CSSTransition>
      </div>
    </Item>
  )
}

export default DropDownItem;