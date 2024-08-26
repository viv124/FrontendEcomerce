import React, { useEffect, useState } from 'react'
import './HomePage.css'
import model1 from '../assets/images/model1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import toast from 'react-hot-toast'
import ProductCard from '../ProductCard/ProductCard'
// import { getAllProducts } from '../../redux/productSlice'
// import { useDispatch, useSelector } from "react-redux";
import zaraLight from '../assets/images/zaraLight .png'
import zaraDark from '../assets/images/zaraDark.png'


function HomePage() {
    const [data, setData] = useState([])
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // useEffect(() => {
    //     setData(product)
    // }, [product]);
    // const product = useSelector((state) => state.product.products)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     setData(dispatch(getAllProducts()))
    // }, [dispatch]);
    useEffect(() => {
        (async () => {
            await axios.get('https://dummyjson.com/products')
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        console.log(response.data.products)
                        setData(response.data.products.slice(0, 8))
                    }

                })
                .catch((error) => {
                    console.log(error)
                    toast.error("Error while loading products.")
                })
        })()

        return () => {

        }
    }, [])


    return (
        <>
            <div className="back-to-top" onClick={backToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <section className='homeContainer'>
                <div className="container">
                    <hr className='d-none d-lg-block' />
                    <div className="d-none d-lg-flex justify-content-between">
                        <div className='cursor-pointer category-link mx-1'>Jewelry & Accessories</div>
                        <div className='cursor-pointer category-link mx-1'>Clothing & Shoes</div>
                        <div className='cursor-pointer category-link mx-1'>Home & Living</div>
                        <div className='cursor-pointer category-link mx-1'>Wedding & Party</div>
                        <div className='cursor-pointer category-link mx-1'>Toys & Entertainment</div>
                        <div className='cursor-pointer category-link mx-1'>Art & Collectibles</div>
                        <div className='cursor-pointer category-link mx-1'>Craft Supplies & Tools</div>
                    </div>
                    <div className="row mt-2 row-cols-1 row-cols-md-2 landing-page-product">
                        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-baseline">
                            <div className="my-4 header fs-1">Collections</div>
                            <div className="my-4 description text-center text-md-start">you can explore ans shop many differnt collection
                                from various barands here.</div>
                            <div className="my-4 d-flex align-items-center shop-btn p-2 px-3 fs-4 text-white cursor-pointer">
                                <svg className='me-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#fff" stroke-width="2" />
                                </svg>
                                <span>SHOP NOW</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-12 mx-auto d-flex justify-content-center align-items-center">
                            <div className="landing-page-image-outline"><img src={model1} className='landingPageImage w-100' alt="model1" /></div>
                        </div>
                    </div>
                </div>

                <div className="p-sm-5 pt-5 new-product-listing bg-white">
                    <div className="product-listing-header text-center">
                        <h1>New Products</h1>
                    </div>
                    <div className="product-listing-body p-3  container-xl" >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

                            {data && data.length > 0 && data.map((i, k) => {
                                return <ProductCard data={i} key={k} />
                            })}
                        </div>
                    </div>

                </div>

                <div className="zara-collection container">
                    <img className='zara-light' src={zaraLight} alt="ZARA" />
                    <div className="row">
                        <div className="d-none d-md-block col-md-6"></div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="zara-collection-data w-75 ">
                                <div className="zara-logo d-flex d-md-block justify-content-center my-5">
                                    <img src={zaraDark} alt="ZARA" />
                                </div>
                                <div className="my-5 text-white text-center text-md-start">
                                    Lustrous yet understated. The new evening
                                    wear collection exclusively offered at the
                                    reopened Giorgio Armani boutique in Los
                                    Angeles.
                                </div>
                                <div className="d-flex justify-content-center justify-content-md-start my-5 cursor-pointer">
                                    <div className="white-btn">
                                        see collection
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </ >
    )
}

export default HomePage