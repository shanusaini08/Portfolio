// src/components/WhoWeAre/WhoWeAre.jsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import './WhoWeAre.css';
import whoWeAreImage from '../../assets/about-us.png';

const WhoWeAre = () => {
  return (
    <div id="who-we-are" className="who-we-are-section">
      <Typography variant="h4" component="h2" className="who-we-are-title" gutterBottom>
        About Arcoiris Logics
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} className="who-we-are-content">
          <Typography variant="body1" paragraph>
            Arcoiris Logics is a software company. With the integration of cutting-edge modern technologies including Blockchain, Python, PHP, Laravel, Wordpress, Drupal, React JS, React Native, UI/UX, Node JS, and Angular, we provide full-service web and mobile app development. We assist established businesses, SMEs, and start-ups in modernizing every facet of their business processes, from strategy to implementation. We provide end-to-end testing services (Automation & Manual).
          </Typography>
          <Typography variant="body1" paragraph>
            By developing cutting-edge technologies and making established products more appealing to clients with superior digital abilities, Arcoiris Logics helps brands generate value across the entire product lifecycle. We focus on enhancing user interactions in a digital-first world, guiding businesses to become more application-oriented, innovate within budgetary constraints, and rapidly deploy the latest digital products and applications.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="who-we-are-image-wrapper">
            <img src={whoWeAreImage} alt="Who We Are" className="who-we-are-image" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhoWeAre;
