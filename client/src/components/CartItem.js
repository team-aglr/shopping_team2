const CartItem = ({ item }) => {
  const { title, price, quantity } = item
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price.toFixed(2)}</td>
    </tr>
  )
}

export default CartItem;