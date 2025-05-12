import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllBooks from './homeService';

export const fetchBooks = createAsyncThunk(`home/books`, async ({ page = 1, limit = 10 }) => {
    const res = await getAllBooks(page, limit);
    // console.log(books)
    return {
        books: res,
        total: res.total,
    }
})



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        books: [],
        total: 0,
        loading: false,
        error: null,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload.books;
            state.total = action.payload.total;
            state.success = true;
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        })
    }
})
export const { } = homeSlice.actions;
export default homeSlice.reducer;