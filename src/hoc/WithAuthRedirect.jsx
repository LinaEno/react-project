import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectRefreshed } from 'redux/auth/authSelectors';

function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectRefreshed);

    return isLoggedIn && !isRefreshing ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default WithAuthRedirect;
