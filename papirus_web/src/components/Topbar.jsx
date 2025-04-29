import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';


const Topbar = () => {
    const [showSearch, useShowSearch] = useState(true);
    return (
        <Box display={"flex"} height={100} ml='300px' sx={{ backgroundColor: 'white' }} justifyContent='space-between' alignItems={"center"}>
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
            <Box display={"flex"} mr={5} gap='10px'>
                <IconButton sx={{}}>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ShoppingCartIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <LogoutIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar