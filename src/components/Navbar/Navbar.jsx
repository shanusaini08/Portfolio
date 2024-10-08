import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/arcoirislogics.jpg';
import './Navbar.css';

const NavbarContainer = styled(AppBar)(({ scroll }) => ({
  background: scroll ? '#fff' : 'linear-gradient(90deg, #021048, #1e38a3)',
  color: scroll ? '#000' : '#fff',
  transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
  marginBottom: '16px',
  boxShadow: scroll ? '' : 'none',
}));

const NavbarTitle = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const NavbarButton = styled(Button)(({ active, scroll }) => ({
  marginLeft: '16px',
  color: 'inherit', // Inherit color from parent
  borderBottom: active ? `2px solid ${scroll ? '#021048' : '#fff'}` : 'none',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: `2px solid ${scroll ? '#021048' : '#fff'}`,
  },
}));

const Logo = styled('img')({
  marginRight: '10px',
  height: '40px', // Adjust as needed
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setDrawerOpen(false); // Close drawer when switching to desktop view
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/About-Us' },
    { text: 'Technologies', link: '/Technologies' },
    { text: 'Services', link: '/Services' },
    { text: 'Contact Us', link: '/Contact-Us' },
  ];

  return (
    <NavbarContainer position="fixed" scroll={scroll}>
      <Container maxWidth="lg">
        <Toolbar>
          <NavbarTitle variant="h6">
            <Logo src={logo} alt="Arcoiris Logics Logo" />
            Arcoiris Logics
          </NavbarTitle>
          {!isMobileView && (
            <div className="menu-desktop">
              {menuItems.map((item) => (
                <NavbarButton
                  key={item.text}
                  component={Link}
                  to={item.link}
                  scroll={scroll}
                  active={location.pathname === item.link}
                >
                  {item.text}
                </NavbarButton>
              ))}
            </div>
          )}
          <IconButton edge="start" color="inherit" aria-label="menu" className="menu-mobile" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <div className="drawer-header">
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.link}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
