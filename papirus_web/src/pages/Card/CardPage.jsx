import React, { useEffect } from "react";
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box, Typography, Button } from '@mui/material'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, removeFromCart, fetchUserBalance, fetchBuyBooks } from "./Store/cardSlice";



const CardPage = () => {

    const columns = [
        {
            accessorKey: 'ISBN',
            header: 'ISBN'
        },
        {
            accessorKey: 'bookImg',
            header: 'Ürün',
            cell: (info) => <img src={info.getValue()} width={110} height={140} />
        },
        {
            accessorKey: 'title',
            header: 'Ürün Adı'
        },
        {
            accessorKey: 'price',
            header: 'Fiyat'
        },
        {
            accessorKey: 'Sepetten Çıkar',
            header: 'Sepetten sil',
            cell: (info) => {
                const bookId = info.row.original._id
                return (


                    <Button variant='contained' color="error"
                        onClick={() =>
                            handleRemoveFromCart(bookId)
                            // console.log('bookId', bookId)
                        }
                    >Sil</Button>
                )
            }
        }
    ]

    const dispatch = useDispatch(); // urun eklenecek veya silinecekse lazim olacak, suan sadece UI da gosterecegimiz icin useSelector kullaniyoruz.


    useEffect(() => {
        const userId = localStorage.getItem('userId');
        dispatch(fetchCartItems(userId));
        dispatch(fetchUserBalance(userId))
    }, [dispatch])

    const cardData = useSelector((store) => store.card.items) // sepetteki urunler.
    console.log('cardData', cardData)

    const balance = useSelector((store) => store.card.balance);
    console.log('balance', balance)


    const handleRemoveFromCart = (bookId) => {
        const userId = localStorage.getItem('userId')
        dispatch(removeFromCart({
            _id: userId,
            books: [bookId]
        }))
            .then(() => {
                dispatch(fetchCartItems(userId))
            })

        console.log('books', bookId)
        console.log('_id', userId)
    }

    const handleBuyBooks = () => {
        const userId = localStorage.getItem('userId')
        const totalPrice = calculateTotalPrice(cardData)
        const payload = {
            _id: userId,
            totalPrice: totalPrice,
        }
        dispatch(fetchBuyBooks(payload)) // satin alma islemi bittikten sonra bakiyeyi guncelliyorum.
            .then(() => {
                dispatch(fetchUserBalance(userId))
            })
    }

    const calculateTotalPrice = (items) => {
        console.log({ items })
        if (!Array.isArray(items)) return 0;
        return items.reduce((total, item) => total + item.price, 0);
    }

    // const calculateTotalPrice = (cardData) => {
    //     return cardData.reduce((total, item) => total + item.price, 0);
    // }

    console.log('toplam fiyat', calculateTotalPrice(cardData));

    const table = useReactTable({
        data: cardData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <>

            <Box display={"flex"} gap={2} sx={{ width: 'calc(100% - 300px)', height: 'calc(100vh - 100px)', overflow: 'auto', ml: 'auto' }}>
                <TableContainer component={Paper} sx={{ ml: '10px' }}>
                    <Table >
                        <TableHead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <TableCell key={header.id}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map(row => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box width="17%" p={2} component={Paper} height='200px'>
                    <Typography variant="h6">Sipariş Özeti</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {cardData.length} ürün
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
                            {calculateTotalPrice(cardData).toFixed(2)}₺
                        </Typography>
                    </Box>
                    <Button onClick={handleBuyBooks} variant="contained" color="error" fullWidth sx={{ mt: 3, height: 60 }}>
                        SATIN AL
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default CardPage