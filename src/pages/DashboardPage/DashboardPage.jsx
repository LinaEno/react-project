import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserName } from 'redux/auth/authSelectors';
import { fetchTransactions } from 'redux/transactions/operations';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserName);

  useEffect(() => {
    if (user === null) return;
    dispatch(fetchTransactions());
  }, [dispatch, user]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WithAuthRedirect(DashboardPage, '/login');
