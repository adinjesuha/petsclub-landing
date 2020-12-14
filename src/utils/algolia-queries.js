const indexName = `Products`

const productQuery = `
{
  takeshape {
    getProductList {
      items {
        _id
        newProduct
        vendor {
          searchSummary
        }
        name
        image{
          path
          fluid(maxWidth: 190, quality: 100) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        imageSmall{
          path
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        variants{
          sku
          name
          price
          salePrice
          deal
        }
      }
    }
  }
`

function pageToAlgoliaRecord({ _id, name, variants, ...rest }) {
  return {
    objectID: _id,
    name,
    ...variants,
    ...rest,
  }
}

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) => data.takeshape.getProductList.items.map(pageToAlgoliaRecord),
    indexName
  }
]

module.exports = queries