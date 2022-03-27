import "./css/Product.css";

function Product(props) {
  console.log("this is printed", props);
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
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
