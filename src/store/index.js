import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./slice/postSlice.js"

const store = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([])
})

export default store