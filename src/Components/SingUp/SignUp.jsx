import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="singUp_from_Container">
      <form
        onSubmit={console.log("submt")}
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
