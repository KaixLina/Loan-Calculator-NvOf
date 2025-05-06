import React, { useState } from "react";
import {
  CircularProgress,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./navbar";
import { useExchangeRates } from "../hooks/useexchangerates";
import { useTheme } from "@mui/material/styles";

const supportedCurrencies = ["USD", "EUR", "INR", "GBP", "AUD", "CAD", "JPY", "CNY"];

const ExchangeRatesPage = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [searchQuery, setSearchQuery] = useState("");
  const { rates, loading } = useExchangeRates(baseCurrency);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredRates = Object.entries(rates).filter(([currency]) => currency.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom textAlign={isMobile ? "center" : "left"}>
          Live Exchange Rates (Base: {baseCurrency})
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            mb: 2,
            alignItems: isMobile ? "stretch" : "center",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="currency-select-label">Base Currency</InputLabel>
            <Select labelId="currency-select-label" value={baseCurrency} label="Base Currency" onChange={(e) => setBaseCurrency(e.target.value)}>
              {supportedCurrencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField fullWidth label="Search Currency" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Paper
            elevation={3}
            sx={{
              mt: 2,
              borderRadius: 2,
              overflow: "hidden",
              width: "100%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                maxHeight: "70vh",
                overflowY: "auto",
              }}
              className="responsive-table-scroll"
            >
              <Table stickyHeader size={isMobile ? "small" : "medium"}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell>
                      <strong>Currency</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Rate</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRates.map(([currency, rate]) => (
                    <TableRow key={currency} hover>
                      <TableCell>{currency}</TableCell>
                      <TableCell>{rate}</TableCell>
                    </TableRow>
                  ))}
                  {filteredRates.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={2} align="center">
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        )}
      </Container>
    </>
  );
};

export default ExchangeRatesPage;
