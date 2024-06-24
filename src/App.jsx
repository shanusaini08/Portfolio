import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PosterSection from './components/PosterSection/PosterSection';
import ServicesSection from './components/Services/services';  // Correct path to ServicesSection
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import KeyFeaturesSection from './components/KeyFeaturesSection/KeyFeaturesSection';
import ContactUs from './components/ContactUs/ContactUs';
import OurLatestProjects from './components/OurLatestProjects/OurLatestProjects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PosterSection /> {/* Add id attribute */}
      <WhoWeAre  />
      <KeyFeaturesSection /> {/* Add id attribute */}
      <ServicesSection /> {/* Assign an id to ServicesSection */}
      <OurLatestProjects />
      <ContactUs id="get-in-touch" />
      <Footer />
    </div>
  );
}

export default App;
