import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import CryptoJS from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './login.css'
import { login } from '../../redux/authSlice';
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const SECRET_KEY = 'y6WH+gJ_iUqJgR?'
    const [userData, setUserData] = useState(localStorage.getItem('userData')); // Initialize userData
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            try {
                const decryptedData = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
                setUserData(JSON.parse(decryptedData));
            } catch (error) {
                console.error('Error decrypting user data:', error);
            }
        }
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        let data = { [name]: value }
        const validationErrors = validateForm(data, name)
        setErrors((prev) => ({ ...prev, ...validationErrors }))

        setFormData({ ...formData, [name]: value });
    };
    const handleLogin = () => {
        dispatch(login());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData, null);
        console.log("Checking validations");
        console.log(validationErrors);
        console.log(Object.values(validationErrors).filter(d => { return d !== '' }).length === 0)
        console.log("length", Object.keys(validationErrors).length);
        // if (Object.keys(validationErrors).length == 0) {
        console.log(userData)
        if (!userData) {
            toast.error('No user found...! Please Register First.')
            return;
        }

        if (Object.values(validationErrors).filter(d => { return d !== '' }).length === 0 && formData.email === userData.email && formData.password === userData.password) {
            toast.success("Login Successfully.")
            localStorage.setItem('userToken', "2CozkRCcKHF8W647Halw9xJtPHhm4j7zKSJZaFFvIyIIBBkPF9w8CdvABot6UArx")
            handleLogin();
            navigate('/');
        } else {
            console.log("Redirect Not Initiated");
            console.log(formData);
            toast.error("Please enter valid credentials.")
            setErrors(validationErrors);
        }
    };

    const validateForm = (data, name) => {
        const errors = {};

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        // Email
        if (name === "email" || name === null) {
            if (data.email === "")
                errors.email = 'Email should not be empty';
            // else if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)) {
            else if (!data.email.match(emailRegex)) {
                errors.email = 'Invalid email address.';
            }
            else {
                errors.email = '';
            }
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        // Password
        if (name === "password" || name === null) {
            if (data.password === "")
                errors.password = 'Password should not be empty';
            else if (data.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long.';
            }
            else if (!data.password.match(passwordRegex)) {
                errors.password = 'Password must contain 1 Uppercase, 1 Lowercase and 1 symbol.';
            }
            else {
                errors.password = '';
            }
        }

        return errors;
    };

    return (
        <div className='outer-auth'>
            <div className="auth-container container d-flex justify-content-center">
                <div className="form card my-5">
                    <h2 className='text-center mb-0'>Login</h2>
                    <hr className='mb-4 ' />

                    <div className="mb-1">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control" id="emailInput" placeholder="Enter your email"
                            onChange={handleChange} tabIndex={1}
                        />
                        <div className="error">{errors.email}</div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input name="password" type={showPassword ? "text" : "password"} className="form-control password-input" id="passwordInput" placeholder="Password"
                            onChange={handleChange} tabIndex={2}
                        />
                        {/* <FontAwesomeIcon
                            className="show-hide-password"
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => { setShowPassword(prev => !prev) }}
                        /> */}
                        <div className="error">{errors.password}</div>
                    </div>


                    <div className="d-md-flex  justify-content-between align-items-center mb-2">
                        <div className='mb-2 mb-md-0 text-end'>
                            <Link to='/sign-up'>Register</Link>
                        </div>
                        <button type='submit' className="btn btn-primary auth-btn " onClick={handleSubmit} tabIndex={3}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
