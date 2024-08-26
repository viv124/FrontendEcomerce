import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../redux/authSlice';
import loader from '../assets/images/loader.gif'


function ProtectedRoutes({ Component }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const userToken = localStorage.getItem('userToken');
            if (userToken) {
                handleLogin();
            }
            setLoading(false);
        };
        checkLoginStatus();
    }, []);
    const handleLogin = () => {
        dispatch(login());
    };

    if (loading) {
        return <div className='loader'>
            <img src={loader} alt="" />
        </div>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <Component />;
}

export default ProtectedRoutes;
