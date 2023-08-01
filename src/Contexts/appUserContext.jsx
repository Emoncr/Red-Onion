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

  //========SET USER to LOCAL STORAGE=======//
  const setUserLocalStorage = (keyName, value) => {
    useEffect(() => {
      const valueStr = JSON.stringify(value);
      localStorage.setItem(keyName, valueStr);
    }, [value]);
  };
  // setUserLocalStorage("user", state.user);

  return (
    <userContext.Provider value={{ userLoginState, addUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export default AppUserContext;
