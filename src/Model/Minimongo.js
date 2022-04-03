import minimongo from "minimongo";

const addProducts = (
  dbName = "shoppingProducts",
  collection = "products",
  productObj
) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].upsert(productObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

const getProducts = (
  dbName = "shoppingProducts",
  collection = "products",
  doneCBK
) => {
  let db = new minimongo.IndexedDb(
    {
      namespace: dbName,
    },
    function () {
      db.addCollection(collection, function () {
        db[collection].find({}).fetch(function (products, err) {
          doneCBK(products);
        });
      });
    }
  );
};

const removeProducts = (
  dbName = "shoppingProducts",
  collection = "products",
  productObj
) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].remove(productObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

export { addProducts, getProducts, removeProducts };
