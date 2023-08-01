import React, { useContext } from 'react'
import { userContext } from '../../Contexts/appUserContext'
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {userLoginState} = useContext(userContext);
    const location = useLocation();
    const {userEmail} = userLoginState.user;
  return (
    userEmail ?  children : <Navigate replace to={'/login'}  state={{from:location}} />
  )
}
 
export default PrivateRoute