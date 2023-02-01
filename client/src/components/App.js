import { useState, useEffect } from "react";
import axios from 'axios';

import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  const handleSubmitAddProduct = async (newProduct, callback) => {
    try {
      const response = await axios.post('/api/products', newProduct);
      const data = response.data;
      setProducts(products.concat(data));

      if (callback) callback();
    } catch (err) {
      console.error(err);
    }
  }
  
  const handleSubmitEditProduct = async (id, editedProduct, callback) => {
    try {
      const response = await axios.put(`/api/products/${id}`, editedProduct);
      const data = response.data;
      setProducts(products.map(product => product._id === id ? data : product));
      if (callback) callback();
    } catch (err) {
      console.error(err);
    }
  }
  
  const handleDeleteProduct = async (id, callback) => {
    try {
      await axios.delete(`/api/products/${id}`)
      setProducts(products.filter(product => product._id !== id));
      if (callback) callback();
    } catch (err ) {
      console.error(err);
    }
  }
  
  return (
    <main>
      {/* Header */}
      <ProductListing 
        products={products} 
        onSubmit={handleSubmitEditProduct} 
        onDelete={handleDeleteProduct}
      />
      <AddProductForm onSubmit={handleSubmitAddProduct} />
    </main>
  )
}

export default App;