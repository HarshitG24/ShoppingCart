import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList(props) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductList(json);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {productList.length > 0 &&
        productList.map((p, index) => {
          return (
            <Product
              product={p}
              key={index}
              setCartItems={props.setCartItems}
              currentItems={props.currentItems}
              checkoutPrice={props.checkoutPrice}
              SetCheckoutPrice={props.SetCheckoutPrice}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
