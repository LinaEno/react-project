import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { selectError } from 'redux/transactions/selectors';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import CurrencyPage from 'pages/Currency/Currency';

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshed);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);
  return (
    //   <>
    //     {isRefreshing ? (
    //       <Loader />
    //     ) : (

    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          {/* <Route path="home" element={<HomePage />} />
          <Route path="diagram" element={<SummaryPage />} /> */}
          {/* <Route path="/" element={<CurrencyPage />} /> */}
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        {/* <Route path="*" element={<PageNotFound404 />} /> */}
      </Routes>
    </Suspense>
    //     )}
    //   </>
  );
};
