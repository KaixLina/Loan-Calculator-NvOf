// src/pages/AboutPage.jsx

import React from "react";
import Navbar from "./navbar";
import { Container, Typography, Box } from "@mui/material";
import Lottie from "lottie-react";
import comingSoonAnimation from "../assets/commingsoon.json"; // put your animation here

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
        <Box sx={{ width: "100%", maxWidth: 500, mx: "auto" }}>
          <Lottie animationData={comingSoonAnimation} loop={true} />
        </Box>

        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Our About Page is under construction. Stay tuned!
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
