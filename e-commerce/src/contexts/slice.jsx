import {createSlice} from "@reduxjs/toolkit"
// import { CounterSlice, increment } from "../../../redux/src/component/slices/counter"

export const CounterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:( state ) => state + 1,
    }
})

export const {increment} = CounterSlice.actions;

export default CounterSlice.reducer;

