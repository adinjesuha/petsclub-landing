const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const productCollections = path.resolve(`./src/templates/collections.js`)

  const { data, errors } = await graphql(`
    {
      takeshape{
        getCollectionList{
          items{
            _id
            slug
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

 // Array.from({ length: dogNumPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/alimento-para-perros` : `/alimento-para-perros/${i + 1}`,
  //     component: dogFoodtList,
  //     context: {
  //       size: productsPerPage,
  //       from: i * productsPerPage,
  //       dogNumPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })