import { Box, FormControl, InputLabel, OutlinedInput, Typography, Link, Button } from "@mui/material";
import React from "react";
import Book from '../assets/books-register.jpg'
import Papirus from '../assets/book.png'
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
    return (
        <Box display={"flex"} height='100vh' width='100wh'>
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
                        <InputLabel>Name</InputLabel>
                        <OutlinedInput
                            id="register-name"
                            type="text"
                        >
                        </OutlinedInput>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Surname</InputLabel>
                        <OutlinedInput
                            id="register-surname"
                            type="text"
                        >
                        </OutlinedInput>
                    </FormControl>
                </Box>
                <Box display={"flex"} gap='15px' mt={5}>
                    <FormControl>
                        <OutlinedInput
                            id="register-email"
                            type="text"
                            placeholder="Email"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <OutlinedInput
                            id="register-username"
                            type="text"
                            placeholder="Username"
                        >

                        </OutlinedInput>
                    </FormControl>
                </Box>
                <Box display={"flex"} gap='15px' mt={5}>
                    <FormControl>
                        <InputLabel htmlFor="register-password">Password</InputLabel>
                        <OutlinedInput
                            id="register-password"
                            type="password"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='register-phone'>Phone</InputLabel>
                        <OutlinedInput
                            id="register-phone"
                            type='number'
                        >

                        </OutlinedInput>
                    </FormControl>
                </Box>
                <Typography fontSize='15px' ariant="subtitle1" mt='24px'>Zaten bir hesabınız var mı?
                    <Link component={RouterLink} to='/login' underline="none" sx={{ cursor: 'pointer' }}> Giriş Yap! </Link>
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', borderRadius: '20px', width: '20ch', mt: 4 }}>KAYIT OL</Button>
            </Box>
        </Box>
    )
}
export default Register 