// src/pages/ProjectsPage.jsx
import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './ProjectsPage.css';

// Import images
import fvbankImage from '../assets/projects/fvbank.jpg';
import crypticOceanImage from '../assets/projects/crypticocean.png';
import zicklinContractingImage from '../assets/projects/zicklincontracting.png';
import kotoImage from '../assets/projects/koto.png';
import audiosocketImage from '../assets/projects/audiosocket.png';
import eighteenmotorsImage from '../assets/projects/eighteenmotors.png';
import rfmImage from '../assets/projects/rfm.png';
import topgeekImage from '../assets/projects/topgeek.png';
import zocialImage from '../assets/projects/zocial.png';
import nayilocationImage from '../assets/projects/nayilocation.png';
import chantImage from '../assets/projects/chant.png';
import yugImage from '../assets/projects/yug.jpg';
import wishtokImage from '../assets/projects/wishtok.png';

const projects = [
  {
    name: 'Fvbank',
    image: fvbankImage,
    link: 'https://www.fvbank.us/',
    technologies: 'React, Node.js, AWS',
  },
  {
    name: 'Cryptic Ocean',
    image: crypticOceanImage,
    link: 'https://crypticocean.com/',
    technologies: 'Angular, Node.js, AWS',
  },
  {
    name: 'Zicklin Contracting',
    image: zicklinContractingImage,
    link: 'https://www.zicklincontracting.com/',
    technologies: 'WordPress, PHP, MySQL',
  },
  {
    name: 'Zocial',
    image: zocialImage,
    link: 'https://zocial.in/',
    technologies: 'React, Node.js',
  },
  {
    name: 'Topgeek',
    image: topgeekImage,
    link: 'https://topgeek.io/',
    technologies: 'Vue.js, Laravel, AWS',
  },
  {
    name: 'Kotocrypto',
    image: kotoImage,
    link: 'https://kotocrypto.com/',
    technologies: 'React, Node.js, AWS',
  },
  {
    name: 'Audiosocket',
    image: audiosocketImage,
    link: 'https://www.audiosocket.com/',
    technologies: 'React, Node.js, AWS',
  },
  {
    name: 'RJFMS',
    image: rfmImage,
    link: 'https://ritajfms.com/',
    technologies: 'WordPress, PHP, MySQL',
  },
  {
    name: 'EighteenMotors',
    image: eighteenmotorsImage,
    link: 'https://www.eighteenmotors.com/',
    technologies: 'React, Node.js, AWS',
  },
  {
    name: 'Fvbank Mobile App',
    image: fvbankImage,
    link: 'https://play.google.com/store/apps/details?id=us.fvbank.mobile',
    technologies: 'React Native, Firebase',
  },
  {
    name: 'Chant Mobile App',
    image: chantImage,
    link: 'https://play.google.com/store/apps/details?id=com.geekyants.services.chant&hl=en_IN&gl=US',
    technologies: 'React Native, Firebase',
  },
  {
    name: 'Yug Network Mobile App',
    image: yugImage,
    link: 'https://play.google.com/store/apps/details?id=network.yug',
    technologies: 'Flutter, Firebase',
  },
  {
    name: 'Wishtok Mobile App',
    image: wishtokImage,
    link: 'https://play.google.com/store/apps/details?id=com.wishtokapp',
    technologies: 'Swift, Firebase',
  },
  {
    name: 'Nayi Location',
    image: nayilocationImage,
    link: 'https://play.google.com/store/apps/details?id=com.organisation.nayiLocation',
    technologies: 'React Native, Firebase',
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Typography variant="h4" component="h2" className="projects-title" gutterBottom>
        Our Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="project-card">
              <Box className="project-image-wrapper">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="image-overlay">
                  <IconButton
                    className="project-icon"
                    aria-label="view project"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </div>
              </Box>
              <Typography variant="h6" className="project-name">
                {project.name}
              </Typography>
              <Typography variant="body2" className="project-technologies">
                {project.technologies}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectsPage;
