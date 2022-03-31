import "../ShoppingCart/css/CartItem.css";
import garbage from "../../images/garbage.png";
import { removeProducts } from "../../Modal/Minimongo";

function CartItem(props) {
  const {
    item,
    cartItems,
    setCartItems,
    checkoutPrice,
    SetCheckoutPrice,
  } = props;
  return (
    <div>
      <div className="cart-item">
        <div className="cart-name">
          <p className="cart-name-label">{item.title}</p>
        </div>

        <div className="cart-price">
          <p>${item.price}</p>
        </div>

        <div className="delete-space">
          <button
            className="delete-btn"
            onClick={() => {
              let items = cartItems.filter((e) => e.id !== item.id);
              setCartItems(items);

              let newPrice = parseFloat(checkoutPrice - item.price).toFixed(2);
              SetCheckoutPrice(newPrice);
              removeProducts({
                id: item.id,
                title: item.title,
                price: item.price,
              });
            }}
          >
            <img src={garbage} alt="" className="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
