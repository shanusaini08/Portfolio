import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PosterSection from './components/PosterSection/PosterSection';
import ServicesSection from './components/Services/services';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import KeyFeaturesSection from './components/KeyFeaturesSection/KeyFeaturesSection';
import ContactUs from './components/ContactUs/ContactUs';
import OurLatestProjects from './components/OurLatestProjects/OurLatestProjects';
import Footer from './components/Footer/Footer';
import ProjectsPage from './pages/ProjectsPage';
import AboutUsPage from './pages/AboutUsPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <PosterSection />
              <WhoWeAre />
              <KeyFeaturesSection />
              <ServicesSection />
              <OurLatestProjects />
              <ContactUs id="get-in-touch" />
            </>
          } />
          <Route path="/Project" element={<ProjectsPage />} />
          <Route path="/About-Us" element={<AboutUsPage />} />
          <Route path="/Technologies" element={<TechnologiesPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Contact-Us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
