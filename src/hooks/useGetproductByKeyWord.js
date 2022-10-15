import { useSelector } from "react-redux";
export default function useGetProductbyKeyWord(keyword) {
  const products = useSelector((state) => state.product.products);
  const productKeyWord = products.filter((item) => {
    if (keyword === "All") {
      return item;
    }
    return item.keyWord.includes(keyword);
  });
  return productKeyWord;
}
