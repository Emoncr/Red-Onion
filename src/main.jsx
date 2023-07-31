import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartContextProvider from "./Contexts/cartContext.jsx";
import AppUserContext from "./Contexts/appUserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppUserContext>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AppUserContext>
  </React.StrictMode>
);
