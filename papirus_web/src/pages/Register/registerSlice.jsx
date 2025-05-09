import UserRegisterService from "./registerService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk('user/register', async (credentials, { rejectWithValue }) => {
    try {
        const response = await UserRegisterService(credentials)
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || 'Kayit basarisiz oldu.')
    }
})

const initialForm = {
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    phone: ''
}

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        form: { ...initialForm },
        user: null,
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        //Formda tek bir alanı günceller
        setFormField: (state, action) => {
            const { field, value } = action.payload;
            state.form[field] = value;
        },
        //Tüm formu ve hataları sıfırlar
        resetForm: (state) => {
            state.error = null;
            state.form = { ...initialForm }
            state.success = false;
        },
        //Bu da kayıt işlemi tamamlandıktan sonra (veya iptal edildiğinde) genel durumu sıfırlar.
        resetRegisterState: (state) => {
            state.user = null;
            state.loading = false;
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;

            //kayit islemi basarili oldugunda, serverden gelen user bilgilerini state.user e kaydediyoruz.
            state.user = action.payload; // action payload serverden donen kullanici bilgisi.

            //formu sifirliyoruz cunku yukarda kayit yapildi ve formda veri kalmamali.
            state.form = { ...initialForm } // formu yeniden bos haliyle sifirliyoruz.
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }


})

export const { setFormField, resetForm, resetRegisterState } = registerSlice.actions
export default registerSlice.reducer;