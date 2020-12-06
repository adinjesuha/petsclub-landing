import React from 'react'
import styled from 'styled-components'
// Slick slider
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css"; 

const StyledSlider = styled(Slider)`
  .slick-list{
    margin-left: -.5rem;
    margin-right: -.6rem;
  }
  .slick-slide{
    padding-bottom: 1px;
  }
  .slick-prev, .slick-next  {
    background-image: url(${require('../images/arrow-right-brand.svg')});
    background-position: 9px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #F04359;
    margin-right: 4px;
    margin-left: 4px;
    width: 40px;
    height: 40px;
    outline: 0;
    transition: background-color .3s ease;
    /* positioning */
    transform: translate(0, -62px);
    top: 0;
    right: 0;
    left: unset;
    &::before{
      display: none;
    }
    &:hover{
      background-image: url(${require('../images/arrow-right-white.svg')});
      background-color: #F04359;
      outline: none;
    }
  }
  .slick-prev{
    transform: rotate(180deg) translate(50px, 62px);
  }
  .slick-dots{
    display: none;
  }
  .slick-disabled{
    transition: background-color .3s ease;
    background-image: url(${require('../images/arrow-right.svg')});
    border-color: #ddd;
    cursor: default;
    &:hover{
      background-image: url(${require('../images/arrow-right.svg')});
      background-color: transparent !important;
    }
  }
`

const CustomSlider = ({children}) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 375,
        settings: {
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <StyledSlider {...settings}>{children}</StyledSlider>
  )
}

export default CustomSlider