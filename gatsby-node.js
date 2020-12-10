const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const dogFoodtList = path.resolve(`./src/templates/dog-food.js`)
  const catFoodtList = path.resolve(`./src/templates/cat-food.js`)

  const { data, errors } = await graphql(`
    {
      dog: takeshape {
        getProductList(where: {
          category: {name: {eq: "Food"}}, 
          specie: {name: {eq: "Dog"}}}
        ){
          items{
            name
            specie{
              name
            }
          }
        }
      }
      cat: takeshape {
        getProductList(where: {
          category: {name: {eq: "Food"}}, 
          specie: {name: {eq: "Cat"}}}
        ){
          items{
            name
            specie{
              name
            }
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
  
  const dogProducts = data.dog.getProductList.items
  const catProducts = data.cat.getProductList.items
  
  const productsPerPage = 5
  
  const dogNumPages = Math.ceil(dogProducts.length / productsPerPage)
  const catNumPages = Math.ceil(catProducts.length / productsPerPage)
  

  Array.from({ length: dogNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/alimento-para-perros` : `/alimento-para-perros/${i + 1}`,
      component: dogFoodtList,
      context: {
        size: productsPerPage,
        from: i * productsPerPage,
        dogNumPages,
        currentPage: i + 1,
      },
    })
  })

  Array.from({ length: catNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/alimento-para-gatos` : `/alimento-para-gatos/${i + 1}`,
      component: catFoodtList,
      context: {
        size: productsPerPage,
        from: i * productsPerPage,
        catNumPages,
        currentPage: i + 1,
      },
    })
  })

}