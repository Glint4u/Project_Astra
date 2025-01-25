import storeFront from "../storefront-api";
import CREATE_CHECKOUT_MUTATION from "../queries/createCheckOut";

export default async function createCheckout(cartItems) {
  try {
    // Prepare the input for the checkout creation mutation
    const variables = {
      input: {
        lineItems: cartItems.map(item => ({
          variantId: item.id,
          quantity: item.quantity
        }))
      }
    };

    // Call the Storefront API to create a checkout
    const response = await storeFront(CREATE_CHECKOUT_MUTATION, variables);
    
    // Log and return the checkout URL
    console.log(response.data.checkoutCreate.checkout.webUrl);
    return response.data.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error("Error creating checkout:", error);
    throw error;
  }
}
