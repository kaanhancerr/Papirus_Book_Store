import { Box, Grid } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <Box ml='300px' mt={5}>
            <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                {[...Array(15)].map((kutu, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                        <Box width="230px" height='350px' sx={{ backgroundColor: 'black' }} />
                    </Grid>
                ))}
            </Grid>



        </Box>
    )
}
export default Home