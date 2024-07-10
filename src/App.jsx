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
import ContactUsPage from './pages/ContactUsPage'; // Import ContactUsPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={
            <>
              <PosterSection />
              <WhoWeAre />
              <KeyFeaturesSection />
              <ServicesSection />
              <OurLatestProjects />
              <ContactUs id="get-in-touch" />
            </>
          } />
          <Route path="/Portfolio/Project" element={<ProjectsPage />} />
          <Route path="/Portfolio/About-Us" element={<AboutUsPage />} />
          <Route path="/Portfolio/Technologies" element={<TechnologiesPage />} />
          <Route path="/Portfolio/Services" element={<ServicesPage />} />
          <Route path="/Portfolio/Contact-Us" element={<ContactUsPage />} /> {/* Add route for ContactUsPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
