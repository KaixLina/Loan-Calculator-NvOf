// src/components/notfound.jsx

import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/fournotfour.json";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
        <Box sx={{ width: "100%", maxWidth: 500, mx: "auto" }}>
          <Lottie animationData={notFoundAnimation} loop={true} />
        </Box>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4, color: "text.secondary" }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
