const PRODUCTS_QUERY = `
query {
  products(first: 20) {
    edges {
      node {
        id
        title
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
            }
          }
        }
      }
    }
  }
}`;


export default PRODUCTS_QUERY;
