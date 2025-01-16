import  storeFront  from "../storefront-api.js";
import PRODUCTS_QUERY  from "../queries/productsQuery.js";

export default async function getAllProducts() {
  try {
    const data = await storeFront(PRODUCTS_QUERY);
    // console.log(data);
    
    return data.data.products.edges.map(({ node }) => node);

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
