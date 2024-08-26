import React from 'react'
import './CartPage.css'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem';

function CartPage() {
    const cartData = useSelector((state) => state.product.cart);
    console.log(cartData)
    return (<div>
        <hr className='container' />
        <div className={`container cart-container ${!(cartData && cartData.length > 0) && 'd-flex justify-content-center align-items-center'}`}>
            {cartData && cartData.length > 0 ? cartData.map((i, k) => {
                return <CartItem product={i} key={k} />
            }) : <div className='h1 text-center m-md-5 text-secondary '>No Products available</div>}
        </div>
    </div>
    )
}

export default CartPage