import { useEffect, useState } from "react";
import axios from "axios";

export const useExchangeRates = (baseCurrency) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://v6.exchangerate-api.com/v6/8b2e1263bd9dd9897924636e/latest/${baseCurrency}`)
      .then((res) => {
        setRates(res.data.conversion_rates);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [baseCurrency]);

  return { rates, loading };
};
