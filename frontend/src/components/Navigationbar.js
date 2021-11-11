import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import AuthNav from './AuthNav';
import GuestNav from './GuestNav';


const Navigationbar = () => {
  const auth = useSelector(state => state.auth.isAuth)
  return (
    <Fragment>
      {auth?<AuthNav/>:<GuestNav/>}
    </Fragment>
  )
}

export default Navigationbar
