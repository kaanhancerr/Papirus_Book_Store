import { Box, Button, FormControl, Input, InputLabel, OutlinedInput, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from "./Store/profileSlice";

const Profile = () => {
    const dispatch = useDispatch();
    // const user = useSelector((store) => store.login.user?.person)
    // console.log('user', user)

    // const dataUser = useSelector((store) => store.update.user)
    // console.log('dataUser', dataUser)

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log('userId', userId)
        dispatch(getUser(userId));
    }, [dispatch])

    const userData = useSelector((store) => store.update.user)
    console.log('userData', userData);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [cellPhone, setCellPhone] = useState('');

    useEffect(() => {
        if (userData) {
            setName(userData.firstName || '');
            setSurname(userData.lastName || '');
            setMail(userData.email || '');
            setCellPhone(userData.phone || '');

            // localStorage.setItem('userId', userData._id);
        }
    }, [userData])

    const handleUpdate = () => {
        const payload = {
            _id: localStorage.getItem('userId'),
            user: {
                email: mail,
                firstName: name,
                lastName: surname,
                phone: cellPhone,
            }
        }
        dispatch(updateUser(payload));
    }

    //SAYFA HER GUNCELLENDIGINDE CALISIR O YUZDEN KULLANMIYORUZ.
    // BIZ SADCE BUTONA BASINCA BILGILERI GUNCELLEMK ISTEDIGIMIZ ICIN FONK KULLANDIK YUKARDA.
    // useEffect(() => {
    //     const payload = {
    //         _id: user._id,
    //         user: {
    //             email: user.email,
    //             firstName: user.firstName,
    //             lastName: user.lastName,
    //             phone: user.phone
    //         }
    //     }
    //     dispatch(updateUser(payload));

    // }, [dispatch]);



    // useEffect(() => {
    //     setName(firstName);
    //     setSurname(lastName);
    //     setEposta(email);
    //     setCellphone(phone);


    // }, [firstName, lastName, email, phone])




    return (
        <>
            <Box display={"flex"} flexDirection={"row"} ml='300px'>

                {/* Sol taraf kişisel bilgilerim kismi */}
                <Box display={"flex"} flexDirection={"column"} width={350} ml='100px' height={600} gap='10px'>
                    <Typography mb='20px' variant="h4" fontWeight='bold' fontFamily='-moz-initial'>Kişisel Bilgilerim</Typography>
                    <FormControl fullWidth >
                        <InputLabel htmlFor='profile-name'>Adiniz</InputLabel>
                        <OutlinedInput
                            id="profile-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='profile-surname'>Soyadınız</InputLabel>
                        <OutlinedInput
                            id="profile-surname"
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='profile-email'>E-posta</InputLabel>
                        <OutlinedInput
                            id="profile-email"
                            type="text"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        >

                        </OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="profile-phone">Cep Telefonu</InputLabel>
                        <OutlinedInput
                            id="profile-phone"
                            type="text"
                            value={cellPhone}
                            onChange={(e) => setCellPhone(e.target.value)}

                        >

                        </OutlinedInput>
                    </FormControl>
                    <Button variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', borderRadius: '20px', mt: 2 }}
                        onClick={handleUpdate}
                    >Bilgilerimi Güncelle</Button>
                </Box>

                {/* Sağ taraf Sifre guncelleme alani */}
                <Box display={"flex"} flexDirection={"column"} gap='10px' ml='auto' mr='150px' width={350}  >
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
                    <Button variant="contained" sx={{ backgroundColor: ' #f3e3cc', color: 'black', borderRadius: '20px', mt: 2 }}>Şifremi Güncelle</Button>
                </Box>
            </Box>
        </>
    )
}
export default Profile 