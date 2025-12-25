import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import './style.css';

const AboutSection = () => {
  return (
    <Box className="about-container">
      <Container maxWidth="lg">
        <Typography variant="h2" className="about-title">
          About Me
        </Typography>

        <Grid container spacing={8}>
          {/* Left Side: Bio Text */}
          <Grid item xs={12} md={7}>
            <Typography className="about-text-primary">
                I am a high-performance developer dedicated to bridging the gap between 
                complex technical challenges and intuitive digital interfaces.
            </Typography>
            <Typography className="about-text-secondary">
                With over 5 years of experience, my expertise extends beyond standard web 
                architecture into high-stakes, real-world problem solving—most notably 
                <b> engineering precision software to solve critical laboratory bottlenecks.</b> 
                I don’t just write code; I build robust digital systems that translate 
                intricate data into seamless, human-centric experiences.
            </Typography>
          </Grid>

          {/* Right Side: Stats sidebar */}
          <Grid item xs={12} md={5}>
            <Box className="stats-column">
              
              <Box className="stat-item">
                <Typography className="stat-label">Experience</Typography>
                <Typography className="stat-value">5+ years in web development</Typography>
              </Box>

              <Box className="stat-item">
                <Typography className="stat-label">Projects</Typography>
                <Typography className="stat-value">20+ completed projects</Typography>
              </Box>

              <Box className="stat-item">
                <Typography className="stat-label">Efficiency</Typography>
                <Typography className="stat-value">20% more efficient project delivery</Typography>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;