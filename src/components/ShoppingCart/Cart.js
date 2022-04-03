import CartItem from "./CartItem";
import "./css/CartItem.css";

function Cart(props) {
  const { items, checkoutPrice, SetCheckoutPrice, setCartItems } = props;
  console.log("the items are ", items);
  return (
    <div className="cart-content">
      <p>You have the following items in cart</p>
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
      <p>Checkout: ${checkoutPrice}</p>
    </div>
  );
}

export default Cart;
