import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteAuthElement = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Navigate to='/movies' replace/> : <Component {...props} />
)}

export default ProtectedRouteAuthElement;
