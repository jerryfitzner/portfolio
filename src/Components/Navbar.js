import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo2.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';



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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed"
     sx={{
      backgroundColor: '#152448',
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
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#229EC3"
            >
              <MenuIcon 
                sx={{
                  color: '#229EC3',
                }}
              />
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
              {links.map((link, index) => ( 
                <a 
                href={link.url} 
                key={index}
                >
                <MenuItem onClick={handleCloseNavMenu} 
                sx={{
                  color: '#229EC3',
                  backgroundColor: '#152448',
                }}
                >
                  {link.icon} 
                  <Typography textAlign="center">{link.title}</Typography>
                </MenuItem>
                </a>
              ))} 
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse', paddingRight: 4,  }}>
            {links.map((link, index) => (
              <a href={link.url} key={index}> 
              <Button
                sx={{ my: 2, color: '#229EC3', display: 'block' }}
              >
                {link.icon}{link.title}
              </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
