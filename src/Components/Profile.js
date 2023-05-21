import { Avatar, Typography } from "@mui/material";
import React from "react";
import logo from '../Jerry.Fitzner2.png';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Profile = () => {
  return(
    <Grid2 container spacing={3} minHeight={410}>
      <Grid2 item xs={12} sm={5} display='flex' justifyContent='center' alignItems='center'>
        <Avatar 
          alt="Jerry Fitzner" 
          src={logo}
          sm={4}
          sx={{
            width: {
              xs: 250,
              sm: 350
            },
            height: {
              xs: 250,
              sm: 350
            },
          }}
        />
      </Grid2>
      <Grid2 item xs={12} sm={7} display='flex' justifyContent='center' alignItems='center'>
        <Typography 
          align="center"
          padding={4}
          fontSize={17}
          color='#229EC3'
        >
          I am a software engineer experienced in Ruby on Rails, React, and JavaScript based programming. With a background in technical problem-solving, I collaborate well on a team, communicate clearly, and remain calm in chaotic situations. I learn from failure, thrive on feedback, and am self-driven. My love of software development stems from the challenges it brings to create accessible and easy to use software for all.
        </Typography>
      </Grid2>
    </Grid2>

    // <Container >
    // <>
      /* <Box 
        sx={{
          // display: 'flex'
          // display: {
          //   xs: 'block, flex',
          //   md: 'inline, flex',
          // },
          // alignItems: 'center',
        }}
      > */
        
        /* <Grid2 container spacing={3} justifycontent='center' alignItems='center' sx={{flexGrow: 1,  display: { xs: 'flex', sm: 'none' }}}>
          <Grid2 xs={12} >
            <Avatar 
              alt="Jerry Fitzner" 
              src={logo}
              variant="soft"
              sx={{
                  width: 200,
                  height: 200,
              }}
            />
          </Grid2>
          <Grid2 xs={12} >
            <Typography
              sx={{
                // md: {6},
              }}
            >
              I am a Software Developer
            </Typography>
          </Grid2>
        </Grid2> */
      /* </Box>     */
    /* </Container> */
    /* </> */
  )
};

export default Profile;