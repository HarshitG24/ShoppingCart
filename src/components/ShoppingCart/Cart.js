import CartItem from "./CartItem";
import "./css/CartItem.css";
import PropTypes from "prop-types";

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
              SetCheckoutPrice={SetCheckoutPrice}
              setCartItems={setCartItems}
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

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  checkoutPrice: PropTypes.number.isRequired,
  SetCheckoutPrice: PropTypes.func.isRequired,
};

export default Cart;
