import { useState, useEffect } from "react";
import Product from "./Product";
import Pagination from "../Pagination/Pagination";
import { products } from "../../Data/Data.js";
import "../Products/css/ProductList.css";

function ProductList(props) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
      })
      .catch((error) => setError(error.message));
    // setProductList(products);
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProducts,
    indexOfLastProduct
  );

  //Change Page
  const paginate = (num) => setCurrentPage(num);

  return (
    <div>
      {currentProducts.length > 0 &&
        currentProducts.map((p, index) => {
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
      <div className="pagination-row">
        <div>
          <button
            onClick={() => {
              if (currentPage !== 1) setCurrentPage(currentPage - 1);
            }}
          >
            Previous
          </button>
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <div>
          <button
            onClick={() => {
              if (currentPage !== 10) setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
