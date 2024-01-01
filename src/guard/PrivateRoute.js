import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {


  return localStorage.getItem('token') ? (
    element
  ) : (
    <Navigate to={'/admin/login'} replace />
  );
};

export default PrivateRoute;
