import "./css/Product.css";
import { addProducts, getProducts } from "../../Model/Minimongo";
import { calculateUpdatedPrice } from "../../Model/Price";

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

          <div>
            <label className="category-title">Rating: </label>
            <label>{rating.rate}</label>
          </div>

          <div>
            <label className="category-title">Category: </label>
            <label>{category}</label>
          </div>

          <div className="product-price-cart">
            <div>
              <label className="category-title">Price: </label>
              <label>${price}</label>
            </div>
            <button
              className="add-to-cart"
              onClick={async () => {
                let identifier = 1;
                if (props.currentItems.length > 0) {
                  let lastItem =
                    props.currentItems[props.currentItems.length - 1];

                  identifier = lastItem.id + 1;
                }
                await addProducts("shoppingProducts", "products", {
                  id: identifier,
                  title,
                  price,
                });

                getProducts(
                  "shoppingProducts",
                  "products",
                  (updatedProducts) => {
                    props.setCartItems(updatedProducts);
                    let price = calculateUpdatedPrice(updatedProducts);
                    props.SetCheckoutPrice(price);
                  }
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
