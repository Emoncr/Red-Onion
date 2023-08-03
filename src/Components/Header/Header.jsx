import "./header.css";
import Logo from "../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/cartContext";
import userImagePlaceholder from "../../images/defult User.png";
import { userContext } from "../../Contexts/appUserContext";

const Header = () => {
  const [isUserBtnClick, setIsUserBtnClick] = useState(false);


  console.log(isUserBtnClick);
  const { cart } = useContext(CartContext);
  const { userLoginState, handleLogOut } = useContext(userContext);
  const { userEmail } = userLoginState.user;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-2 py-3">
      <div className="container-fluid d-flex">
        <div>
          <Link to="/" replace={true}>
            <img width="100px" src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex  align-items-center">
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
            <>
              <li className="nav-item ">
                <div className="user_image">
                  <button
                    onClick={() => setIsUserBtnClick(!isUserBtnClick)}
                    className="btn nav-button btn-danger user_image_btn "
                  >
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
                  {isUserBtnClick && (
                    <button
                      onClick={()=>handleLogOut(isUserBtnClick, setIsUserBtnClick)}
                      className="btn btn-danger nav-button fw-bold btn_logOut"
                    >
                      LogOut
                    </button>
                  )}
                </div>
              </li>

              {/* <li>

              </li> */}
            </>
          ) : (
            <li>
              <Link to={"/login"} replace={true}>
                <button className="btn btn-danger nav-button fw-bold">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
