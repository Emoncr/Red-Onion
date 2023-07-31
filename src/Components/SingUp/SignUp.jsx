import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SignUp = ({ singUpInfo }) => {
  const { setHandleError, handleError, setIsLoginActive } = singUpInfo;

  const { register, handleSubmit } = useForm();

  const HandleSignIn = (data) => {
    const userName = data.name;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: userName });
        setIsLoginActive(true);

        setHandleError({
          ...handleError,
          errorMessage: "Register successful! Login Now !",
          isError: false,
        });
      })
      .catch((error) => {
        setHandleError({
          ...handleError,
          errorMessage: "Email already used, Try again with new email",
          isError: true,
          isLoginErr: false,
        });
      });
  };

  //===========Handling SingUp Process============//

  return (
    <div className="singUp_from_Container">
      <form
        onSubmit={handleSubmit(HandleSignIn)}
        className="singUp_from form-container"
      >
        <input
          className="form-control form-control-md"
          type="text"
          placeholder="Your Name"
          {...register("name")}
        />

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

export default SignUp;
