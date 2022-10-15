import { setShoppingCart } from "../slices/productSlice";

const onAddToCart = (
  product,
  shoppingCart,
  dispatch,
  products,
  selectedColor
) => {
  const addRedux = products
    .filter((item) => item.id === product.id)
    .map((item) => {
      return {
        ...item,
        color: selectedColor || "Basic",
        idAndColor: product.id + (selectedColor || "Basic"),
      };
    });
  if (shoppingCart.length === 0) {
    dispatch(setShoppingCart(addRedux));
  } else {
    const isDuplicated = shoppingCart.filter(
      (item) => item.idAndColor === addRedux[0].idAndColor
    );
    if (isDuplicated.length !== 0) {
      const inCreaseRedux = shoppingCart.map((item) =>
        item.idAndColor === product.idAndColor
          ? {
              ...item,
              color: selectedColor || "Basic",
              idAndColor: product.id + (selectedColor || "Basic"),
              quantity: item.quantity + 1,
            }
          : item
      );
      dispatch(setShoppingCart(inCreaseRedux));
    } else if (isDuplicated.length === 0) {
      dispatch(setShoppingCart(shoppingCart.concat(addRedux)));
    }
  }
};
export default onAddToCart;
