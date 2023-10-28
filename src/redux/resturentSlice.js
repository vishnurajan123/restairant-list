import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchResturents=createAsyncThunk('resturentlist/fetchResturents',()=>{
    // api call
    return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const resturentSlice=createSlice({
    name:"resturentlist",
    initialState:{
        loading:false,
        allResturents:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturents.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchResturents.fulfilled,(state,action)=>{
            state.loading=false
            state.allResturents=action.payload
            state.error=""
        })
        builder.addCase(fetchResturents.rejected,(state,action)=>{
            state.loading=false
            state.allResturents=[]
            state.error=action.error.message
        })
    }
})

export default resturentSlice.reducer