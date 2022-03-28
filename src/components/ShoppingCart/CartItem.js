import "../ShoppingCart/css/CartItem.css";

function CartItem(props) {
  const { item } = props;
  //   props.SetCheckoutPrice(props.checkoutPrice + item.price);
  return (
    <div>
      <div className="cart-item">
        <div className="cart-name">
          <p className="cart-name-label">{item.title}</p>
        </div>

        <div className="cart-price">
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
