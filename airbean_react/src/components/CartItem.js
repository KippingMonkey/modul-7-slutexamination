function CartItem (props){
  return(
    <div className="cartItem-container">
      <p className="cartItem-title">{ props.menuItem.title }</p>
      <p className="cartItem-price">{ props.menuItem.price }</p>
    </div>
  )
}

export default CartItem;