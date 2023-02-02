import Product from "./Product";

const ProductListing = ({ products, onEditProduct, onDeleteProduct, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product
          product={product}
          key={product._id}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductListing;