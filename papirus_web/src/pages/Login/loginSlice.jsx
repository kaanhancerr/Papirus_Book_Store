import LoginUserService from "./LoginService";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
    try {
        const data = await LoginUserService(credentials);
        return data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Giriş Başarısız')
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;

        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }

})

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;