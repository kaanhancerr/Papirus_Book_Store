import { Badge, Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardActions, fetchCartItems } from "../pages/Card/Store/cardSlice";

const userId = localStorage.getItem('userId');


const Topbar = ({ showSearch = false }) => {
    const dispatch = useDispatch();
    const carts = useSelector((store) => store.card.items); // sepetteki urun sayisini gostermek icin.
    const fullfilled = useSelector((s) => s.card.fullfilled)
    console.log({ carts })

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    const handleNavigateProfile = () => {
        navigate('/profile');
    }
    const handleNavigateCard = () => {
        navigate('/card');
    }

    useEffect(() => {
        if (fullfilled === null || fullfilled) {
            dispatch(fetchCartItems(userId))
            dispatch(CardActions.setFullfilled(false))
        }
    }, [fullfilled])

    return (
        <Box display={"flex"} height='100px' ml='300px' sx={{ backgroundColor: 'white' }} alignItems={"center"}>
            {showSearch && (
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search Books"
                    sx={{
                        ml: 10, width: '40ch',
                        '& .MuiInputBase-root': {
                            borderRadius: '40px'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                            borderColor: 'black',
                            opacity: 0.5
                        }

                    }}

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                >

                </TextField>
            )}
            <Box display={"flex"} mr={5} gap='10px' ml='auto'>
                <IconButton onClick={handleNavigateProfile} sx={{ color: 'black' }}>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={handleNavigateCard} sx={{ color: 'black' }}>
                    <Badge badgeContent={carts?.length} color="error">
                        <ShoppingCartIcon fontSize="large" />
                    </Badge>
                </IconButton>
                <IconButton onClick={() => handleLogOut()} sx={{ color: 'black' }}>
                    <LogoutIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar