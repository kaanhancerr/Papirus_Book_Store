import React from "react";
import Topbar from "../../components/Topbar";
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box, Typography, Button } from '@mui/material'
const CardPage = () => {
    return (
        <>
            <Topbar />
            <Box display={"flex"} gap={3} ml='300px' >

                {/* component={Paper} ifadesi, TableContainer bileşenine arka plan ve kenarlık gibi stil özelliklerini kazandırmak için kullanılır. */}
                <TableContainer component={Paper} sx={{ ml: '100px', width: '70%', height: '400px' }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ISBN</TableCell>
                                <TableCell>ÜRÜN</TableCell>
                                <TableCell>ÜRÜN ADI</TableCell>
                                <TableCell>FIYAT</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>


                <Box width="17%" p={2} component={Paper} height='200px'>
                    <Typography variant="h6">Sipariş Özeti</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        1 ürün
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ my: 2 }}
                    >
                        <Typography>Ödenecek Tutar</Typography>
                        <Typography fontWeight="bold" color="error">
                            45.17TL
                        </Typography>
                    </Box>
                    <Button variant="contained" color="error" fullWidth sx={{ mt: 3, height: 60 }}>
                        SATIN AL
                    </Button>
                </Box>

                {/* <TableContainer component={Paper} sx={{ width: '15%' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Siparis ozeti</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer> */}


                {/* <Box width='15%' height={250} sx={{ backgroundColor: 'pink' }}>

                </Box> */}
            </Box>

        </>
    )
}
export default CardPage