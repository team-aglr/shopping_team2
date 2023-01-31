import {useState} from "react";

const AddProductForm = () => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  }

  const handleHideForm = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className={`add-form ${showForm && "visible"}`}>
      <p><a className="button add-product-button" onClick={handleShowForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value="" />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value="" />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value="" />
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button" onClick={handleHideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;