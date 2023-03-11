import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { fetchTransactions } from 'redux/transactions/operations';

const DashboardPage = () => {
  const dispatch = useDispatch();
  // const user = useSelector(getUserName);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(fetchTransactions());
  }, [dispatch, token]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
