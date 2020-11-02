import React from 'react'
import styled from 'styled-components'
// Components
import CatalogItem from './catalogItem';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -.5rem;
  margin-right: -.5rem;
`

const CatalogList = () => {
  return (
    <List>
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </List>
  )
}

export default CatalogList;