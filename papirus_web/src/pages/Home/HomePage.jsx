// App.js
import React, { useEffect, useState } from 'react';
import book from '../../assets/book.png'
import getAllBooks from './Store/homeService';
import { fetchBooks } from './Store/homeSlice'
import { useDispatch, useSelector } from 'react-redux';
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
} from '@tanstack/react-table';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Button, Pagination, Stack } from '@mui/material';
import { addToCard } from '../Card/Store/cardSlice';
import { Box } from '@mui/material'





const HomePage = () => {
	const userId = localStorage.getItem('userId')
	console.log(userId)

	const handleAddList = (book) => {
		console.log('book:', book);
		const payload = {
			_id: userId,
			book: book,
		}

		dispatch(addToCard(payload))
	}
	console.log('user id', userId)
	const columns = [
		{
			accessorKey: 'bookImg',
			header: 'Kitap',
			cell: (info) => <img src={info.getValue()} width={80} height={100} />
		},
		{
			accessorKey: 'title',
			header: 'Kitap Adı',
		},
		{
			accessorKey: 'author.name',
			header: 'Yazar',
		},
		{
			accessorKey: 'category',
			header: 'Kategori'
		},
		{
			accessorKey: 'price',
			header: 'Fiyat'
		},
		{
			accessorKey: 'card',
			header: 'Sepete Ekle',
			cell: (info) => <Button sx={{ backgroundColor: '#eadec6', color: 'black' }} variant='contained' onClick={() => {
				console.log('tiklandi', info.row.original)
				handleAddList(info.row.original)
			}}>Ekle</Button> //sadece tiklanan buton detayini alir.

		},
		// {
		//     accessorKey: 'status',
		//     header: 'x'
		// }

	];

	const dispatch = useDispatch();
	const homeData = useSelector((store) => store.home.books?.data)

	//PAGINATION
	const [page, setPage] = useState(1);
	const limit = 10;

	const books = useSelector((store) => store.home.books)
	const total = useSelector((store) => store.home.total)
	const totalPages = Math.ceil(total / limit) // math.ceil=> (7.2) mesela 8 e ceviriyor.

	useEffect(() => {
		dispatch(fetchBooks({
			page, limit,
		})); // veri cekmek icin dispatch cagrisi.
		// console.log('homeData', homeData)
		console.log('page state', page)
		console.log('total', total)
		console.log('total pages', totalPages)
	}, [dispatch, page])


	const booksData = Array.isArray(homeData) ? homeData : [];

	useEffect(() => {
		console.log('bookdata', booksData)
	}, [homeData])




	const table = useReactTable({
		data: booksData,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems={'center'}
				sx={{ width: 'calc(100% - 300px)', maxHeight: 'calc(100vh - 110px)', overflow: 'auto', ml: 'auto' }}
			>
				<TableContainer component={Paper} sx={{ width: '100%', maxHeight: '100%', overflow: 'auto', ml: 'auto' }}>
					<Table>
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
				{/* totalpage ilk basta 0 geldigi icin hata veriyor. total  degeri ilk basta 0 oldugu icin totalpage de otomatik olarak undefined ya da 0 donuyyor.  */}
				{total > 0 && (
					<Stack spacing={2} direction='row' justifyContent={'center'} mt={2} width='100%'>
						<Pagination
							count={totalPages}
							page={page}
							onChange={(event, value) => setPage(value)}
						/>
					</Stack>

				)}

				{/* 
            <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
                <Pagination
                    count={3}
                    page={2}
                    onChange={(event, value) => setPage(value)}
                    color="primary"
                />
            </Stack> */}
			</Box>
		</>

	);
}

export default HomePage;
