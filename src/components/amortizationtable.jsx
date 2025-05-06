import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AmortizationTable = ({ schedule, currency }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper sx={{ mt: 4, borderRadius: 3, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule ({currency})
      </Typography>

      <TableContainer
        sx={{
          overflowX: "auto", // Only the table scrolls
          borderRadius: 2,
        }}
      >
        <Table
          stickyHeader
          sx={{
            minWidth: isMobile ? 600 : "100%", // Force horizontal scroll on mobile
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>
                <strong>Month</strong>
              </TableCell>
              <TableCell>
                <strong>Principal</strong>
              </TableCell>
              <TableCell>
                <strong>Interest</strong>
              </TableCell>
              <TableCell>
                <strong>Remaining Balance</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((item) => (
              <TableRow key={item.month} hover sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}>
                <TableCell>{item.month}</TableCell>
                <TableCell>
                  {item.principal} {currency}
                </TableCell>
                <TableCell>
                  {item.interest} {currency}
                </TableCell>
                <TableCell>
                  {item.balance} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AmortizationTable;
