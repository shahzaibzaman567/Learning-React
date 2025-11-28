import { createSlice } from "@reduxjs/toolkit";

export const NameSlice = createSlice({

    initialState: "Goflan",
    name: "User",
    reducers: {
        ChangeGoflan: state => state = "Goflan",
        ChangeArman: state => state = "Arman",

    }
});


export const { ChangeArman, ChangeGoflan } = NameSlice.actions;

export default NameSlice.reducer;     
