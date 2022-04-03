import minimongo from "minimongo";

const addProducts = (productObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: "shoppingProducts",
      },
      function () {
        db.addCollection(
          "products",
          function () {
            db.products.upsert(productObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

const getProducts = (doneCBK) => {
  let db = new minimongo.IndexedDb(
    {
      namespace: "shoppingProducts",
    },
    function () {
      db.addCollection("products", function () {
        db.products.find({}).fetch(function (products, err) {
          doneCBK(products);
        });
      });
    }
  );
};

const removeProducts = (productObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: "shoppingProducts",
      },
      function () {
        db.addCollection(
          "products",
          function () {
            db.products.remove(productObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

export { addProducts, getProducts, removeProducts };
