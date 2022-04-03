function calculateUpdatedPrice(arr) {
  let price = 0;

  arr.forEach((e) => {
    price += e.price;
  });

  return price;
}

export { calculateUpdatedPrice };
