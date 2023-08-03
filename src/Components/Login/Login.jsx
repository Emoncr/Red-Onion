import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userContext } from "../../Contexts/appUserContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ loginInfo }) => {
  const { register, handleSubmit } = useForm();
  const { setHandleError, handleError } = loginInfo;
  const { addUserInfo } = useContext(userContext);

  const location = useLocation();
  const navigate = useNavigate();

  //=======HANDLIGN FROM SUBMITON AND EXECUTING LOGIN =======//
  const HandleUserLogin = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const { displayName, email } = user;
          addUserInfo(displayName, email);
        }
        if (location.state?.from) {
          navigate(location.state.from);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errText = errorMessage.slice(22, -2);
        setHandleError({
          ...handleError,
          isError: true,
          isLoginErr: true,
          errorMessage: errText,
        });
      });
  };

  return (
    <div className="login_from_Container">
      <form
        onSubmit={handleSubmit(HandleUserLogin)}
        className="Login_from form-container"
      >
        <input
          className="form-control form-control-md my-3"
          type="email"
          placeholder="Email"
          {...register("email")}
          onFocus={() => setHandleError({ ...handleError, errorMessage: "" })}
        />
        <input
          className="form-control form-control-md"
          type="password"
          placeholder="Password"
          {...register("password")}
          onFocus={() => setHandleError({ ...handleError, errorMessage: "" })}
        />
        <input type="submit" className="btn btn-danger w-100 mt-4" />
      </form>
    </div>
  );
};

export default Login;
