import LoginUserService from "./LoginService";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue, dispatch }) => {
    try {
        const data = await LoginUserService(credentials);
        console.log(data)
        dispatch(setUser(data));
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
        },
        setUser: (state, { payload }) => {
            console.log({ payload })
            state.user = {
                person: payload.user.person
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;

        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log({ action })
            state.loading = false;
            localStorage.setItem('userId', action.payload.user._id);
            // state.user = action.payload;
            // console.log('Kullanıcı verisi:', action.payload);
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }

})

export const { logout, setUser } = loginSlice.actions;
export default loginSlice.reducer;