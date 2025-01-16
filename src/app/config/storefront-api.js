//TESTING
// const STOREFRONT_ACCESS_TOKEN = "8d457f93871f36a604461e11004b3b3b";
// const SHOPIFY_URL = "https://astratest.myshopify.com/api/2025-01/graphql.json";

//INDIA
const STOREFRONT_ACCESS_TOKEN = "70a766803f552774eb260fbfd69c55dc";
const SHOPIFY_URL = "https://ri0ayh-qx.myshopify.com/api/2025-01/graphql.json";

//US
// const STOREFRONT_ACCESS_TOKEN = "f15718585f7e3916dc39486507ad84fc";
// const SHOPIFY_URL = "https://dtkt1c-bn.myshopify.com/api/2025-01/graphql.json";

export default async function storeFront(query, variables = {}) {
  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const response = await fetch(SHOPIFY_URL, options);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    const data = await response.json();
    if (data.errors) throw new Error("GraphQL query failed");
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw new Error("Failed to fetch from Shopify Storefront API");
  }
}


// // storefront-api.js

// const STOREFRONT_ACCESS_TOKEN = "8d457f93871f36a604461e11004b3b3b";
// const SHOPIFY_URL = "https://astratest.myshopify.com/api/2025-01/graphql.json";

// async function storeFront(query, variables = {}) {
//   const options = {
//     method: "POST",
//     headers: {
//       "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   };

//   try {
//     const response = await fetch(SHOPIFY_URL, options);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`HTTP error! Status: ${response.status}`);
//       console.error("Error details:", errorText);
//       throw new Error(`Shopify API error: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data.errors) {
//       console.error("GraphQL Errors:", data.errors);
//       throw new Error("GraphQL query failed");
//     }

//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw new Error("Failed to fetch from Shopify Storefront API");
//   }
// }

// export async function getAllProducts() {
//   // const productsQuery = `query {
//   //   products(first: 10, after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=") {
//   //     edges {
//   //       node {
//   //         id
//   //         title
//   //         handle
//   //       }
//   //       cursor
//   //     }
//   //     pageInfo {
//   //       hasNextPage
//   //     }
//   //   }
//   // }`;
//   const productsQuery = `{
//   products(first: 10) {
//     edges {
//       node {
//         id
//         title
//         priceRange {
//           minVariantPrice {
//             amount
//           }
//         }
//         images(first: 1) {
//           edges {
//             node {
//               transformedSrc
//             }
//           }
//         }
//    }
// }
// }
// }`;

//   const data = await storeFront(productsQuery);
//   return data;
// }


