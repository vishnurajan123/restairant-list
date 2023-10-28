import { configureStore } from "@reduxjs/toolkit";
import resturentSlice from './resturentSlice'

const store=configureStore({
    reducer:{
        resturentSlice

    }
})

export default store