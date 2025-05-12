import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Typography, Link, Button } from "@mui/material";
import React, { useState } from "react";
import Book from '../../assets/book.png'
import Books from '../../assets/books.webp'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink, useNavigate } from 'react-router-dom' //react-router-dom kütüphanesinden Link alıyoruz. Ona isim veriyoruz (as RouterLink) ki MUI Link ile karışmasın diye.
import { useDispatch } from 'react-redux'
import { loginUser } from "./loginSlice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleLogin = async () => {
        try {
            const action = await dispatch(loginUser({ email, password }))
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


                <FormControl sx={{ mt: 10, width: '34ch' }} variant="outlined">
                    <InputLabel htmlFor="login-email">Email</InputLabel>
                    <OutlinedInput
                        id="login-email"
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </OutlinedInput>
                </FormControl>
                <FormControl sx={{ mt: 5, width: '34ch' }} variant="outlined">
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
                </FormControl>
                <Typography fontSize='15px' mt='40px' variant="subtitle1">Hesabınız yok mu?
                    <Link component={RouterLink} underline='none' to='/register' sx={{ cursor: 'pointer' }}> Üye Ol !</Link>
                </Typography>

                <Button onClick={() => handleLogin()} variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', marginTop: 5, borderRadius: 10, width: '20ch' }}>GİRİŞ YAP</Button>


            </Box>
        </Box>
    )
}

export default Login