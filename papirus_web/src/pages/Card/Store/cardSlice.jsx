import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addItemToCart, buyBooks, getBooksInCart, getUserBalance, removeBookFromCart } from './cardService'

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

// bakiye getirme
export const fetchUserBalance = createAsyncThunk('card/fetchUserBalance', async (userId) => {
    const data = await getUserBalance(userId);
    return data;
})

//satin alma ve bakiye guncelleme
export const fetchBuyBooks = createAsyncThunk('card/fetchBuyBooks', async (payload) => {
    const data = await buyBooks(payload);
    return data;
})

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        items: [],
        balance: 0,
        loading: false,
        error: null,
    },
    reducers: {

    },
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

        //bakiye getirme
        builder.addCase(fetchUserBalance.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchUserBalance.fulfilled, (state, action) => {
            state.loading = false;
            state.balance = action.payload;
        })
        builder.addCase(fetchUserBalance.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || ' bir hata olustu';
        })

        //satin alma ve bakiye guncelleme
        builder.addCase(fetchBuyBooks.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchBuyBooks.fulfilled, (state, action) => {
            console.log('bakiye daatasi', action.payload)
            state.loading = false;
            state.balance = action.payload.data;
            state.items = [];
        })
        builder.addCase(fetchBuyBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'satin alma islemi basarisiz.'
        })
    }
})

export const { } = cardSlice.actions
export default cardSlice.reducer