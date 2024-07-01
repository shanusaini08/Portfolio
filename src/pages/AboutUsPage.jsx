// src/pages/AboutUsPage.jsx
import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import whoWeAreImage from '../assets/about-us.png';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Typography variant="h4" component="h2" className="about-us-title" gutterBottom>
        About Arcoiris Logics
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} className="about-us-content">
          <Typography variant="body1" paragraph>
            Arcoiris Logics is a software company. With the integration of cutting-edge modern technologies including Bitcoin, Python, PHP, Laravel, Wordpress, Drupal, React JS, React Native, UI/UX, Node JS, and Angular, we provide full-service web and mobile app development. We assist established businesses, SMEs, and start-ups in modernizing every facet of their business processes, from strategy to implementation. We provide end-to-end testing services (Automation & Manual).
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="about-us-image-wrapper">
            <img src={whoWeAreImage} alt="About Us" className="about-us-image" />
          </Box>
        </Grid>
      </Grid>
      <div className="additional-content">
      <Typography variant="body1" paragraph>
            By developing cutting-edge technologies and making established products more appealing to clients with superior digital abilities, Arcoiris Logics helps brands generate value across the entire product lifecycle. We focus on enhancing user interactions in a digital-first world, guiding businesses to become more application-oriented, innovate within budgetary constraints, and rapidly deploy the latest digital products and applications.
          </Typography>
          <Typography variant="body1" paragraph>
            To help organizations succeed online, we offer complete web and mobile app development that integrates cutting-edge modern technologies like blockchain, IoT, AR/VR, AI, big data, and machine learning. We provide cutting-edge digital solutions with the ideal fusion of technology, innovation, and skill. We support large-scale enterprises, SMEs, and startups in modernizing all aspects of their business operations, from planning to implementation.
          </Typography>
          <Typography variant="body1" paragraph>
            From initial concept to successful completion, we support our clients and build up their solid online presence. Your Ideas + Our Knowledge = Highest Levels of Client Success.
          </Typography>
          <Typography variant="body1" paragraph>
            Our purpose is to deliver on the promise of technology and human ingenuity. We help our clients become the next and best versions of themselves.
          </Typography>
    </div>
    </div>
  );
};

export default AboutUsPage;
