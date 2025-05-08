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

export const removeBookFromCart = async (payload) => {
    const response = await axios.post('/removeBookFromCart', (payload))
    return response.data;
}
