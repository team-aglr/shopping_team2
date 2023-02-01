import Product from "./Product";

const ProductListing = ({products}) => {
  return (      
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product {...product} key={product._id}/>
      ))}
    </div>
  )
}

export default ProductListing;