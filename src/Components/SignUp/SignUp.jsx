import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const SECRET_KEY = 'y6WH+gJ_iUqJgR?'
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log({ formData, errors })

        return () => {
        }
    }, [formData, errors])


    const handleChange = (e) => {
        const { name, value } = e.target;
        let data = { [name]: value }
        const validationErrors = validateForm(data, name)
        setErrors((prev) => ({ ...prev, ...validationErrors }))

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData, null);
        // debugger;
        if (Object.values(validationErrors).filter(d => { return d !== '' }).length === 0) {

            const newFormData = { ...formData };
            delete newFormData.confirmPassword;

            console.log("SECRET_KEY", SECRET_KEY)
            const EncryptedData = CryptoJS.AES.encrypt(
                JSON.stringify(newFormData),
                SECRET_KEY
            ).toString();
            // console.log("EncryptedData", data)
            toast.success('Registered Successfully.')
            localStorage.setItem('userData', EncryptedData)

            navigate('/login');
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data, name) => {
        const errors = {};


        // First name
        if (name === "firstName" || name === null) {
            if (data.firstName === "")
                errors.firstName = 'First name should not be empty';
            else if (!data.firstName.match(/^[a-zA-Z]+$/)) {
                errors.firstName = 'First name must contain only alphabets.';
            }
            else {
                errors.firstName = '';
            }
        }

        // Last name
        if (name === "lastName" || name === null) {
            if (data.lastName === "")
                errors.lastName = 'Last name should not be empty';
            else if (!data.lastName.match(/^[a-zA-Z]+$/)) {
                errors.lastName = 'Last name must contain only alphabets.';
            }
            else {
                errors.lastName = '';
            }
        }

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


        // Confirm Password
        if (name === "confirmPassword" || name === null) {
            if (data.confirmPassword === "")
                errors.confirmPassword = 'Confirm Password should not be empty';
            else if (formData.password !== data.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match.';
            } else if (data.confirmPassword.length < 8) {
                errors.confirmPassword = 'Password must be at least 8 characters long.';
            }
            else {
                errors.confirmPassword = '';
            }
        }

        return errors;
    };

    return (
        <div className='outer-auth'>

            <div className="auth-container container d-flex justify-content-center">
                <div className="form card my-5">
                    <h2 className='text-center mb-0'>Profile Registration</h2>
                    <hr className='mb-4 ' />

                    <div className="mb-1">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input name="firstName" type="text" className="form-control" id="firstName" placeholder="Enter your first name"
                            onChange={handleChange} onBlur={handleChange} tabIndex={1} />
                        <div className="error">{errors.firstName}</div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter your last name"
                            onChange={handleChange} onBlur={handleChange} tabIndex={2}
                        />
                        <div className="error">{errors.lastName}</div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control" id="emailInput" placeholder="Enter your email"
                            onChange={handleChange} onBlur={handleChange} tabIndex={3}
                        />
                        <div className="error">{errors.email}</div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="passwordInput" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control" id="passwordInput" placeholder="Password"
                            onChange={handleChange} onBlur={handleChange} tabIndex={4}
                        />
                        <div className="error">{errors.password}</div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="cPasswordInput" className="form-label">Confirm Password</label>
                        <input name="confirmPassword" type="password" className="form-control" id="cPasswordInput" placeholder="Confirm Password"
                            onChange={handleChange} onBlur={handleChange} tabIndex={5} />
                        <div className="error">{errors.confirmPassword}</div>
                    </div>

                    <div className="d-md-flex  justify-content-between align-items-center mb-2">
                        <div className='mb-2 mb-md-0 text-end'>
                            <Link to='/login'>Login</Link>
                        </div>
                        <div className="btn btn-primary  auth-btn" onClick={handleSubmit} tabIndex={6}>Register</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SignUp;
