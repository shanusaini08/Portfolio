import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import './TechnologiesPage.css';
import mobileImage from '../assets/technologies/mobile2.webp';
import iosImage from '../assets/technologies/ios.webp';
import androidImage from '../assets/technologies/android.webp';
import flutterImage from '../assets/technologies/flutter.png';
import reactNativeImage from '../assets/technologies/react-native.png';
import wordpressImage from '../assets/technologies/wordpress.png';
import meanImage from '../assets/technologies/mean3.png';
import mernImage from '../assets/technologies/mern3.png';
import nodejsImage from '../assets/technologies/nodejs.png';
import pythonImage from '../assets/technologies/python.png';
import phpImage from '../assets/technologies/php3.png';

const TechnologiesPage = () => {
  const technologies = [
    {
      title: 'Mobile',
      image: mobileImage,
      description: 'We offer end-to-end mobile app development services, from ideation to deployment and maintenance. Our expertise spans iOS, Android, and cross-platform solutions, ensuring high-quality, scalable applications that meet your business goals. The services which we offer under this technology are :',
      bulletPoints: [
        'Native and Cross-Platform Development',
        'UI/UX Design',
        'Integration with Third-Party APIs',
        'Performance Optimization',
        'App Store Submission',
        'Maintenance and Support',
        'User Research and Testing',
        'Scalability Solutions'
      ],
    },
    { 
      title: 'iOS App Development', 
      image: iosImage, 
      description: 'Our custom iOS app development services are tailored to your business needs. We leverage the latest technologies and design principles to create intuitive, feature-rich applications that enhance user engagement and drive growth. The services which we offer under this technology are :',
      bulletPoints: [
        'Swift and Objective-C Development',
        'App Store Deployment',
        'Custom iOS Solutions',
        'User-Centric Design',
        'iOS Widgets Development',
        'iOS Extensions',
        'iPad App Development',
        'Apple Watch App Development'
      ],
    },
    { 
      title: 'Android App Development', 
      image: androidImage, 
      description: 'With expertise in Android app development, we deliver robust and scalable solutions that cater to diverse industry verticals. Our team ensures adherence to best practices and focuses on delivering apps that resonate with your audience. The services which we offer under this technology are :',
      bulletPoints: [
        'Kotlin and Java Expertise',
        'Google Play Store Deployment',
        'Custom Android Solutions',
        'User-Centric Design',
        'Android TV App Development',
        'Android Auto Integration',
        'Wear OS Development',
        'Android Tablet Development'
      ],
    },
    { 
      title: 'Flutter App Development', 
      image: flutterImage, 
      description: 'We specialize in Flutter app development, offering cross-platform solutions that combine native performance with expressive UI design. Our Flutter developers create visually stunning and fast apps for iOS, Android, and beyond. The services which we offer under this technology are :',
      bulletPoints: [
        'Single Codebase for Multiple Platforms',
        'Expressive and Flexible UI',
        'High Performance',
        'Custom Flutter Solutions',
        'Hot Reload for Faster Development',
        'Flutter Web Development',
        'Flutter Desktop Development',
        'Cross-Platform Plugin Development'
      ],
    },
    { 
      title: 'React Native App Development', 
      image: reactNativeImage, 
      description: 'Harnessing the power of React Native, we build powerful mobile apps that run seamlessly on multiple platforms. Our expertise in React Native development ensures high performance, code reusability, and rapid deployment. The services which we offer under this technology are :',
      bulletPoints: [
        'Cross-Platform Compatibility',
        'Reusable Code',
        'High Performance',
        'Custom React Native Solutions',
        'React Navigation',
        'State Management with Redux',
        'Expo Development',
        'React Native for Web'
      ],
    },
    { 
      title: 'WordPress Development', 
      image: wordpressImage, 
      description: 'Our WordPress development services encompass custom theme design, plugin development, and website optimization. We create scalable and secure WordPress solutions that align with your brand objectives and user expectations. The services which we offer under this technology are :',
      bulletPoints: [
        'Custom Themes and Plugins',
        'SEO Optimization',
        'Responsive Design',
        'Security Enhancements',
        'WooCommerce Development',
        'WordPress Multisite',
        'Performance Optimization',
        'Content Migration'
      ],
    },
    { 
      title: 'MEAN Stack Development', 
      image: meanImage, 
      description: 'Utilizing MongoDB, Express.js, Angular, and Node.js, we offer full-stack development services. Our MEAN stack solutions are tailored to deliver robust, scalable applications that empower businesses to innovate and grow. The services which we offer under this technology are :',
      bulletPoints: [
        'MongoDB Integration',
        'Angular Front-End Development',
        'Node.js Back-End Development',
        'Express.js Middleware',
        'Real-Time Applications',
        'RESTful APIs',
        'Single Page Applications (SPA)',
        'Cloud Deployment'
      ],
    },
    { 
      title: 'MERN Stack Development', 
      image: mernImage, 
      description: 'With expertise in MongoDB, Express.js, React, and Node.js, we build dynamic and responsive web applications. Our MERN stack development services focus on delivering high-performance solutions that drive business growth. The services which we offer under this technology are :',
      bulletPoints: [
        'MongoDB Integration',
        'React Front-End Development',
        'Node.js Back-End Development',
        'Express.js Middleware',
        'Real-Time Applications',
        'GraphQL Integration',
        'Server-Side Rendering (SSR)',
        'Cloud Deployment'
      ],
    },
    { 
      title: 'Node.js Development', 
      image: nodejsImage, 
      description: 'We specialize in Node.js development to create scalable and efficient server-side applications. Our Node.js solutions are crafted to handle high traffic and complex requirements, ensuring reliability and performance. The services which we offer under this technology are :',
      bulletPoints: [
        'Real-Time Applications',
        'API Development',
        'Scalable Solutions',
        'Custom Node.js Services',
        'Microservices Architecture',
        'Serverless Applications',
        'Socket.IO Integration',
        'Node.js Performance Tuning'
      ],
    },
    { 
      title: 'Python Development', 
      image: pythonImage, 
      description: 'Leveraging Python, we develop web and desktop applications, data analytics solutions, and machine learning models. Our Python development services enable businesses to harness the power of AI and data science effectively. The services which we offer under this technology are :',
      bulletPoints: [
        'Web Development',
        'Data Analytics',
        'Machine Learning Models',
        'Custom Python Solutions',
        'Django and Flask Expertise',
        'Automation Scripts',
        'Big Data Solutions',
        'AI and ML Integration'
      ],
    },
    { 
      title: 'PHP Development', 
      image: phpImage, 
      description: 'Our PHP development services encompass building feature-rich web applications using PHP frameworks such as Laravel and Symfony. We deliver scalable, secure, and customized PHP solutions that drive digital transformation. The services which we offer under this technology are :',
      bulletPoints: [
        'Custom PHP Applications',
        'Laravel and Symfony Expertise',
        'Scalable Solutions',
        'Security Enhancements',
        'RESTful APIs',
        'CMS Development',
        'E-commerce Solutions',
        'Legacy Code Refactoring'
      ],
    },
  ];

  return (
    <div className="tech">
      <div className="root">
        <Typography variant="h4" component="h2" className="title" gutterBottom>
        Technologies We Use
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {technologies.map((tech, index) => (
            <Grid item xs={12} key={index} className="technologyContainer">
              <Box className="technologyItem">
                <Box className="technologyInner">
                  <Box className="technologyFront">
                    <img src={tech.image} alt={tech.title} className="technologyImage" />
                    <div className="technologyContent">
                      <Typography variant="h6" gutterBottom>
                        {tech.title}
                      </Typography>
                      <Typography variant="body1" align="left">
                        {tech.description}
                      </Typography>
                      <div className="bulletPoints">
                        <ul className="bulletColumn">
                          {tech.bulletPoints.slice(0, 4).map((point, idx) => (
                            <li key={idx}>
                              <Typography variant="body1" align="left">
                                {point}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                        <ul className="bulletColumn">
                          {tech.bulletPoints.slice(4).map((point, idx) => (
                            <li key={idx}>
                              <Typography variant="body1" align="left">
                                {point}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default TechnologiesPage;
