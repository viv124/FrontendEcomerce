import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        auth: authSlice,
    },
});

export default store;
