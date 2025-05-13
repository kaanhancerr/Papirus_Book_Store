import { use } from 'react';
import axios from '../../../utils/axios'

export const addItemToCart = async (payload) => {
    // console.log('payload', payload)
    const response = await axios.post('/addItemToCart', payload)
    return response.data;
}

// kullanicinin sepetindeki kitaplari getirir.
export const getBooksInCart = async (_id) => {
    console.log('_id', _id)
    const response = await axios.post('/getBooksInCart', { _id })
    return response.data;
}

// sepetten urun silme
export const removeBookFromCart = async (payload) => {
    const response = await axios.post('/removeBookFromCart', (payload))
    return response.data;
}

// kullanicinin bakiyesini getirir.
export const getUserBalance = async (_id) => {
    const response = await axios.post('/getUserBalance', { _id })
    return response.data;
}

// satin alma ve bakiye guncelleme
export const buyBooks = async (payload) => {
    const response = await axios.post('/buyBooks', (payload));
    return response.data;
}
