import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import './ContactUs.css';
import contactImage from '../../assets/contact-us.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      openGmail();
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const openGmail = () => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:info@arcoirislogics.in?subject=${subject}&body=${body}`;
  };

  return (
    <div id="get-in-touch" className="contact-us">
      <div className="contact-us-section">
        <Typography variant="h4" component="h2" className="contact-us-title" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="contact-us-image-wrapper">
              <img src={contactImage} alt="Contact Us" className="contact-us-image" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="contact-us-form-wrapper">
              <form className="contact-us-form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      className="contact-us-input"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={!!formErrors.name}
                      helperText={formErrors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      className="contact-us-input"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      className="contact-us-input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={!!formErrors.subject}
                      helperText={formErrors.subject}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      className="contact-us-input"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      error={!!formErrors.message}
                      helperText={formErrors.message}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="contact-us-button"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactUs;
