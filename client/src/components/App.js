import { useState, useEffect } from "react";
import productServices from "../services/products";
import cartServices from "../services/cart";

import Cart from "./Cart";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productServices.getAll();
      setProducts(data)
    }

    const fetchCartItems = async () => {
      const data = await cartServices.getAll();
      setCartItems(data)
    }

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleSubmitAddProduct = async (newProduct, callback) => {
    const data = await productServices.add(newProduct);
    setProducts(products.concat(data));

    if (callback) callback();
  }

  const handleSubmitEditProduct = async (id, editedProduct, callback) => {
    const data = await productServices.edit(id, editedProduct);
    setProducts(products.map(product => product._id === id ? data : product));
    if (callback) callback();
  }

  const handleDeleteProduct = async (id, callback) => {
    await productServices.remove(id);
    setProducts(products.filter(product => product._id !== id));
    if (callback) callback();
  }

  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} />
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