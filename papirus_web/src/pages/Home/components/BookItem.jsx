import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Papirus from '../../../assets/book.png'

const BookItem = () => {
    return (
        <Box overflow={"hidden"} display={"flex"} alignItems={"center"} justifyContent='space-between' flexDirection={"column"}
            marginLeft='350px' width='230px' height='350px'
            sx={{
                backgroundColor: 'white', borderRadius: '20px', boxShadow: 10, transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)'
                }
            }}>
            {/* Kitap kapak */}
            <Box height='150px' width='130px' mt={1} >
                <img src={Papirus} alt="" height='100%' width='100%' />
            </Box>
            {/* Kitap Adi */}
            <Box>
                <Typography>
                    Kitap Adi
                </Typography>
                <Typography>
                    Yayin Evi
                </Typography>
                <Typography>
                    Yazar
                </Typography>
            </Box>
            {/* Fiyat butonu */}
            <Box >
                <Button variant="contained" sx={{ width: '15ch', mb: '18px' }}>Fiyat</Button>
            </Box>

        </Box>
    )
}
export default BookItem