import CartItem from "./CartItem";
import "./css/CartItem.css";

function Cart(props) {
  const { items, checkoutPrice, SetCheckoutPrice, setCartItems } = props;
  console.log("the items are ", items);
  return (
    <div className="cart-content">
      {items.length > 0 ? (
        <p className="cart-description">You have the following items in cart</p>
      ) : (
        <p className="cart-description">
          Your cart is empty, shop to get best deals $$
        </p>
      )}
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

      {items.length > 0 ? (
        <div className="checkout">
          <p className="checkout-text">Total: ${checkoutPrice}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
