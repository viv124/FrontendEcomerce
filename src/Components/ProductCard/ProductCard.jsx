import React
    // { useEffect, useState } 
    from 'react'
// import product_img from '../assets/images/product_img.jpg'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'

function ProductCard({ data, key }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // useEffect(() => {
    //     const validateToken = localStorage.getItem('userToken')
    //     setIsLoggedIn(validateToken ? true : false)
    // }, [])

    return (
        <div key={key} className='col p-3 d-flex flex-column justify-content-center align-items-center'>
            {isLoggedIn ?
                <Link to={'/product/' + data.id} className="product-card-image position-relative cursor-pointer">
                    <img src={data.thumbnail} alt="product" className='' />
                    <div className="product-img-btn-row position-absolute  d-flex justify-content-between w-100 p-1">
                        <div>
                            <FontAwesomeIcon className='wishlist-icon mx-1' icon={faHeart} />
                            <FontAwesomeIcon className='search-icon mx-1' icon={faSearch} />
                        </div>

                        <div className="shop-now-btn mx-1 d-flex align-items-center">
                            <svg className='me-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#fff" stroke-width="1" stroke-linecap="round" />
                                <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#fff" stroke-width="1" />
                            </svg>
                            <span>SHOP NOW</span>
                        </div>
                    </div>
                </Link>
                :
                <div onClick={() => {
                    toast.error('Please Login first to access products.')
                }} className="product-card-image position-relative cursor-pointer">
                    <img src={data.thumbnail} alt="product" className='' />
                    <div className="product-img-btn-row position-absolute  d-flex justify-content-between w-100 p-1">
                        <div>
                            <FontAwesomeIcon className='wishlist-icon mx-1' icon={faHeart} />
                            <FontAwesomeIcon className='search-icon mx-1' icon={faSearch} />
                        </div>

                        <div className="shop-now-btn mx-1 d-flex align-items-center">
                            <svg className='me-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#fff" stroke-width="1" stroke-linecap="round" />
                                <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#fff" stroke-width="1" />
                            </svg>
                            <span>SHOP NOW</span>
                        </div>
                    </div>

                </div>}
            <div className="product-card-body  ">
                <div className="product-title">
                    {data.title}
                </div>
                <div className="d-flex justify-content-between">
                    <div className="fw-lighter">{data.category}</div>
                    <div className="fw-bolder">${data.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard