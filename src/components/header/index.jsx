import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MoreIcon from '@mui/icons-material/MoreVert';
import {  Container, Divider, Drawer, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {  QuestionMarkOutlined,  SettingsOutlined } from '@mui/icons-material';
import Logo from '../Logo';
import Icon1 from "../../assets/images/icon-1.svg"
import Icon2 from "../../assets/images/icon-2.svg"
import Icon3 from "../../assets/images/icon-3.svg"
import Icon4 from "../../assets/images/icon-4.svg"
import Icon5 from "../../assets/images/icon-5.svg"


const drawerWidth = 240;
const navItems = [
    {label:'Growth plan',herf:'#',logo:Icon1,},
    {label:'Insigts',herf:'#',logo:Icon2},
    {label:'Business Outcomes',herf:'#',logo:Icon3},
    {label:'Reports', herf:'#',logo:Icon4},
    {label:'Growth Portal', herf:'#',logo:Icon5},
];





export default function Header(props) {
    const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{p:['10px','0'],width:'fit-content',margin:'auto'}}>
              <Logo />
          </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding >
            <ListItemIcon sx={{minWidth:'40px'}}>
              <img src={item.logo} width={'100%'} style={{maxWidth:'20px', marginLeft:'auto'}} />
            </ListItemIcon>
            <ListItemButton sx={{ textAlign: 'left' }} >
              <ListItemText primary={item.label}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
 


  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{'&.MuiToolbar-root':{p:0}}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{p:['10px','0']}}>
              <Logo />
          </Box>

       
          <Box sx={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <Box sx={{ 
                    display:'flex', 
                    width:['65%','65%','65%','60%'],
                    justifyContent:'flex-end',
                    gap:{ sm: '0', md: '1rem' } ,
                    marginRight:'2rem'
                    }}
            >
                {navItems.map((item) => (
                <Box key={item.label}  sx={{fontSize:'18px',flexGrow:'1',fontWeight:'400', lineHeight:'28px', display:'flex',gap:'0.7rem', alignItems:'center'}}>
                    <Box sx={{width:'18px', aspectRatio:'1/1', display:'flex'}} >
                        <img src={item.logo} width={'100%'} />
                    </Box>
                    <Link  >
                        {item.label}
                    </Link>
                </Box>
                ))}
            </Box>
          </Hidden>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large"  color="inherit">
                <QuestionMarkOutlined  />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
               <SettingsOutlined />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
               <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>

      {renderMenu}

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}