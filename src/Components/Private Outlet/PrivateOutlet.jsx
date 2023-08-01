import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { userContext } from '../../Contexts/appUserContext'

const PrivateOutlet = () => {

    const [state] = useContext(userContext);

  return (
    state.user.email ? <Outlet/> : console.log('no user')
  )
}

export default PrivateOutlet