import "./App.css";
import Header from "./Components/Header/Header";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import OrderConfirm from "./Components/Order Confirm/OrderConfirm";
import Authentication from "./Components/Authentication Pages/Authentication";
import PrivateOutlet from "./Components/Private Outlet/PrivateOutlet";
import PrivateRoute from "./Components/Private Route/PrivateRoute";

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

        {/* <Route exact path="*" element={<PrivateOutlet />}>
          <Route path="/order_confirm" element={<OrderConfirm />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
