import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import './KeyFeaturesSection.css';

const KeyFeaturesSection = () => {
  return (
    <div className="key-features">
      <div className="key-features-section">
        <Grid container spacing={3}>
          {/* Card 1: Objective */}
          <Grid item xs={12} md={4}>
            <Card className="key-feature-card">
              <CardContent>
                <FontAwesomeIcon icon={faBullseye} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Objective
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  We Develop, Invent, and Produce Technological Solutions. The objective is to provide aspirant firms
                  with software products that are quality-focused. Our method of providing services combines structured
                  management with quick response to emerging trends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Slogan */}
          <Grid item xs={12} md={4}>
            <Card className="key-feature-card">
              <CardContent>
                <FontAwesomeIcon icon={faStar} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Slogan
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  Your Ideas + Our Knowledge = Highest Levels of Client Success.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Tagline */}
          <Grid item xs={12} md={4}>
            <Card className="key-feature-card">
              <CardContent>
                <FontAwesomeIcon icon={faGlobe} size="3x" className="key-feature-icon" />
                <Typography variant="h6" className="key-feature-title">
                  Tagline
                </Typography>
                <Typography variant="body1" className="key-feature-text">
                  To help organizations succeed online, we offer complete web and mobile app development that integrates
                  cutting-edge modern technologies like Blockchain and OpenAI Integrations.
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
