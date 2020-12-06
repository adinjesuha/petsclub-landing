import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { device } from "../utils/breakpoints"

const PaginationWrapper = styled.section`
border-top: 1px solid #ddd;
margin: 8rem .98% 2.3rem;
padding-top: 20px;
.pagination{
  padding: 0;
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__list-item{
    padding: 0;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 1rem;
    margin-left: .2rem;
    margin-right: .2rem;
    .pagination__item{
      text-decoration: none;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      font-weight: 400;
      user-select: none;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      outline: none;
      border-radius: 4px;
      transition: all,.4s,ease-out;
      background: #fff;
      color: #F04359;
      border: 1px solid #ddd;
      box-shadow: 0 1px 0 0 #ddd;
      font-size: 1rem;
      padding: 10px 1rem;
      &:hover{
        color: #F04359;
        border-color: #F04359;
        box-shadow: 0 1px 0 0 #F04359;
        text-decoration: none;
      }
    }
    .is-active, .is-active:hover{
      color: #fff;
      background: #F04359;
      border-color: #F04359;
      box-shadow: 0 0 0 0 #F04359;
    }
    .pagination__item--is-disabled{
      display: inline-block;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 1px 0 0 #ddd;
      color: #666;
      cursor: default;
      vertical-align: middle;
      line-height: 1;
      font-weight: 400;
      user-select: none;
      text-align: center;
      border: 1px solid #ddd;
      font-size: 1rem;
      padding: 10px 1rem;
      position: relative;
      text-decoration: none;
      white-space: nowrap;
      transition: all,.4s,ease-out;
    }
    &:first-child{
      order: -1;
      width: 47%;
      .pagination__item{
        width: 100%;
        &:before{
          content: "";
          background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -6 20.5 35'%3E%3Cpath fill='%23F04359' class='st0' d='M-2 11.5c0 .8.3 1.5.9 2.1l14.5 14.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1L5.2 11.5 17.6-.9c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L-1.1 9.4l-.1.1v.1c-.3.4-.8 1-.8 1.9z'/%3E%3C/svg%3E") no-repeat 0 0/9px 9px #fff;
          display: inline-block;
          width: 10px;
          height: 10px;
        }
      }
      .pagination__item--is-disabled{
        width: 100%;
        &:before{
          content: "";
          background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -6 20.5 35'%3E%3Cpath fill='%23666' class='st0' d='M-2 11.5c0 .8.3 1.5.9 2.1l14.5 14.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1L5.2 11.5 17.6-.9c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L-1.1 9.4l-.1.1v.1c-.3.4-.8 1-.8 1.9z'/%3E%3C/svg%3E") no-repeat 0 0/10px 9px #fff;
          display: inline-block;
          width: 10px;
          height: 10px;
        }
      }
    } 
    &:last-child{
      order: -1;
      width: 47%;
      .pagination__item{
        width: 100%;
        &:after{
          content: "";
          background: url("data:image/svg+xml;charset=utf-8,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='-2 -6 20.5 35'%3E%3Cpath fill='%23F04359' class='st0' d='M17.7 9.5l-.1-.1L3.1-5.1C2.5-5.7 1.8-6 1-6s-1.5.3-2.1.9C-1.7-4.5-2-3.8-2-3s.3 1.5.9 2.1l12.4 12.4-12.4 12.4c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l14.5-14.5c.6-.6.9-1.3.9-2.1 0-.9-.5-1.5-.8-2z'/%3E%3C/svg%3E") no-repeat 100% 0/9px 9px #fff;
          display: inline-block;
          width: 10px;
          height: 10px;
        }
      }
      .pagination__item--is-disabled{
        width: 100%;
        &:after{
          content: "";
          background: url("data:image/svg+xml;charset=utf-8,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='-2 -6 20.5 35'%3E%3Cpath fill='%23666' class='st0' d='M17.7 9.5l-.1-.1L3.1-5.1C2.5-5.7 1.8-6 1-6s-1.5.3-2.1.9C-1.7-4.5-2-3.8-2-3s.3 1.5.9 2.1l12.4 12.4-12.4 12.4c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l14.5-14.5c.6-.6.9-1.3.9-2.1 0-.9-.5-1.5-.8-2z'/%3E%3C/svg%3E") no-repeat 100% 0/9px 9px #fff;
          display: inline-block;
          width: 10px;
          height: 10px;
        }
      }
    } 
    @media ${device.mobileM}{
      padding-bottom: 0;
      margin-right: .4rem;
      margin-left: .4rem;
      &:first-child{
        order: unset;
        width: auto;
        .pagination__item{
          width: auto;
        }
        .pagination__item--is-disabled{
          width: auto;
        }
      } 
      &:last-child{
        order: unset;
        width: auto;
        .pagination__item{
          width: auto;
        }
        .pagination__item--is-disabled{
          width: auto;
        }
      } 
    }
    @media ${device.mobileL}{
      margin-right: .8rem;
      margin-left: .8rem;
    }
  }
}
`

const Pagination = ({isFirst, isLast, prevPage, numPages, productSlug, currentPage, nextPage}) => (
<PaginationWrapper>
  <ul className="pagination">
    <li className="pagination__list-item">
      {!isFirst ? (
        <Link className="pagination__item" to={prevPage} rel="prev">prev</Link>
      ) : (
        <span className="pagination__item--is-disabled">prev</span>
      )}
    </li>
    {Array.from({ length: numPages }, (_, i) => (
      <li 
        key={`pagination-number${i + 1}`} 
        className="pagination__list-item"
      >
        <Link
          to={`${productSlug}${i === 0 ? '' : i + 1}`}
          className={currentPage === i + 1 ? "pagination__item is-active" : "pagination__item"}
        >
          {i + 1}
        </Link>
      </li>)
    )}
    <li className="pagination__list-item">
    {!isLast ? (
        <Link className="pagination__item" to={nextPage} rel="next">next</Link>
      ) : (
        <span className="pagination__item--is-disabled">prev</span>
      )}
    </li>
  </ul>
</PaginationWrapper>
)

export default Pagination