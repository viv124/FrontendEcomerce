// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import HomePage from './Components/Homepage/HomePage';
import CartPage from './Components/CartPage/CartPage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import ProductDetailsPage from './Components/ProductDetailsPage/ProductDetailsPage';
import SignUp from './Components/SignUp/SignUp';
import ProtectedRoutes from './Components/common/ProtectedRoutes';
import { useEffect } from 'react';
import { login } from './redux/authSlice';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/product/:productId', element: <ProtectedRoutes Component={ProductDetailsPage} /> },
    { path: '/cart', element: <ProtectedRoutes Component={CartPage} /> },
  ];
  useEffect(() => {
    const validateToken = localStorage.getItem('userToken')
    validateToken && handleLogin()
  }, [])

  const handleLogin = () => {
    dispatch(login());
  };


  return (
    <div className='poppins-regular'>
      <Toaster
        toastOptions={{
          duration: 5000
        }}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {routes.map((route, index) => (
            <Route key={index} exact {...route} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
