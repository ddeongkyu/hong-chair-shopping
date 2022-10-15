const getShippingCost = (shoppingCart) =>
  shoppingCart.reduce((acc, product) => {
    return acc + product.shipping * product.quantity;
  }, 0);
export default getShippingCost;
