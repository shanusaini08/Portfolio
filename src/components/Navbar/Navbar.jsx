import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
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
});

const NavbarButton = styled(Button)({
  marginLeft: '16px',
  color: 'inherit', // Inherit color from parent
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); // Close drawer after clicking on mobile
  };

  const menuItems = [
    { text: 'Home', id: 'home' },
    { text: 'Services', id: 'services' },
    { text: 'About Us', id: 'who-we-are' },
    { text: 'Projects', id: 'projects' },
    { text: 'Contact Us', id: 'get-in-touch' },
  ];

  return (
    <NavbarContainer position="fixed" scroll={scroll}>
      <Container maxWidth="lg">
        <Toolbar>
          <NavbarTitle variant="h6">
            Arcoiris Logics
          </NavbarTitle>
          {!isMobileView && (
            <div className="menu-desktop">
              {menuItems.map((item) => (
                <NavbarButton key={item.text} onClick={() => scrollToSection(item.id)}>
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
                <ListItem button key={item.text} onClick={() => scrollToSection(item.id)}>
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
