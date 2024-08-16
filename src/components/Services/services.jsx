import React, { useCallback } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faPalette, faMobile, faLock, faCode } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import './services.css';

const ServicesSection = () => {
  const { ref: sectionRef, inView, entry } = useInView({ triggerOnce: false, threshold: 0.1 });

  // Function to handle the animation reset
  const resetAnimation = useCallback(() => {
    if (entry && entry.isIntersecting) {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        card.classList.remove(`animate-${index + 1}`);
        void card.offsetWidth; // Trigger a reflow
        card.classList.add(`animate-${index + 1}`);
      });
    }
  }, [entry]);

  React.useEffect(() => {
    resetAnimation();
  }, [inView, resetAnimation]);

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using the latest technologies to ensure a seamless user experience. We specialize in front-end and back-end development, ensuring high performance and scalability.',
      icon: faDesktop,
    },
    {
      title: 'Android Development',
      description: 'Creating user-friendly mobile applications for the Android platform, tailored to meet your business needs. Our apps are designed with intuitive interfaces and robust backend integration.',
      icon: faMobile,
    },
    {
      title: 'iOS Development',
      description: 'Creating user-friendly mobile applications for the iOS platform, tailored to meet your business needs. Our apps are designed with intuitive interfaces and robust backend integration.',
      icon: faMobileAlt,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with a focus on user experience and interaction. Our designs are crafted to enhance usability and create memorable user experiences.',
      icon: faPalette,
    },
    {
      title: 'Blockchain',
      description: 'Implementing blockchain technology to provide secure, decentralized solutions for various industries. We offer services from smart contract development to blockchain integration.',
      icon: faLock,
    },
    {
      title: 'Python Stack Development',
      description: 'Developing robust applications using Python and its frameworks. We specialize in building scalable and efficient backend solutions to support your business needs.',
      icon: faCode,
    },
  ];

  return (
    <div className="services-section" ref={sectionRef}>
      <Typography variant="h4" component="h2" gutterBottom className="services-heading">
        Our Services
      </Typography>
      <Grid container spacing={4} className="services-grid">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={`service-card service-card-${index + 1}`} data-animation={`animate-${index + 1}`}>
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
