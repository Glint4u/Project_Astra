// productsQuery.js
const PRODUCT_BY_ID_QUERY = `
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      publishedAt
      onlineStoreUrl
      images(first: 1) {
        edges {
          node {
            transformedSrc
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`;

export default PRODUCT_BY_ID_QUERY;