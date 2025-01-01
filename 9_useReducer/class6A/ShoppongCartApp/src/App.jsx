import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import Products from "./Components/Products";
import CartProvider from "./Provider/CartProvider";


function App() {
  return (

    <CartProvider>
      <ToastContainer
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={2000}
      />
      <Header />
      <Products />
    </CartProvider>
  
  );
}

export default App;
