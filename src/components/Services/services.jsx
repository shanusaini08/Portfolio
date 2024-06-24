import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faPalette, faCloud, faChartBar, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './services.css';

const ServicesSection = () => {
  // Sample service data
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using the latest technologies to ensure a seamless user experience. We specialize in front-end and back-end development, ensuring high performance and scalability.',
      icon: faDesktop,
    },
    {
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications for both Android and iOS platforms, tailored to meet your business needs. Our apps are designed with intuitive interfaces and robust backend integration.',
      icon: faMobileAlt,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with a focus on user experience and interaction. Our designs are crafted to enhance usability and create memorable user experiences.',
      icon: faPalette,
    },
    {
      title: 'Cloud Services',
      description: 'Offering scalable cloud solutions to help you manage your business operations more efficiently and securely. From cloud migration to maintenance, we ensure seamless integration and optimal performance.',
      icon: faCloud,
    },
    {
      title: 'Digital Marketing',
      description: 'Providing comprehensive digital marketing strategies to enhance your online presence and drive more traffic. We utilize SEO, SEM, and social media marketing to maximize your digital reach.',
      icon: faBullhorn,
    },
    {
      title: 'Data Analysis',
      description: 'Performing insightful data analysis to help you make informed decisions and drive business growth. From data mining to predictive analytics, we provide actionable insights for strategic planning.',
      icon: faChartBar,
    },
  ];

  return (
    <div id="services" className="services-section">
      <Typography variant="h4" gutterBottom className="services-heading">
        Our Services
      </Typography>
      <Grid container spacing={4} className="services-grid">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="service-card">
              <CardContent>
                <div className="service-icon-container">
                  <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
                </div>
                <Typography gutterBottom variant="h5" component="div" className="service-title">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="service-description">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ServicesSection;
