const path = require('path')

function createPaginationPages(
  component, 
  totalItems, 
  base, 
  context, 
  createPage
){
  const pageSize = 20
  const pageCount = Math.ceil(totalItems / pageSize)
  const pages = Array.from({lenght: pageCount}).map((_, i) => createPage({
    path: i === 0 ? `/${base}` : `/${base}/${i + 1}`,
    component,
    context: {
      base,
      limit: pageSize,
      from: i * productsPerPage,
      pageCount,
      currentPage: i + 1,
      ...context
    }
  }))
  return [...pages]
}

function createCollectionsPage({dogFoodProducts}, createPage) {
  return createPaginationPages(
    path.resolve('./src/templates/test.js'),
    dogFoodProducts.getProductList.items.length,
    '/comida-para-perro',
    {},
    createPage
  );
}

module.exports = {
  createPaginationPages,
  createCollectionsPage,
};