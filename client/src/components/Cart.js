import CartItem from "./CartItem";

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  const handleCheckout = (e) => {
    e.preventDefault();
    onCheckout();
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tbody><tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
          {cartItems.map(item => (
            <CartItem item={item} key={item._id} />
          ))}
          <tr>
            <td colSpan="3" className="total">Total: ${total}</td>
          </tr>
        </tbody></table>
      <a className="button checkout" onClick={handleCheckout}>Checkout</a>
    </div>
  )
}

export default Cart;