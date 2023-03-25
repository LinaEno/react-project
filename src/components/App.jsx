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
import { AuthRoute, NotAuthRoute } from 'routes';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const CurrencyPage = lazy(() => import('pages/Currency/Currency'));
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const NewsPage = lazy(() => import('pages/News/NewsPage'));
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
            <Route
              path="/"
              element={
                <AuthRoute redirectPath="/login">
                  <DashboardPage />
                </AuthRoute>
              }
            >
              <Route
                index
                element={
                  <AuthRoute redirectPath="/login">
                    <HomePage />
                  </AuthRoute>
                }
              />
              <Route
                path="/diagram"
                element={
                  <AuthRoute redirectPath="/login">
                    <SummaryPage />
                  </AuthRoute>
                }
              />
              <Route
                path="/currency"
                element={
                  <AuthRoute redirectPath="/login">
                    <CurrencyPage />
                  </AuthRoute>
                }
              />
              {/* <Route
                path="/news"
                element={
                  <AuthRoute redirectPath="/login">
                    <NewsPage />
                  </AuthRoute>
                }
              /> */}
            </Route>
            <Route
              path="/login"
              element={
                <NotAuthRoute redirectPath="/">
                  <LoginPage />
                </NotAuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <NotAuthRoute redirectPath="/">
                  <RegisterPage />
                </NotAuthRoute>
              }
            />
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
