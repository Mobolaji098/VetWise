import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"
import userReducer from "./features/userSlice"

export const store = configureStore({
    reducer:{
        cartReducer,
        userReducer
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;