import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addItemToCart, getBooksInCart, removeBookFromCart } from './cardService'

// sepete urun ekleme thunk i 
export const addToCard = createAsyncThunk('card/addToCard', async (payload) => {
    const data = await addItemToCart(payload);
    return data;
})

// sepetteki urunleri gosterme thunk i 
export const fetchCartItems = createAsyncThunk('card/fetchCartItems', async (userId) => {
    const data = await getBooksInCart(userId);
    return data;
})

// urun silme
export const removeFromCart = createAsyncThunk('card/removeFromCart', async (payload) => {
    const data = await removeBookFromCart(payload);
    return data;
})

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // sepete urun ekleme
        builder.addCase(addToCard.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(addToCard.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload); //apidan gelen kitap bilgisi
        })
        builder.addCase(addToCard.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'bir hata olustu';
        })


        // sepetteki urunleri gosterme
        builder.addCase(fetchCartItems.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload
        })
        builder.addCase(fetchCartItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'bir hata olustu';
        })

        //sepetten silme
        builder.addCase(removeFromCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(removeFromCart.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload
            // const removedBookId = action.meta.arg.books[0]; // Silinen kitabın ID'si

            // // Manual olarak sepeti güncelle
            // state.items = state.items.filter(item => item.author._id !== removedBookId);
        })
        builder.addCase(removeFromCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'bir hata olustu'
        })
    }
})

export const { } = cardSlice.actions
export default cardSlice.reducer