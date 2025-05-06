// src/hooks/useEMICalculator.js
import { useState } from "react";

export const useEMICalculator = () => {
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = (principal, annualRate, termYears) => {
    const P = parseFloat(principal);
    const R = parseFloat(annualRate) / 12 / 100; // Monthly interest rate
    const N = parseFloat(termYears) * 12; // Loan term in months

    // EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]
    const numerator = P * R * Math.pow(1 + R, N);
    const denominator = Math.pow(1 + R, N) - 1;
    const emiVal = numerator / denominator;

    setEmi(emiVal.toFixed(2));

    const amortization = [];
    let balance = P;

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emiVal - interest;
      balance -= principal;

      amortization.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    setSchedule(amortization);
  };

  const reset = () => {
    setEmi(0);
    setSchedule([]);
  };

  return { emi, schedule, calculateEMI, reset };
};
