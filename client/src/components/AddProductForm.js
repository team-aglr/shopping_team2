import { useState } from "react";
import { validProduct } from "../services/products";

const AddProductForm = ({ onAddProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  }

  const handleHideForm = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity
    };

    if (validProduct(newProduct)) {
      onAddProduct(newProduct, resetInputs);
    } else {
      alert("Invalid inputs. Try again!")
    }
  }

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }

  return (
    <div className={`add-form ${showForm ? "visible" : ""}`}>
      <p><a className="button add-product-button" onClick={handleShowForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => { setQuantity(e.target.value) }}
          />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>Add</a>
          <a className="button" onClick={handleHideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;