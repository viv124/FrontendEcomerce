import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast'

const initialState = {
    "cart": []
};
const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        updateCartItemQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            console.log(action.payload)
            const existingProductIndex = state.cart.findIndex(item => item.id === productId);

            if (existingProductIndex !== -1) {
                state.cart[existingProductIndex].quantity = quantity;
            } else {
                toast.error(`Product with ID ${productId} not found in cart.`);
            }
        }, removeFromCart: (state, action) => {
            const productId = action.payload;
            const productIndex = state.cart.findIndex(item => item.id === productId);

            if (productIndex !== -1) {

                toast.success(`Product removed successfully from cart.`);
                state.cart.splice(productIndex, 1);
            } else {
                toast.error(`Product with ID ${productId} not found in cart.`);
            }
        },
    },
});

export default productSlice;
export const { addToCart, getCartCount, updateCartItemQuantity, removeFromCart } = productSlice.actions;
