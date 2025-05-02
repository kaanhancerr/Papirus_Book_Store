import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
})