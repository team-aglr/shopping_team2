import Product from "./Product";

const ProductListing = ({products, onSubmit}) => {
  return (      
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product product={product} key={product._id} onSubmit={onSubmit}/>
      ))}
    </div>
  )
}

export default ProductListing;