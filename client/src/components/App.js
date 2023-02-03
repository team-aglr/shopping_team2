import productServices from "../services/products";
import cartServices from "../services/cart";

import Cart from "./Cart";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

import useAsync from "../hooks/useAsync";

const App = () => {
  const [{data: products}, setProducts] = useAsync("/api/products");
  const [{data: cartItems}, setCartItems] = useAsync("/api/cart");

  const handleAddProduct = async (newProduct, callback) => {
    const data = await productServices.add(newProduct);
    setProducts(products.concat(data));

    if (callback) callback();
  }

  const handleEditProduct = async (id, editedProduct, callback) => {
    const data = await productServices.edit(id, editedProduct);
    setProducts(products.map(product => product._id === id ? data : product));
    if (callback) callback();
  }

  const handleDeleteProduct = async (id, callback) => {
    await productServices.remove(id);
    setProducts(products.filter(product => product._id !== id));
    if (callback) callback();
  }

  const handleAddToCart = async (productId) => {
    const data = await cartServices.add(productId);
    setProducts(products.map(product => {
      return product._id === productId ? { ...product, quantity: product.quantity - 1 } : product;
    }));

    const itemExistsInCart = !!cartItems.find((item) => item.productId === productId);
    if (itemExistsInCart) {
      setCartItems(cartItems.map(item => {
        return item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item;
      }));
    } else {
      setCartItems(cartItems.concat(data.item));
    }
  }

  const handleCheckout = async () => {
    await cartServices.checkout();
    setCartItems([]);
  }

  return (
    <>
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} onCheckout={handleCheckout} />
      </header>
      <main>
        <ProductListing
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </>
  )
}

export default App;