import storeFront from "../storefront-api";
import CREATE_CHECKOUT_MUTATION from "../queries/createCheckOut";

export default async function createCheckout(cartItems) {
  try {
    // Create the input for the cartCreate mutation
    const variables = {
      input: {
        lines: cartItems.map((item) => ({
          merchandiseId: item.id, // This is the variantId
          quantity: item.quantity,
        })),
      },
    };

    // Make the API call
    const response = await storeFront(CREATE_CHECKOUT_MUTATION, variables);

    if (response.data.cartCreate.cart) {
      // Success: Return the cart details, including the checkout URL
      const { id, checkoutUrl } = response.data.cartCreate.cart;
      return { id, checkoutUrl };
    } else {
      // Handle any user errors from Shopify
      console.error("Cart creation failed:", response.data.cartCreate.userErrors);
      throw new Error("Cart creation failed");
    }
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
}
