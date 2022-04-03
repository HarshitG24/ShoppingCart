import "./css/Product.css";
import { addProducts, getProducts } from "../../Modal/Minimongo";
import { calculateUpdatedPrice } from "../../Modal/Price";
import minimongo from "minimongo";

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
          <label>Rating: {rating.rate}</label>
          <p>Category: {category}</p>

          <div className="product-price-cart">
            <p>Price: ${price}</p>
            <button
              className="add-to-cart"
              onClick={async () => {
                let identifier = 1;
                if (props.currentItems.length > 0) {
                  let lastItem =
                    props.currentItems[props.currentItems.length - 1];

                  identifier = lastItem.id + 1;
                }
                await addProducts({ id: identifier, title, price });

                getProducts((updatedProducts) => {
                  props.setCartItems(updatedProducts);
                  let price = calculateUpdatedPrice(updatedProducts);
                  props.SetCheckoutPrice(price);
                });
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
