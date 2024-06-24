// src/components/Footer/Footer.jsx
import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-content-wrapper">
        <Box className="footer-content">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="footer-left">
              <Typography variant="h6" className="footer-title">
                Arcoiris Logics
              </Typography>
              <Typography variant="body2" className="footer-description">
                Explore how Arcoiris Logics can empower your business with our expertise in Mobile & Web App Development, Blockchain, Metaverse, and AI solutions. Transform your digital strategy today!
              </Typography>
              <Typography variant="body2" className="footer-contact">
                <strong>Email:</strong> <a href="mailto:arcoirislogics@gmail.com">arcoirislogics@gmail.com</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="footer-right">
              <Box className="footer-social">
                <IconButton aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/company/arcoiris-logics2/?viewAsMember=true', '_blank')}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="Instagram" onClick={() => window.open('https://www.instagram.com/arcoiris_logics/', '_blank')}>
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="Twitter" onClick={() => window.open('https://x.com/ALogics_1303', '_blank')}>
                  <TwitterIcon />
                </IconButton>
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography variant="body2" className="footer-copyright">
        &copy; {new Date().getFullYear()} Arcoiris Logics. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
