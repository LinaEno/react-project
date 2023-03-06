import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const error = useSelector();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshed);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);
  // return (
  //   <>
  //     {isRefreshing ? (
  //       <Loader />
  //     ) : (
  //       <Suspense fallback={<Loader />}>
  //         <Routes>
  //           <Route path="/" element={<DashboardPage />}>
  //             <Route path="home" element={<HomePage />} />
  //             <Route path="diagram" element={<SummaryPage />} />
  //             {isMobile && <Route path="currency" element={<Currency />} />}
  //           </Route>
  //           <Route path="/login" element={<LoginPage />} />
  //           <Route path="/register" element={<RegisterPage />} />
  //           <Route path="*" element={<PageNotFound404 />} />
  //         </Routes>
  //       </Suspense>
  //     )}
  //   </>
  // );
};
