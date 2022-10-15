import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedColor } from "./slices/productSlice";
import { getProducts } from "./slices/productSlice";
import AllRoute from "./components/Route/AllRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedColor(""));
    dispatch(getProducts());
  }, []);
  return <AllRoute />;
}

export default App;
