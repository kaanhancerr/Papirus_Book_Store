import { Box, FormControl, InputLabel, OutlinedInput, Typography, Link, Button, Snackbar, Alert, ThemeProvider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Book from '../../assets/books-register.jpg'
import Papirus from '../../assets/book.png'
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setFormField, resetForm, resetRegisterState, registerUser } from "./registerSlice";
import { useForm, Controller } from 'react-hook-form'
import getTheme from "../../Theme/AppTheme";

const Register = () => {

    const theme = getTheme();

    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success')

    const dispatch = useDispatch();
    const form = useSelector(store => store.register.form) // redux storedan form verilerini aliyoruz.
    const { loading, error, success } = useSelector(store => store.register)
    //const loadingOrnek = useSelector(store => store.register.loading) obj dest yaptik.

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: form //// Redux'tan alınan form verilerini, react-hook-form'un defaultValue olarak geçiriyoruz.
    })

    useEffect(() => {
        console.log('loading', loading)
        console.log('error', error)
        console.log('success', success)
        // loading == false; yukleme bittiginde yani kayit islemi tamamlandiginda.
        if (!loading) {
            // eger kayit islemi bittikten sonra bir hata olmussa.
            if (error) {
                const msg = typeof error === 'string' ? error : error.message || 'bir hata olustu.'
                setSnackbarMessage(msg); // hata mesajini goster
                setSnackbarSeverity('error')
                setOpenSnackbar(true); // snackbari goster
            }
            // kayit islemi bittikten sonra herhangi bir hata almadan basariyla kayit olusturdugumuzda.
            else if (success) {
                setSnackbarMessage('Kayıt başarıyla oluşturuldu.')
                setSnackbarSeverity('success')
                setOpenSnackbar(true); // snacbkari goster
            }
        }
    }, [loading, error, success])

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        dispatch(resetRegisterState());
    }

    useEffect(() => {
        dispatch(resetForm()); //resetForm adındaki reducer fonksiyonunu çalıştır, state’i güncelle.”
    }, [dispatch])

    // form verisini guncellemek icin 
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     dispatch(setFormField({ field: name, value }))
    // }

    const handleFieldChange = (fieldName, fieldOnChange) => (e) => {
        fieldOnChange(e);
        dispatch(setFormField({ field: fieldName, value: e.target.value }));
    }

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    }


    return (
        <ThemeProvider theme={theme}>


            <Box display={"flex"} height='100vh' width='100vw'>
                {/* Ekranin sol tarafi */}
                <Box sx={{ width: '50%' }}>
                    <img src={Book} alt="" height='100%' width='100%' />
                </Box>
                {/* Ekranin sag tarafi */}
                <Box display={"flex"} flexDirection={'column'} alignItems={"center"} width='50%' mt={15}>
                    <Box>
                        <img src={Papirus} width='280px' height='280px%' />
                    </Box>
                    <Box display={"flex"} gap='15px' mt={10}>
                        <FormControl>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Name alanı zorunludur.' }}
                                render={({ field }) => {
                                    return (

                                        <TextField
                                            {...field}
                                            variant="outlined"
                                            label='Name'
                                            id="register-name"
                                            onChange={handleFieldChange('name', field.onChange)}
                                        >
                                        </TextField>
                                    )
                                }}

                            />
                            {errors.name && (
                                <Typography color="error">{errors.name.message}</Typography>
                            )}
                        </FormControl>

                        <FormControl>
                            <Controller
                                name="surname"
                                control={control}
                                rules={{
                                    required: 'Surname alanı zorunludur.',
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        label='Surname'
                                        id="register-surname"
                                        type="text"
                                        onChange={handleFieldChange('surname', field.onChange)}

                                    >
                                    </TextField>
                                )}

                            />
                            {errors.surname && (<Typography color="error">{errors.surname.message}</Typography>)}
                        </FormControl>
                    </Box>
                    <Box display={"flex"} gap='15px' mt={5}>
                        <FormControl>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'Email zorunludur.',
                                    pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                        message: 'Gecerli bir email adresi girin'
                                    }
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        id="register-email"
                                        type="text"
                                        label='Email'
                                        onChange={handleFieldChange('email', field.onChange)}
                                    >
                                    </TextField>
                                )}
                            />
                            {errors.email && (<Typography color="error">{errors.email.message}</Typography>)}
                        </FormControl>
                        <FormControl>
                            <Controller
                                name="username"
                                control={control}
                                rules={{
                                    required: 'Username alanı zorunludur'
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        label='Username'
                                        id="register-username"
                                        type="text"
                                        onChange={handleFieldChange('username', field.onChange)}
                                    >
                                    </TextField>
                                )}
                            />
                            {errors.username && (<Typography color="error">{errors.username.message}</Typography>)}
                        </FormControl>
                    </Box>
                    <Box display={"flex"} gap='15px' mt={5}>
                        <FormControl>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: 'Password alanı zorunludur.',
                                    minLength: {
                                        value: 8,
                                        message: 'Şifre en az 8 karakter olmalıdır.'
                                    }
                                }}

                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        label='Password'

                                        id="register-password"
                                        type="password"
                                        onChange={handleFieldChange('password', field.onChange)}
                                    >

                                    </TextField>
                                )}
                            />
                            {errors.password && (<Typography color="error">{errors.password.message}</Typography>)}
                        </FormControl>
                        <FormControl>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: 'Phone alanı zorunludur.' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        label='Phone'
                                        id="register-phone"
                                        type='number'
                                        onChange={handleFieldChange('phone', field.onChange)}
                                    >
                                    </TextField>
                                )}
                            />
                            {errors.phone && (<Typography color="error">{errors.phone.message}</Typography>)}
                        </FormControl>
                    </Box>
                    <Typography fontSize='15px' variant="subtitle1" mt='24px'>Zaten bir hesabınız var mı?
                        <Link component={RouterLink} to='/login' underline="none" sx={{ cursor: 'pointer' }}> Giriş Yap! </Link>
                    </Typography>
                    <Button variant="contained"
                        sx={{ backgroundColor: ' #f3e3cc', color: 'black', borderRadius: '20px', width: '20ch', mt: 4 }}
                        onClick={handleSubmit(onSubmit)}
                        disabled={loading}

                    >KAYIT OL</Button>
                    {error && (
                        <Typography color="error" mt={2}>
                            {typeof error === 'string' ? error : error.message}
                        </Typography>
                    )}
                    {success && (
                        <Typography color="success" mt={2}>
                            Kayıt başarılı!
                        </Typography>
                    )}
                    <Snackbar open={openSnackbar} autoHideDuration={10000} onClose={() => setOpenSnackbar(false)}>
                        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                            {typeof snackbarMessage === 'string' ? snackbarMessage : snackbarMessage.message}
                        </Alert>
                    </Snackbar>

                </Box>
            </Box>
        </ThemeProvider>
    )
}
export default Register 