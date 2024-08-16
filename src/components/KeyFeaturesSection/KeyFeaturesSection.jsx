import React, { useCallback } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandshake, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import './KeyFeaturesSection.css';

const KeyFeaturesSection = () => {
  const { ref: sectionRef, inView, entry } = useInView({ triggerOnce: false, threshold: 0.1 });

  // Function to handle the animation reset
  const resetAnimation = useCallback(() => {
    if (entry && entry.isIntersecting) {
      const cards = document.querySelectorAll('.key-feature-card');
      cards.forEach(card => {
        card.classList.remove('animate-left', 'animate-right', 'animate');
        void card.offsetWidth; // Trigger a reflow
        card.classList.add(card.dataset.animation);
      });
    }
  }, [entry]);

  React.useEffect(() => {
    resetAnimation();
  }, [inView, resetAnimation]);

  return (
    <div className="key-features" ref={sectionRef}>
      <div className="key-features-section">
        <Grid container spacing={3}>
          {/* Card 1: Commitment */}
          <Grid item xs={12} md={4}>
            <Card
              className="key-feature-card"
              data-animation="animate-left"
            >
              <CardContent>
                <FontAwesomeIcon icon={faBullseye} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Our Commitment
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  We are dedicated to providing top-notch IT solutions with a focus on quality, reliability, and customer satisfaction.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Trust */}
          <Grid item xs={12} md={4}>
            <Card
              className="key-feature-card"
              data-animation="animate"
            >
              <CardContent>
                <FontAwesomeIcon icon={faHandshake} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Building Trust
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  Our priority is to build lasting relationships through transparency, reliability, and a commitment to exceeding expectations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Security */}
          <Grid item xs={12} md={4}>
            <Card
              className="key-feature-card"
              data-animation="animate-right"
            >
              <CardContent>
                <FontAwesomeIcon icon={faShieldAlt} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Security First
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  We prioritize the security of our solutions, ensuring that all projects adhere to the highest standards of data protection and privacy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
