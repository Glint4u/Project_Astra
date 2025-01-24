const PRODUCT_BY_ID_QUERY = `
  query getProductById($id: ID!) {
  product(id: $id) {
    title
    description
    featuredImage {
      url
      altText
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
  
`;

export default PRODUCT_BY_ID_QUERY;
