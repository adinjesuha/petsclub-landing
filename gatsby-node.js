const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const collectionpage = path.resolve(`./src/templates/collections.js`)

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
      path:  `/${collection.slug}`,
      component: collectionpage,
      context: {
        id: collection._id
      },
    });
  });
}