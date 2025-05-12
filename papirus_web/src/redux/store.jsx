import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'
import registerReducer from '../pages/Register/registerSlice'
import homeReducer from '../pages/Home/Store/homeSlice'
import cardReducer from '../pages/Card/Store/cardSlice'
import updateReducer from '../pages/Profile/Store/profileSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        home: homeReducer,
        card: cardReducer,
        update: updateReducer,
    },
})