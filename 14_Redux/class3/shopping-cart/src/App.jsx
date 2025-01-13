import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={2000}
      />
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
