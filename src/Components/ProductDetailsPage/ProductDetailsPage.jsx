import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast'
import './ProductDetailsPage.css'
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import loader from '../assets/images/loader.gif'
import { addToCart } from '../../redux/productSlice';
import { useDispatch } from 'react-redux'

function ProductDetailsPage() {
    const dispatch = useDispatch()
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await axios.get('https://dummyjson.com/products/' + productId)
                .then((response) => {
                    if (response.status === 200) {
                        setProduct(response.data)
                    }
                })
                .catch((error) => {
                    toast.error("Error while loading products.")
                }).finally(() => {

                    setLoading(false)
                })
        })()
    }, [productId]);

    return (
        loading ? <div className='loader'>
            <img src={loader} alt="" />
        </div> :
            <div className="container product-detail-page-container">
                <hr className='d-none d-lg-block' />
                <div className="row ">
                    <div className="col-12 col-md-6 p-2">
                        <div className="product-image ">
                            <img className='w-100' src={product?.images[0]} alt={product?.title} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2 ps-md-5">
                        <div className="product-brand">
                            <Link className='text-decoration-none' to={'#'}>{product?.brand}</Link>
                        </div>
                        <div className="product-title h1">
                            {product?.title}
                        </div>
                        <div className="product-rating d-flex align-items-center">
                            {product?.rating}
                            <Rating initialValue={product?.rating} allowFraction={true} className='mx-1 star-rating' size={20} readonly allowHover={false} />
                        </div>

                        <div className="discounted-price mt-2 h3 d-flex cursor-pointer">
                            <div className="text-danger fw-lighter me-2">-{product?.discountPercentage}%</div>
                            {Math.floor(product?.price - (product?.price * product?.discountPercentage / 100))}
                        </div>
                        <small className="mrp mx-1 text-secondary d-block mb-2 ">M.R.P.: <del>{product?.price}</del></small>


                        <div className="btn-group">
                            <div className="btn btn-primary d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon className='mx-2' icon={faShoppingCart} />
                                Buy Now
                            </div>
                            <div onClick={() => { dispatch(addToCart(product)) }} className="btn btn-secondary d-flex justify-content-center align-items-center"> <svg className='cursor-pointer me-2' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                                <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#fff" stroke-width="2" />
                            </svg>Add to Cart</div>
                        </div>
                        <hr />
                        <h3>Description</h3>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
    );
}

export default ProductDetailsPage;
