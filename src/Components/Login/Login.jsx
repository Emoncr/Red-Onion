import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userContext } from "../../Contexts/appUserContext";

const Login = ({ loginInfo }) => {
  const { register, handleSubmit } = useForm();
  const { setHandleError, handleError } = loginInfo;
  const {state, addUserInfo} = useContext(userContext);

console.log(state);




  //=======HANDLIGN FROM SUBMITON AND EXECUTING LOGIN =======//
  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const {displayName, email} = user;
        addUserInfo(displayName, email)
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
        onSubmit={handleSubmit(onSubmit)}
        className="Login_from form-container"
      >
        <input
          className="form-control form-control-md my-3"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="form-control form-control-md"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <input type="submit" className="btn btn-danger w-100 mt-4" />
      </form>
    </div>
  );
};

export default Login;
