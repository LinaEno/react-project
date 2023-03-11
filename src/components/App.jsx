import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { selectError } from 'redux/transactions/selectors';
import { fetchCurrentUser } from 'redux/auth/authOperation';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const CurrencyPage = lazy(() => import('pages/Currency/Currency'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('pages/News/NewsPage'));
const PageNotFound404 = lazy(() =>
  import('pages/PageNotFound404/PageNotFound404')
);

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
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<DashboardPage />}>
              <Route index element={<HomePage />} />
              <Route path="/diagram" element={<SummaryPage />} />
              <Route path="/currency" element={<CurrencyPage />} />
              <Route path="/news" element={<NewsPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            closeOnClick
            theme="colored"
          />
        </Suspense>
      )}
    </>
  );
};
