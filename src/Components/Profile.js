import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from '../Jerry.Fitzner2.png';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Profile = () => {
  return(
    <Container>
      <Box 
        sx={{
          // display: 'flex'
          // display: {
          //   xs: 'block, flex',
          //   md: 'inline, flex',
          // },
          // alignItems: 'center',
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 xs={6} md={4}>
        <Avatar 
          alt="Jerry Fitzner" 
          src={logo}
          sx={{
            // md: {6},
            width: 400,
            height: 400,
            // justifyContent: 'Center',
          }}
        />
        </Grid2>
        <Grid2 xs={6} md={8}>
        <Typography
          sx={{
            // md: {6},
          }}
        >
          I am a Software Developer
        </Typography>
        </Grid2>
        </Grid2>
      </Box>    
    </Container>
  )
}

export default Profile;