import "./App.css";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <div className="App">
      <div className="page-divide">
        <div className="page-left">
          <h1>Shop</h1>
          <ProductList />
        </div>

        <div className="page-right">
          <h1>My Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
