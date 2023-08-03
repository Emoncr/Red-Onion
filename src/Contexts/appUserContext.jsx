import { React, createContext, useEffect, useReducer } from "react";
import { initialState, userReducer } from "../reducers/userReducer";

export const userContext = createContext();

const AppUserContext = ({ children }) => {
  const [userLoginState, dispatch] = useReducer(userReducer, initialState);

  const addUserInfo = (name, email, photo, address, number) => {
    dispatch({
      type: "ADD_USER_INFO",
      payload: { name, email, photo, address },
    });
  };

const handleLogOut = ()=>{
  dispatch({
    type: 'LOGOUT_USER'
  })
}

  



  return (
    <userContext.Provider value={{ userLoginState, addUserInfo,handleLogOut }}>
      {children}
    </userContext.Provider>
  );
};

export default AppUserContext;
