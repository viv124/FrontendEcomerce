import React from 'react'
import './CartItem.css'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart, updateCartItemQuantity } from '../../redux/productSlice';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CartItem({ product }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div className="cart-item-container">

            <div className="row mb-2">
                <div className="col-12 col-md-4 mb-2">
                    <div className="cart-product-image cursor-pointer" onClick={() => {
                        navigate('/product/' + product.id)
                    }}>
                        <img src={product?.thumbnail} alt={product?.title} />
                    </div>
                </div>
                <div className="col-12 col-md-8 ps-md-5 py-2 mb-2 position-relative">
                    <div className="d-flex justify-content-between">
                        <h2>{product?.title}</h2>
                        <div className="fw-bolder h3">${product?.price}</div>
                    </div>
                    <div className="my-1 cart-product-seller">
                        Sold by
                        <Link className='mx-2 text-decoration-none' to={'#'}>{product?.brand}</Link>
                    </div>
                    <div className="my-1 cart-product-category">
                        {product?.category}
                    </div>

                    {/* <div className="d-flex justify-content-between position-absolute bottom-0 w-auto"> */}
                    <div class="dropdown position-absolute bottom-0 left-0">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Qty {product?.quantity}
                        </button>
                        <ul class="dropdown-menu">
                            {Array.from({ length: product?.stock || 0 }).map((_, index) => (
                                <li key={index} className="dropdown-item" onClick={() => {
                                    dispatch(updateCartItemQuantity({ "productId": product?.id, "quantity": index + 1 }))
                                }}>
                                    {index + 1}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="delete-button bg-danger rounded-circle p-2 cursor-pointer  position-absolute bottom-0 end-0"
                        data-bs-toggle="modal" data-bs-target="#deleteConfirmation">

                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                    {/* </div> */}

                </div>
            </div>


            <div class="modal fade" id="deleteConfirmation" tabindex="-1" aria-labelledby="deleteConfirmationLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="deleteConfirmationLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Do you really want to delete the product?</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                onClick={() => {
                                    dispatch(removeFromCart(product?.id))
                                }}>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CartItem