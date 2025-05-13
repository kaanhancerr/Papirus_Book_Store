import { getLoggedUser, updateUserInfo } from "./profileService";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const updateUser = createAsyncThunk('auth/updateUser', async (credentials) => {
    const data = await updateUserInfo(credentials);
    console.log(data);
    return data;

})
// kullanici bilgilerini getirir.
export const getUser = createAsyncThunk('user/getUser', async (userId) => {
    console.log('gonderilenUserid', userId)
    const data = await getLoggedUser(userId);
    return data;
})

const updateSlice = createSlice({
    name: 'update',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })

        //kullanici bilgilerini dondurur.
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }

})
export const { } = updateSlice.actions
export default updateSlice.reducer