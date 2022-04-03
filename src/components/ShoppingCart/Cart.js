import CartItem from "./CartItem";
import "./css/CartItem.css";

function Cart(props) {
  const { items, checkoutPrice, SetCheckoutPrice, setCartItems } = props;
  console.log("the items are ", items);
  return (
    <div className="cart-content">
      <p className="cart-description">You have the following items in cart</p>
      {items.length > 0 &&
        items.map((i, index) => {
          return (
            <CartItem
              item={i}
              key={index}
              checkoutPrice={checkoutPrice}
              SetCheckoutPrice={SetCheckoutPrice}
              setCartItems={setCartItems}
              cartItems={items}
            />
          );
        })}
      <div className="checkout">
        <p className="checkout-text">Checkout: ${checkoutPrice}</p>
      </div>
    </div>
  );
}

export default Cart;
