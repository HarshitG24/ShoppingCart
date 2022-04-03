import "../ShoppingCart/css/CartItem.css";
import garbage from "../../images/garbage.png";
import { removeProducts, getProducts } from "../../Modal/Minimongo";
import { useEffect } from "react";
import { calculateUpdatedPrice } from "../../Modal/Price";

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
      console.log("products after delete are", shoppedProducts);
      setCartItems(shoppedProducts);

      let price = calculateUpdatedPrice(shoppedProducts);

      // shoppedProducts.forEach((e) => {
      //   price += e.price;
      // });

      SetCheckoutPrice(price);
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

              // let newPrice = parseFloat(checkoutPrice - item.price).toFixed(2);
              // SetCheckoutPrice(newPrice);
              await removeProducts({
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

export default CartItem;
