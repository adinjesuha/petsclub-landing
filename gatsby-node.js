const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const productList = path.resolve(`./src/templates/product-list.js`)

  const { data, errors } = await graphql(`
    query {
      takeshape {
        getProductList{
          items {
            name
          }
        }
      }
    }
  `);

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  // Create blog-list pages
  const products = data.takeshape.getProductList.items
  const productsPerPage = 5
  const numPages = Math.ceil(products.length / productsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/productos` : `/productos/${i + 1}`,
      component: productList,
      context: {
        size: productsPerPage,
        from: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

}