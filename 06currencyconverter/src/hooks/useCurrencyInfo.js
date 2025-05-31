import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchRates = async () => {
      try {
        const res = await fetch(`http://www.floatrates.com/daily/${currency.toLowerCase()}.json`);
        const result = await res.json();

        const formatted = {};
        for (let key in result) {
          formatted[key.toUpperCase()] = result[key].rate;
        }

        setData(formatted);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        setData({});
      }
    };

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
