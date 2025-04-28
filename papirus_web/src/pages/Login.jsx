import { Box } from "@mui/material";
import React from "react";
import Book from '../assets/book.png'

const Login = () => {
    return (
        <Box display={"flex"} height='100vh' width='1' >
            <Box sx={{ backgroundColor: 'green', flex: 1 }}>

            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{ flex: 1 }}>
                <Box   >
                    <img src={Book} alt="" style={{ height: 250, width: 250 }} />
                </Box>

            </Box>
        </Box>
    )
}

export default Login