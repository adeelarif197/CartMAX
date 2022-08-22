import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cartReducer";

const Store = configureStore({
    reducer:{
        cartReducer,
    }
})

export default Store;