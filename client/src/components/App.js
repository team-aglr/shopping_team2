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

  const handleSubmit = async (newProduct, callback) => {
    try {
      const response = await axios.post('/api/products', newProduct);
      const data = response.data;
      setProducts(products.concat(data));

      if (callback) callback();
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <main>
      {/* Header */}
      <ProductListing products={products} />
      <AddProductForm onSubmit={handleSubmit} />
    </main>
  )
}

export default App;