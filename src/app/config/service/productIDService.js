// productService.js
import  storeFront  from "../storefront-api";
import PRODUCT_BY_ID_QUERY  from "../queries/productsIDQuery";

export default async function getProductById(id) {
  try {
    const variables = {id : `gid://shopify/Product/${id}`};
    const response = await storeFront(PRODUCT_BY_ID_QUERY, variables);
    console.log(response.data.product)
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
}
