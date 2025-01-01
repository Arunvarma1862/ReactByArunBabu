import { ToastContainer } from "react-toastify";
import Products from "./Components/Products";
import CartProvider from "./Contexts/CartProvider";
import Header from "./Components/Header";
function App() {
  return (
    <CartProvider>
      <ToastContainer  newestOnTop={true} hideProgressBar={true}/>
      <Header/>
      <Products/>
    </CartProvider>
  );
}

export default App;
