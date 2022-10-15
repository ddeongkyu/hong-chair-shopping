import { useSelector } from "react-redux";
export default function useGetProductById(id) {
  const products = useSelector((state) => state.product.products);
  const product = products[id - 1];
  return product;
}
