const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        message
        field
        code
      }
    }
  }
`;

export default CREATE_CHECKOUT_MUTATION;
