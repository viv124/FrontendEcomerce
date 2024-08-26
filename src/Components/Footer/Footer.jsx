import React, { useEffect, useState } from 'react'
import payment_options from '../assets/images/payment_options.png'
import logo from '../assets/images/Logo.png'
import './Footer.css'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation();
    const currentUrl = location.pathname;
    const [isAuthPage, setIsAuthPage] = useState(!(currentUrl.includes("login") || currentUrl.includes("sign-up")));

    useEffect(() => {
        setIsAuthPage(!(currentUrl.includes("login") || currentUrl.includes("sign-up")));
    }, [currentUrl]);
    return (
        isAuthPage && <footer className='bg-white'>
            <div className='container'>
                <div className="row ">
                    <div className="col-lg-3  col-12">
                        <Link to={'/'} className='d-flex justify-content-center d-md-block'>
                            <img src={logo} alt="CORAL" className='logo' />
                        </Link>
                        <div className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</div>

                        <svg width="172" height="16" viewBox="0 0 172 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M164 0C159.584 0 156 3.584 156 8C156 12.416 159.584 16 164 16C168.4 16 172 12.416 172 8C172 3.584 168.4 0 164 0ZM169.28 3.68C170.24 4.848 170.8 6.32 170.832 7.936C170.608 7.888 168.352 7.44 166.08 7.712C166.032 7.6 165.984 7.472 165.936 7.36C165.792 7.024 165.648 6.688 165.488 6.368C167.984 5.36 169.136 3.872 169.28 3.68ZM164 1.184C165.728 1.184 167.328 1.84 168.528 2.896C168.4 3.072 167.376 4.448 164.944 5.36C163.824 3.296 162.576 1.616 162.4 1.36C162.912 1.248 163.44 1.184 164 1.184ZM161.088 1.824C161.264 2.064 162.48 3.76 163.616 5.776C160.416 6.624 157.6 6.608 157.296 6.608C157.76 4.48 159.184 2.72 161.088 1.824ZM157.168 8.016C157.168 7.952 157.168 7.872 157.168 7.808C157.456 7.824 160.784 7.856 164.192 6.832C164.384 7.216 164.576 7.6 164.752 8C164.672 8.032 164.576 8.048 164.48 8.08C160.96 9.216 159.088 12.32 158.928 12.576C157.824 11.36 157.168 9.76 157.168 8.016ZM164 14.832C162.416 14.832 160.96 14.288 159.808 13.392C159.936 13.136 161.312 10.464 165.168 9.12C165.184 9.104 165.2 9.104 165.216 9.104C166.176 11.6 166.576 13.68 166.672 14.288C165.856 14.64 164.944 14.832 164 14.832ZM167.808 13.664C167.744 13.248 167.376 11.248 166.48 8.8C168.624 8.464 170.496 9.024 170.736 9.088C170.432 10.992 169.344 12.64 167.808 13.664Z" fill="black" />
                            <path d="M107.6 16H104.2V5.3H107.6V16ZM105.9 3.8C104.8 3.8 104 3 104 1.9C104 0.8 104.9 0 105.9 0C107 0 107.8 0.8 107.8 1.9C107.8 3 107 3.8 105.9 3.8ZM120 16H116.6V10.2C116.6 8.5 115.9 8 114.9 8C113.9 8 112.9 8.8 112.9 10.3V16H109.5V5.3H112.7V6.8C113 6.1 114.2 5 115.9 5C117.8 5 119.8 6.1 119.8 9.4V16H120Z" fill="black" />
                            <path d="M68 3C67.4 3.3 66.8 3.4 66.1 3.5C66.8 3.1 67.3 2.5 67.5 1.7C66.9 2.1 66.2 2.3 65.4 2.5C64.8 1.9 63.9 1.5 63 1.5C60.9 1.5 59.3 3.5 59.8 5.5C57.1 5.4 54.7 4.1 53 2.1C52.1 3.6 52.6 5.5 54 6.5C53.5 6.5 53 6.3 52.5 6.1C52.5 7.6 53.6 9 55.1 9.4C54.6 9.5 54.1 9.6 53.6 9.5C54 10.8 55.2 11.8 56.7 11.8C55.5 12.7 53.7 13.2 52 13C53.5 13.9 55.2 14.5 57 14.5C63.1 14.5 66.5 9.4 66.3 4.7C67 4.3 67.6 3.7 68 3Z" fill="black" />
                            <path d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z" fill="black" />
                        </svg>
                    </div>
                    <div className="col-lg-3 mt-4 mt-md-0 col-6">
                        <div className="cursor-pointer fw-semibold mb-4">CATALOG</div>
                        <div className='cursor-pointer mb-2'>Necklaces</div>
                        <div className='cursor-pointer mb-2'>hoodies</div>
                        <div className='cursor-pointer mb-2'>Jewelry Box</div>
                        <div className='cursor-pointer mb-2'>t-shirt</div>
                        <div className='cursor-pointer mb-2'>jacket</div>
                    </div>
                    <div className="col-lg-3 mt-4 mt-md-0 col-6">
                        <div className="cursor-pointer fw-semibold mb-4">ABOUT US</div>
                        <div className='cursor-pointer mb-2'>Our Producers</div>
                        <div className='cursor-pointer mb-2'>Sitemap</div>
                        <div className='cursor-pointer mb-2'>FAQ</div>
                        <div className='cursor-pointer mb-2'>About Us</div>
                        <div className='cursor-pointer mb-2'>Terms & Conditions</div>
                    </div>
                    <div className="col-lg-3 mt-4 mt-md-0 col-12">
                        <div className="cursor-pointer fw-semibold mb-4">CUSTOMER SERVICES</div>
                        <div className='cursor-pointer mb-2'>Contact Us</div>
                        <div className='cursor-pointer mb-2'>Track Your Order</div>
                        <div className='cursor-pointer mb-2'>Product Care & Repair</div>
                        <div className='cursor-pointer mb-2'>Book an Appointment</div>
                        <div className='cursor-pointer mb-2'>Shipping & Returns</div>
                    </div>
                </div>
            </div>
            <div className="payment-row py-2">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2">
                        <div className="text-center col">© 2022 Coral , Inc.</div>
                        <div className="text-center col">
                            <img src={payment_options} className='payment-options' alt="Payment Options" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer