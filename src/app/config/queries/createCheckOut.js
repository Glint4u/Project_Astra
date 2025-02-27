const CREATE_CHECKOUT_MUTATION = `
mutation CartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      checkoutUrl
    }
    userErrors {
      field
      message
    }
  }
}
`;

export default CREATE_CHECKOUT_MUTATION;
