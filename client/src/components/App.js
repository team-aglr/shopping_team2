import { useState, useEffect } from "react";
import data from "../mockData/data";

import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  
  return (
    <main>
      {/* Header */}
      <ProductListing products={products}/>
      <AddProductForm />
    </main>
  )
}

export default App;