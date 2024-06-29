import Product from "./components/Product";

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const resData = response.json()    

    return resData   
}

async function page() {
  const products = await getProducts()

  console.log(products);

  return (
    <div className={"grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-10 mt-10"}>
        { products && products.map(product => (
          <Product product={product} />
        )) }
    </div>
  )
}

export default page