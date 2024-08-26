import { faBagShopping, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/images/Logo.png'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../redux/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getCartCount } from '../../redux/productSlice'

function Navbar() {
    const cartCount = useSelector((state) =>
        state.product.cart.reduce((acc, item) => acc + (item.quantity && item.quantity), 0)
    );

    const dispatch = useDispatch();
    const location = useLocation();
    const currentUrl = location.pathname;
    const [isAuthPage, setIsAuthPage] = useState(!(currentUrl.includes("login") || currentUrl.includes("sign-up")));
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const validateToken = localStorage.getItem('userToken')
    //     setIsLoggedIn(validateToken ? true : false)
    // }, [])

    // useEffect(() => {

    //     return () => {
    //         setIsLoggedIn(false)
    //     }
    // }, [])
    // const cartCount = useSelector((state) => state.product)


    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        setIsAuthPage(!(currentUrl.includes("login") || currentUrl.includes("sign-up")));
    }, [currentUrl]);
    return (
        isAuthPage && <div className='py-lg-3'>
            <nav className="d-lg-none navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        < img src={logo} alt="CORAL" className='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <hr />
                        <ul className="navbar-nav">
                            {!isLoggedIn ? <div className="mx-2 d-flex align-items-center login">
                                <FontAwesomeIcon icon={faUser} className='me-2 cursor-pointer' />
                                <Link className='text-decoration-none text-black cursor-pointer' to={'/login'}> Login</Link>
                            </div> : <div className="mx-2 d-flex align-items-center login">
                                <FontAwesomeIcon icon={faRightFromBracket} className='me-2 cursor-pointer' />
                                <span className='text-decoration-none text-black cursor-pointer'
                                    data-bs-toggle="modal" data-bs-target="#logoutConfirmationModal"
                                >Logout</span>
                            </div>}
                            <div className="nav-item m-1 register">
                                <Link className='text-decoration-none text-black' to={'/sign-up'}>Register</Link>
                            </div>
                            <div className="nav-item m-1 cart">
                                <div className="mx-2 d-flex align-items-center position-relative cart">
                                    <div className="cart-count">{cartCount}</div>
                                    <svg className='cursor-pointer  me-2' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" />
                                        <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#0B0B0B" stroke-width="2" />
                                    </svg>
                                    <Link className='text-decoration-none text-black' to={'/cart'}>Cart</Link>
                                </div>
                            </div>
                            <div className='cursor-pointer nav-item m-1'>Jewelry & Accessories</div>
                            <div className='cursor-pointer nav-item m-1'>Clothing & Shoes</div>
                            <div className='cursor-pointer nav-item m-1'>Home & Living</div>
                            <div className='cursor-pointer nav-item m-1'>Wedding & Party</div>
                            <div className='cursor-pointer nav-item m-1'>Toys & Entertainment</div>
                            <div className='cursor-pointer nav-item m-1'>Art & Collectibles</div>
                            <div className='cursor-pointer nav-item m-1'>Craft Supplies & Tools</div>
                            <div className="nav-item m-1 ">
                                <div className="search-bar d-flex justify-content-between rounded-pill">
                                    <input type="text" id='searchInput' placeholder='Search Product' />
                                    <div className="ml-1 icon search-icon">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav >

            <div className="container d-none d-lg-flex justify-content-between align-items-center">
                <div className="search my-1">
                    <div className="search-bar d-flex rounded-pill">
                        <input type="text" id='searchInput' placeholder='Search Product' />
                        <div className="ml-1 icon search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="CORAL" /></Link>
                </div>
                <div className="cart-and-auth d-flex">

                    {!isLoggedIn ? <div className="mx-2 d-flex align-items-center login">
                        <FontAwesomeIcon icon={faUser} className='me-2 cursor-pointer' />
                        <Link className='text-decoration-none text-black cursor-pointer' to={'/login'}> Login</Link>
                    </div> : <div className="mx-2 d-flex align-items-center login">
                        <FontAwesomeIcon icon={faRightFromBracket} className='me-2 cursor-pointer' />
                        <span className='text-decoration-none text-black cursor-pointer'
                            data-bs-toggle="modal" data-bs-target="#logoutConfirmationModal"
                        >Logout</span>
                    </div>}

                    <div className="mx-2 d-flex align-items-center register">
                        <Link className='text-decoration-none text-black' to={'/sign-up'}>Register</Link>
                    </div>
                    <div className="mx-2 d-flex align-items-center position-relative cart">
                        <div className="cart-count">{cartCount}</div>
                        <svg className='cursor-pointer  me-2' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" />
                            <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#0B0B0B" stroke-width="2" />
                        </svg>
                        <Link className='text-decoration-none text-black' to={'/cart'}>Cart</Link>
                    </div>
                </div>

            </div>
            <div class="modal fade" id="logoutConfirmationModal" tabindex="-1" aria-labelledby="logoutConfirmationModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="logoutConfirmationModalLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Do you really want to logout?</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger"
                                data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => {
                                    localStorage.removeItem('userToken')
                                    dispatch(logout());
                                    // setIsLoggedIn(false)
                                }}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar