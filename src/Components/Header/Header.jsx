import "./header.css";
import Logo from "../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-2 py-3">
      <div className="container-fluid d-flex">
        <div>
          <Link to="/" replace={true}>
            <img width="100px" src={Logo} alt="logo" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse item-container"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item ">
              <Link to="/cart" replace={true}>
                <button className="cart-btn">
                  <FontAwesomeIcon color="#111" icon={faCartShopping} />
                  <p style={{ color: "#111" }}>
                    { cart.length === 0 ? "!" : cart.length}
                  </p>
                </button>
              </Link>
            </li>
            <li className="nav-item ms-">
              <button className="btn">Login</button>
            </li>
            <li className="nav-item">
              <button className="btn  btn-danger ">Sing up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
