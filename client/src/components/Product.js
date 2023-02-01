import { useState } from "react";
import EditProductForm from "./EditProductForm";

const Product = ({product, onSubmit}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  
  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className={`quantity ${product.quantity === 0 && "none-left"}`}>{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={`button add-to-cart ${product.quantity === 0 && "disabled"}`}>Add to Cart</a>
          <a className="button edit" onClick={() => setShowEditForm(true)}>Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
      {showEditForm && <EditProductForm product={product} setShowEditForm={setShowEditForm} onSubmit={onSubmit} />}
    </div>
  )
}

export default Product;