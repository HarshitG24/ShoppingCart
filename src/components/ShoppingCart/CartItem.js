import "../ShoppingCart/css/CartItem.css";
import garbage from "../../images/garbage.png";
import { removeProducts, getProducts } from "../../Model/Minimongo";
import { calculateUpdatedPrice } from "../../Model/Price";
import PropTypes from "prop-types";

function CartItem(props) {
  const {
    item,
    // cartItems,
    setCartItems,
    // checkoutPrice,
    SetCheckoutPrice,
  } = props;

  function updateProductsInDb() {
    getProducts("shoppingProducts", "products", (shoppedProducts) => {
      setCartItems(shoppedProducts);
      let price = calculateUpdatedPrice(shoppedProducts);
      SetCheckoutPrice(price);
    });
  }

  return (
    <div className="cart-content">
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
            onClick={async () => {
              await removeProducts("shoppingProducts", "products", {
                id: item.id,
                title: item.title,
                price: item.price,
              });

              updateProductsInDb();
            }}
          >
            <img src={garbage} alt="" className="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  setCartItems: PropTypes.func.isRequired,
  SetCheckoutPrice: PropTypes.func.isRequired,
};

export default CartItem;
