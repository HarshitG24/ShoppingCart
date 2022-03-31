import "../ShoppingCart/css/CartItem.css";
import garbage from "../../images/garbage.png";
import { removeProducts, getProducts } from "../../Modal/Minimongo";
import { useEffect } from "react";

function CartItem(props) {
  const {
    item,
    cartItems,
    setCartItems,
    checkoutPrice,
    SetCheckoutPrice,
  } = props;

  // useEffect(() => {
  //   getProducts((shoppedProducts) => {
  //     console.log("shopped products are", shoppedProducts);
  //     setCartItems(shoppedProducts);
  //   });
  // }, [cartItems]);

  function updateProductsInDb() {
    getProducts((shoppedProducts) => {
      console.log("shopped products are", shoppedProducts);
      setCartItems(shoppedProducts);
    });
  }

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
            onClick={async () => {
              // let items = cartItems.filter((e) => e.id !== item.id);
              // setCartItems(items);

              let newPrice = parseFloat(checkoutPrice - item.price).toFixed(2);
              SetCheckoutPrice(newPrice);
              await removeProducts({
                id: item.id,
                title: item.title,
                price: item.price,
              });

              await updateProductsInDb();
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
