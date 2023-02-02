import { useState, useEffect } from "react";
import axios from 'axios';
import productsService from "../services/products";

import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productsService.getAll()
      setProducts(data)
    }
    fetchProducts();
  }, []);

  const handleSubmitAddProduct = async (newProduct, callback) => {
    const data = await productsService.add(newProduct);
    setProducts(products.concat(data));

    if (callback) callback();
  }

  const handleSubmitEditProduct = async (id, editedProduct, callback) => {
    const data = await productsService.edit(id, editedProduct);
    setProducts(products.map(product => product._id === id ? data : product));
    if (callback) callback();
  }

  const handleDeleteProduct = async (id, callback) => {
    await productsService.remove(id);
    setProducts(products.filter(product => product._id !== id));
    if (callback) callback();
  }

  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      </header>
      <main>
        <ProductListing
          products={products}
          onSubmit={handleSubmitEditProduct}
          onDelete={handleDeleteProduct}
        />
        <AddProductForm onSubmit={handleSubmitAddProduct} />
      </main>
    </>
  )
}

export default App;