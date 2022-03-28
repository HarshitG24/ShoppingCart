import CartItem from "./CartItem";

function Cart(props) {
  const { items, checkoutPrice, SetCheckoutPrice, setCartItems } = props;
  console.log("the items are ", items);
  return (
    <div>
      <label>You have the following items in cart</label>
      {items.length &&
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
