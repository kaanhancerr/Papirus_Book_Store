import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Papirus from '../assets/book.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Sidebar = () => {

    const dispatch = useDispatch();
    const userBalance = useSelector((store) => store.card.balance)

    const navigate = useNavigate();
    const menuItems = [

        { icon: <ShoppingCartIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Sepetim", onClick: () => navigate('/card') },
        { icon: <MenuBookIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Mağaza", onClick: () => navigate('/home') },
        { icon: <FavoriteIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Favorilerim" },
        { icon: <EditDocumentIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Yazarlar" },
        {
            icon: <AccountBalanceWalletIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: (
                <Box display="flex" alignItems="center">
                    Cüzdan: <span style={{ marginLeft: 7 }}>{typeof userBalance === 'number' ? `${userBalance.toFixed(2)}₺` : '0.00₺'}</span>
                </Box>
            )
        },
    ]


    return (
        <Box display={"flex"} flexDirection={"column"} height='100vh' width='300px' position={"fixed"} top={0} left={0} sx={{ backgroundColor: '  #eadec6' }}>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={5}>
                <img src={Papirus} alt="" height='250px' width='80%' />
            </Box>

            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width='100%' mt={20} >
                <List sx={{ width: '50%' }}>
                    {menuItems.map((item, index) => (
                        <ListItem disablePadding key={index} sx={{ mb: "10px" }}>
                            <ListItemButton sx={{ padding: 0 }} onClick={item.onClick}>
                                {item.icon}
                                <ListItemText
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            color: 'black',
                                            ml: '10px'
                                        }
                                    }}
                                    primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

        </Box>
    )
}
export default Sidebar