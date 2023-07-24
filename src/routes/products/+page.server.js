export async function load({fetch}){
    const response = await fetch('/api/products');
    const products = response.json();
   return {
      products,
   }
  }