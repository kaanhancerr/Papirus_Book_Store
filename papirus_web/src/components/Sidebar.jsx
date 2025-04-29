import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Papirus from '../assets/book.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const menuItems = [
    { icon: <ShoppingCartIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Sepetim" },
    { icon: <MenuBookIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Okuma Listem" },
    { icon: <FavoriteIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Favorilerim" },
    { icon: <EditDocumentIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Yazarlar" },
    { icon: <AccountBalanceWalletIcon sx={{ width: 25, height: 25, color: 'black', }} />, label: "Cüzdan:" },
]

const Sidebar = () => {
    return (
        <Box display={"flex"} flexDirection={"column"} height='100vh' width='300px' position={"fixed"} top={0} left={0} sx={{ backgroundColor: '  #eadec6' }}>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={5}>
                <img src={Papirus} alt="" height='250px' width='80%' />
            </Box>

            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width='100%' mt={20} >
                <List sx={{ width: '50%' }}>
                    {menuItems.map((item, index) => (
                        <ListItem disablePadding key={index} sx={{ mb: "10px" }}>
                            <ListItemButton sx={{ padding: 0 }}>
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