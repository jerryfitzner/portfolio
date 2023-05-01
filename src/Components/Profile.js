import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from '../Jerry.Fitzner2.png';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Profile = () => {
  return(
    <Container>
      <Box >
        <Avatar 
          alt="Jerry Fitzner" 
          src={logo}
          sx={{
            width: 400,
            height: 400,
            justifyContent: 'Center',
          }}
        />
        <Typography>
          I am a Software Developer
        </Typography>
      </Box>    
    </Container>
  )
}

export default Profile;