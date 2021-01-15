const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const productCollections = path.resolve(`./src/templates/collections.js`)
  const dogFoodTemplate = path.resolve('./src/templates/food-collection.js')

  const { data, errors } = await graphql(`
    {
      takeshape{
        getCollectionList{
          items{
            _id
            slug
            products{
              _id
            }
          }
        }
      }
      products: takeshape {
        getProductList(
          where: {
            category: {
              name: {
                eq: "Food"
              }
            }
            specie: {
              name: {
                eq: "Dog"
              }
            }
          }
        ){
          items{
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


  data.takeshape.getCollectionList.items.forEach((collection) => {
    createPage({
      path: `/${collection.slug}`,
      component: productCollections,
      context: {
        collectionId: collection._id,
      },
    });
  });

}


// const dogFoodProducts = data.products.getProductList.items
// const productsPerPage = 20
// const dogNumPages = Math.ceil(dogFoodProducts.length / productsPerPage)

// Array.from({ length: dogNumPages}).forEach((_, i) => {
//   createPage({
//     path: i === 0 ? '/alimento-para-perros' : `/alimento-para-perros/${i + 1}`,
//     component: dogFoodTemplate,
//     context: {
//       size: productsPerPage,
//       from: i * productsPerPage,
//       dogNumPages,
//       currentPage: i + 1,
//     }
//   })
// })