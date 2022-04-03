import "./App.css";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/ShoppingCart/Cart";
import { useState, useEffect } from "react";
import { getProducts } from "./Modal/Minimongo";
import { calculateUpdatedPrice } from "./Modal/Price";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutPrice, SetCheckoutPrice] = useState(0);

  useEffect(() => {
    getProducts((shoppedProducts) => {
      setCartItems(shoppedProducts);
      let price = calculateUpdatedPrice(shoppedProducts);
      SetCheckoutPrice(price);
    });
  }, []);

  return (
    <div className="App">
      <div className="page-divide">
        <div className="page-left">
          <h1>Shop</h1>
          <ProductList
            setCartItems={setCartItems}
            currentItems={cartItems}
            checkoutPrice={checkoutPrice}
            SetCheckoutPrice={SetCheckoutPrice}
          />
        </div>

        <div className="page-right">
          <h1>My Cart</h1>
          <Cart
            items={cartItems}
            checkoutPrice={checkoutPrice}
            SetCheckoutPrice={SetCheckoutPrice}
            setCartItems={setCartItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
