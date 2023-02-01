import Product from "./Product";

const ProductListing = ({products, onSubmit, onDelete}) => {
  return (      
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product
          product={product}
          key={product._id}
          onSubmit={onSubmit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ProductListing;