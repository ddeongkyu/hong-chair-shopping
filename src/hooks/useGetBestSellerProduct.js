import { useSelector } from "react-redux";

export default function useGetBestSellerProduct() {
  const products = useSelector((state) => state.product.products);
  const bestSeller = products.filter((product) => product.isBestSeller);
  return bestSeller;
}
