import storeFront from "../storefront-api";
import CREATE_CHECKOUT_MUTATION from "../queries/createCheckOut";
export default async function createCheckout(cartItems) {
    try {
      const variables = {
        input: {
          lineItems: cartItems.map(item => ({
            variantId: item.id,
            quantity: item.quantity
          }))
        }
      };
  
      // Make the API call
      const response = await storeFront(CREATE_CHECKOUT_MUTATION, variables);
  
      if (response.data.checkoutCreate.checkout) {
        // Success: Return the checkout URL
        return response.data.checkoutCreate.checkout.webUrl;
      } else {
        // Handle any user errors from Shopify
        console.error('Checkout creation failed:', response.data.checkoutCreate.checkoutUserErrors);
        throw new Error("Checkout creation failed");
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
      throw error;
    }
  }