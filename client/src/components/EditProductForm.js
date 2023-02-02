import { useState } from "react";
import { validProduct } from "../services/products";

const EditProductForm = ({ onSubmit, product, setShowEditForm }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(String(product.price));
  const [quantity, setQuantity] = useState(String(product.quantity));

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedProduct = {
      title,
      price,
      quantity,
    }

    if (validProduct(editedProduct)) {
      onSubmit(product._id, editedProduct, () => setShowEditForm(false));
    } else {
      alert("Invalid inputs. Try again!");
    }
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>Update</a>
          <a className="button" onClick={() => setShowEditForm(false)}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;