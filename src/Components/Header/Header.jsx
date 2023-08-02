import "./header.css";
import Logo from "../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";
import userImagePlaceholder from "../../images/defult User.png";
import { userContext } from "../../Contexts/appUserContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { userLoginState } = useContext(userContext);
  const { userEmail } = userLoginState.user;

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
                    {cart.length === 0 ? "!" : cart.length}
                  </p>
                </button>
              </Link>
            </li>
            {userEmail ? (
              <li className="nav-item Btn_container">
                <div className="userImage">
                  <button className="btn btn-danger user_image_btn ">
                    <div className="image-container">
                      {userLoginState.user.userImage ? (
                        <img
                          className="img-fluid w-100"
                          src={userLoginState.user.userImage}
                          alt="Defult User Image"
                        />
                      ) : (
                        <img
                          className="img-fluid w-100"
                          src={userImagePlaceholder}
                          alt="Defult User Image"
                        />
                      )}
                    </div>
                  </button>
                  <button className="btn btn-danger fw-bold btn_logOut">
                    Log Out
                  </button>
                </div>
              </li>
            ) : (
              <li>
                <Link to={"/login"} replace={true}>
                  <button className="btn btn-danger fw-bold">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
