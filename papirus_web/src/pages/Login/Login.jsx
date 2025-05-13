import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Typography, Link, Button, Backdrop, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Book from '../../assets/book.png'
import Books from '../../assets/books.webp'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink, useNavigate } from 'react-router-dom' //react-router-dom kütüphanesinden Link alıyoruz. Ona isim veriyoruz (as RouterLink) ki MUI Link ile karışmasın diye.
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "./loginSlice";
import { Controller, useForm } from "react-hook-form";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((store) => store.login)

    const { control, handleSubmit, formState: { errors } } = useForm({})

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleLogin = async (data) => {
        try {
            const action = await dispatch(loginUser({
                email: data.Email,
                password: data.Password
            }))
            if (action.type === 'auth/loginUser/fulfilled') {
                navigate('/home')
            }
        }
        catch (error) {
            console.log("Giriş başarısız oldu", error);
        }
    }

    return (
        <Box display={"flex"} height='100vh' width='100vw' >
            {/* Ekranin sol tarafi */}
            <Box sx={{ width: '50%' }}>
                <img src={Books} width='100%' height='100%' />
            </Box>
            {/* Ekranin sag tarafi */}
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{ width: '50%' }}>
                <img src={Book} alt="" style={{ marginTop: 140, height: 280, width: 280 }} />
                <FormControl sx={{ width: '34ch', mt: 10 }}>
                    <Controller
                        name="Email"
                        control={control}
                        rules={{
                            required: 'Email zorunludur.',
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: 'Geçerli bir Email adresi giriniz.'
                            }
                        }}
                        render={({ field }) => {
                            return (
                                <TextField
                                    {...field}
                                    label='Email'
                                    placeholder="Email"
                                    type="text"
                                    error={!!errors.Email} // hata olup olmadigini kontrol eder
                                    helperText={errors.Email ? errors.Email.message : ''}
                                />
                            )
                        }}
                    />
                </FormControl>

                <FormControl sx={{ width: '34ch', mt: 5 }}>
                    <Controller
                        name="Password"
                        control={control}
                        rules={{
                            required: 'Password zorunludur.',
                            minLength: {
                                value: 8,
                                message: 'Şifre en az 8 karakter olmalıdır.'
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label='Password'
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi sakla'}
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                error={!!errors.Password} // hata olup olmadigini kontrol eder
                                helperText={errors.Password ? errors.Password.message : ''}
                            />
                        )}
                    />
                </FormControl>
                <Typography fontSize='15px' mt='40px' variant="subtitle1">Hesabınız yok mu?
                    <Link component={RouterLink} underline='none' to='/register' sx={{ cursor: 'pointer' }}> Üye Ol !</Link>
                </Typography>

                <Button onClick={handleSubmit(handleLogin)} disabled={loading} variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', marginTop: 5, borderRadius: 10, width: '20ch' }}>GİRİŞ YAP</Button>

                <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <CircularProgress color="inherit" />
                    <Typography ml={5}>Giriş yapılıyor...</Typography>
                </Backdrop>
                {error && (
                    <Typography mt={2} color="error" fontWeight="bold">
                        {error === "Rejected" ? "Email veya şifre hatalı" : error}
                    </Typography>
                )}


                {/* <FormControl sx={{ mt: 10, width: '34ch' }} variant="outlined">
                    <InputLabel htmlFor="login-email">Email</InputLabel>
                    <OutlinedInput
                        id="login-email"
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </OutlinedInput>
                </FormControl> */}

                {/* <FormControl sx={{ mt: 5, width: '34ch' }} variant="outlined">
                    <InputLabel htmlFor="login-password">Password</InputLabel>
                    <OutlinedInput
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={showPassword ? 'şifreyi gizle' : 'şifreyi sakla'}
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    >
                    </OutlinedInput>
                </FormControl> */}
                {/* <FormControl sx={{ mt: 5, width: '34ch' }}>
                    <TextField label='Password' variant="standard" placeholder="Password" sx={{}}></TextField>
                </FormControl>
                <FormControl sx={{ mt: 5, width: '34ch' }}>
                    <TextField label='Password' variant="filled" placeholder="Password" sx={{}}></TextField>
                </FormControl> */}


            </Box>
        </Box>
    )
}

export default Login