// src/components/EMICalculator.jsx
import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography, MenuItem, Paper, Box, Select, FormControl, InputLabel } from "@mui/material";
import { useEMICalculator } from "../hooks/useemicalculator";
import AmortizationTable from "./amortizationtable";

const EMICalculator = () => {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [currency, setCurrency] = useState("USD");

  const { emi, schedule, calculateEMI, reset } = useEMICalculator();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loan && rate && term) {
      calculateEMI(loan, rate, term);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Loan Calculator Dashboard
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField label="Loan Amount" type="number" fullWidth value={loan} onChange={(e) => setLoan(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Interest Rate (%)" type="number" fullWidth value={rate} onChange={(e) => setRate(e.target.value)} required />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Term (Years)" type="number" fullWidth value={term} onChange={(e) => setTerm(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth type="submit">
                Calculate
              </Button>
            </Grid>
          </Grid>
        </Box>

        {emi > 0 && (
          <>
            <Typography variant="h5" sx={{ mt: 4 }}>
              Monthly EMI: {currency} {emi}
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Currency</InputLabel>
                  <Select value={currency} label="Currency" onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="outlined" color="error" fullWidth sx={{ mt: { xs: 2, sm: 0 } }} onClick={reset}>
                  Reset Table
                </Button>
              </Grid>
            </Grid>

            <AmortizationTable schedule={schedule} currency={currency} />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default EMICalculator;
