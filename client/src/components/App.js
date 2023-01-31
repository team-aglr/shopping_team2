import ProductListing from "./ProductListing";
import { useState, useEffect } from "react";
import data from "../mockData/data";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  
  return (
    <main>
      {/* Header */}
      <ProductListing products={products}/>
      {/* add form */}
    </main>
  )
}

export default App;