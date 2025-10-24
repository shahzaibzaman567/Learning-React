import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slices/counter"
// import usedis

export const Store=configureStore({

    reducer:{
        counter:counterReducer,
    },
}) 