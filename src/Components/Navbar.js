import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import { redirect } from 'react-router-dom';
// import { Grid } from '@mui/material';

const links = [{
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/jerryfitzner/'
  },{
    title: "GitHub",
    icon: <GitHubIcon/>,
    url: 'https://github.com/jerryfitzner'
  },{
    title: "Blog",
    icon: <BookIcon />,
    url: 'https://blogs.jerryfitzner.dev'
  }];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const redirectUrl = (url) => {
    return redirect('www.google.com'); 
  };

  return (
    <AppBar position="static"
     sx={{
      backgroundColor: 'white',
      paddingLeft: 4,
     }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img 
            src={Logo} 
            alt='Jerry Fitzner Logo' 
            height={50}
            // sx={{
            //   mr: 2,
            //   display: { xs: 'none', md: 'flex' },
            // }}
          />
          

          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row-reverse' }}>
            <IconButton
              size="large"
              // justifycontent="flex-end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#229EC3"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => ( 
                <MenuItem key={link.title} onClick={handleCloseNavMenu}>
                  {link.icon} 
                  <Typography textAlign="center">{link.title}</Typography>
                </MenuItem>
              ))} 
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse', paddingRight: 4,  }}>
            {links.map((link) => (
              <Button
                key={link.title}
                onClick={redirectUrl(link.url)}
                sx={{ my: 2, color: '#229EC3', display: 'block' }}
              >
                {link.icon}{link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
