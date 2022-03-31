import "./css/Product.css";
import { addProducts } from "../../Modal/Minimongo";
var minimongo = require("minimongo");

function Product(props) {
  const {
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
  } = props.product;

  function addProductToCart(productObj, doneCBK) {
    console.log("creating publication", productObj);
    let db = new minimongo.IndexedDb(
      {
        namespace: "shoppingCart",
      },
      function () {
        db.addCollection("products", function () {
          db.products.upsert(productObj, function (res) {
            doneCBK(res);
          });
        });
      }
    );
  }

  return (
    <div className="product">
      <div className="product-box">
        <div className="product-card">
          <img
            src={image}
            alt="unable to render product image"
            className="product-image"
          />
        </div>

        <div className="product-details">
          <label className="product-label">{title}</label>
          <p className="product-description">{description}</p>
          <label>Rating: {rating.rate}</label>
          <p>Category: {category}</p>

          <div className="product-price-cart">
            <p>Price: ${price}</p>
            <button
              className="add-to-cart"
              onClick={() => {
                let identifier = 1;
                if (props.currentItems.length > 0) {
                  let lastItem =
                    props.currentItems[props.currentItems.length - 1];

                  identifier = lastItem.id + 1;
                }
                props.setCartItems([
                  ...props.currentItems,
                  { id: identifier, title, price },
                ]);

                let newPrice = props.checkoutPrice + price;
                props.SetCheckoutPrice(newPrice);
                addProducts(
                  // [
                  // ...props.currentItems,
                  { id: identifier, title, price }
                  // ]
                );
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
