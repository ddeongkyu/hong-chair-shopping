const getTotalPrice = (shoppingCart) =>
  shoppingCart.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);
export default getTotalPrice;
