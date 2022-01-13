import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

function RequireAuth({ children }) {
  const checkIsLoggedIn = () => {
    return !!localStorage.getItem('Auth-Token');
  };

  return checkIsLoggedIn() ? children : <Navigate to="/" />;
}

RequireAuth.propTypes = {};

export default RequireAuth;
