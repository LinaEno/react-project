import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectRefreshed } from 'redux/auth/authSelectors';

const AuthRoute = ({ children, redirectPath = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshed);
  return isLoggedIn && !isRefreshing ? (
    children
  ) : (
    <Navigate to={redirectPath} replace={true} />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default AuthRoute;
