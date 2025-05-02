import { Box, Button, FormControl, Input, InputLabel, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import Topbar from "../../components/Topbar";

const Profile = () => {
    return (
        <>
            <Topbar />
            <Box display={"flex"} flexDirection={"row"} ml='300px' sx={{ backgroundColor: 'brown' }}>

                {/* Sol taraf kişisel bilgilerim kismi */}
                <Box display={"flex"} flexDirection={"column"} width={350} ml='100px' height={600} gap='10px' sx={{ backgroundColor: 'pink' }}>
                    <Typography mb='20px' variant="h4" fontWeight='bold' fontFamily='-moz-initial'>Kişisel Bilgilerim</Typography>
                    <FormControl fullWidth >
                        <InputLabel htmlFor='profile-name'>Adınız</InputLabel>
                        <OutlinedInput
                            id="profile-name"
                            type="text"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='profile-surname'>Soyadınız</InputLabel>
                        <OutlinedInput
                            id="profile-surname"
                            type="text"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='profile-email'>E-posta</InputLabel>
                        <OutlinedInput
                            id="profile-email"
                            type="text"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="profile-phone">Cep Telefonu</InputLabel>
                        <OutlinedInput
                            id="profile-phone"
                            type="text"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <Button variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', borderRadius: '20px', mt: 2 }}>Bilgilerimi Güncelle</Button>
                </Box>

                {/* Sağ taraf Sifre guncelleme alani */}
                <Box display={"flex"} flexDirection={"column"} gap='10px' ml='auto' mr='150px' width={350} sx={{ backgroundColor: 'yellow' }} >
                    <Typography mb='20px' variant="h4" fontWeight='bold' fontFamily='-moz-initial'>Şifre Güncelleme</Typography>
                    <FormControl fullWidth>
                        <InputLabel htmlFor='available-password'>Mevcut Şifreniz</InputLabel>
                        <OutlinedInput
                            id="available-password"
                            type="password"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='new-password'>Yeni Şifre</InputLabel>
                        <OutlinedInput
                            id="new-password"
                            type="password"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='new-rePassword'>Yeni Şifre Tekrar</InputLabel>
                        <OutlinedInput
                            id="new-rePassword"
                            type="password"
                        >

                        </OutlinedInput>
                    </FormControl>
                    <Button variant="contained" sx={{ backgroundColor: ' #f3e3cc', borderRadius: '20px', mt: 2 }}>Şifremi Güncelle</Button>
                </Box>
            </Box>
        </>
    )
}
export default Profile 