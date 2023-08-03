import { useEffect } from "react";

export const initialState = {
  user: {},
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      const { name, email, photo, address, number } = action.payload;
      const userObj = state.user;
      let setUserInfo = { ...userObj, userName: name, userEmail: email };
      if (photo) {
        setUserInfo = { ...setUserInfo, userImage: photo };
      }
      if (address) {
        setUserInfo = { ...setUserInfo, userAddress: address };
      }
      if (number) {
        setUserInfo = { ...setUserInfo, userNumber: number };
      }
      return { ...state, user: setUserInfo };
    case 'LOGOUT_USER':
      return { ...state, user: {} };
    default:
      return state;
  }
};
