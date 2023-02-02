const CartItem = ({ item }) => {
  const { title, price, quantity } = item
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  )
}

export default CartItem;