import minimongo from "minimongo";

const addProducts = (productObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: "shoppingProducts",
      },
      function () {
        console.log("DB Created");

        db.addCollection("products", function () {
          db.products.upsert(productObj, resolve, reject);
        });
      }
    );
  });
};

const getProducts = (doneCBK) => {
  //   return new Promise((resolve, reject) => {
  //     let db = new minimongo.IndexedDb(
  //       {
  //         namespace: "shoppingProducts",
  //       },
  //       function () {
  //         db.addCollection("products", function () {
  //           db.products.find({}).fetch(function (products, err) {
  //             console.log("the products are", products);
  //             if (err) {
  //               reject(err);
  //               return;
  //             }
  //             resolve(products);
  //           });
  //         });
  //       }
  //     );
  //   });
  let db = new minimongo.IndexedDb(
    {
      namespace: "shoppingProducts",
    },
    function () {
      console.log("DB Created");

      db.addCollection("products", function () {
        db.products.find({}).fetch(function (products, err) {
          //   res = products;
          console.log("List of products", products);

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
        console.log("DB Created");

        db.addCollection("products", function () {
          db.products.remove(productObj, resolve, reject);
        });
      }
    );
  });
};

export { addProducts, getProducts, removeProducts };
