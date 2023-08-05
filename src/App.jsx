import "./App.css";
import Header from "./Components/Header/Header";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import OrderConfirm from "./Components/Order Confirm/OrderConfirm";
import Authentication from "./Components/Authentication Pages/Authentication";
import PrivateRoute from "./Components/Private Route/PrivateRoute";
import Footer from "./Components/Footer/Footer";

import { json } from "react-router-dom";
import Error from "./Components/Error Page/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path=":id" element={<FoodDetails />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/order_confirm"
          element={
            <PrivateRoute>
              <OrderConfirm />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
