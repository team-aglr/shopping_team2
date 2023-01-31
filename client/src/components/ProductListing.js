import Product from "./Product";

const ProductListing = ({products}) => {
  return (      
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product {...product} key={product.id}/>
      ))}
    </div>
  )
}

export default ProductListing;