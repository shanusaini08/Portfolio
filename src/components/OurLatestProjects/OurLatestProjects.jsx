// src/components/OurLatestProjects/OurLatestProjects.jsx
import React, { useState } from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './OurLatestProjects.css';
import fvbankImage from '../../assets/projects/fvbank.jpg'; // Example image, add actual images
import crypticOceanImage from '../../assets/projects/crypticocean.png'; // Example image, add actual images
import zicklinContractingImage from '../../assets/projects/zicklincontracting.png'; // Example image, add actual images
import chantMobileAppImage from '../../assets/projects/chant.png'; // Example image, add actual images
import yugNetworkMobileAppImage from '../../assets/projects/yug.jpg'; // Example image, add actual images
import wishtokMobileAppImage from '../../assets/projects/wishtok.png'; // Example image, add actual images

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
    name: 'Chant Mobile App',
    image: chantMobileAppImage,
    link: 'https://play.google.com/store/apps/details?id=com.geekyants.services.chant&hl=en_IN&gl=US',
    technologies: 'React Native, Firebase',
  },
  {
    name: 'Yug Network Mobile App',
    image: yugNetworkMobileAppImage,
    link: 'https://play.google.com/store/apps/details?id=network.yug',
    technologies: 'Flutter, Firebase',
  },
  {
    name: 'Wishtok Mobile App',
    image: wishtokMobileAppImage,
    link: 'https://play.google.com/store/apps/details?id=com.wishtokapp',
    technologies: 'Swift, Firebase',
  },
];

const OurLatestProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectHover = (index) => {
    setActiveProject(index);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  return (
    <div id="projects" className="our-latest-projects">
      <div className="our-latest-projects-section">
        <Typography
          variant="h4"
          component="h2"
          className="our-latest-projects-title"
          gutterBottom
          style={{ marginTop: '40px', marginBottom: '80px' }}
        >
          Our Latest Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="project-card">
                <Box
                  className="project-image-wrapper"
                  onMouseEnter={() => handleProjectHover(index)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img src={project.image} alt={project.name} className="project-image" />
                  {activeProject === index && (
                    <div className="image-overlay">
                      <IconButton
                        className="project-icon"
                        aria-label="view project"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </div>
                  )}
                </Box>
              </div>
                <Typography variant="h6" className="project-name">
                  {project.name}
                </Typography>
                <Typography variant="body2" className="project-technologies">
                  {project.technologies}
                </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OurLatestProjects;
