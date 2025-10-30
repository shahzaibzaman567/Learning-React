import { createSlice } from "@reduxjs/toolkit";

export const filterSlice=createSlice({

    name:"filterdata",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action) => {
            state.items=action.payload
        },
    }
})

export const { addItem }=filterSlice.actions;
export default filterSlice.reducer;